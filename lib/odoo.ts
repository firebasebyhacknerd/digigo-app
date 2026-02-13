type RpcService = "common" | "object";

type OdooConfig = {
  url: string;
  db: string;
  username: string;
  password: string;
  salesTeamId?: number;
  salespersonId?: number;
};

type OdooRpcError = {
  code: number;
  message: string;
  data?: {
    message?: string;
    name?: string;
    debug?: string;
  };
};

export type WebsiteLeadInput = {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  sector?: string;
  pipeSize?: string;
  hardness?: string;
  usage?: string;
  message?: string;
  ip?: string;
  source?: string;
};

export type WebsiteOrderInput = {
  customer: {
    name: string;
    phone: string;
    email?: string;
    city?: string;
  };
  lines: Array<{
    productId: number;
    quantity: number;
    unitPrice?: number;
    description?: string;
  }>;
  note?: string;
  source?: string;
};

type OdooPartner = { id: number };
type OdooOrder = { id: number; name: string; amount_total: number; state: string };

const DEFAULT_ODOO_URL = "https://digigo.odoo.com";

let authCache:
  | {
      uid: number;
      key: string;
      expiresAt: number;
    }
  | null = null;

function parseOptionalNumber(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function getOdooConfig(): OdooConfig {
  const url = (process.env.ODOO_URL || DEFAULT_ODOO_URL).trim();
  const db = (process.env.ODOO_DB || "").trim();
  const username = (process.env.ODOO_USERNAME || "").trim();
  const password = (process.env.ODOO_PASSWORD || "").trim();

  const missing = [
    !db ? "ODOO_DB" : "",
    !username ? "ODOO_USERNAME" : "",
    !password ? "ODOO_PASSWORD" : "",
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(`Missing Odoo env vars: ${missing.join(", ")}`);
  }

  return {
    url,
    db,
    username,
    password,
    salesTeamId: parseOptionalNumber(process.env.ODOO_SALES_TEAM_ID),
    salespersonId: parseOptionalNumber(process.env.ODOO_SALESPERSON_ID),
  };
}

function getRpcUrl(baseUrl: string): string {
  return `${baseUrl.replace(/\/+$/, "")}/jsonrpc`;
}

async function rpcCall<T>(
  config: OdooConfig,
  service: RpcService,
  method: string,
  args: unknown[]
): Promise<T> {
  const response = await fetch(getRpcUrl(config.url), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      params: {
        service,
        method,
        args,
      },
      id: Date.now(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Odoo request failed with HTTP ${response.status}`);
  }

  const data = (await response.json()) as {
    result?: T;
    error?: OdooRpcError;
  };

  if (data.error) {
    const message =
      data.error.data?.message || data.error.message || "Odoo RPC error";
    throw new Error(message);
  }

  return data.result as T;
}

async function authenticate(config: OdooConfig): Promise<number> {
  const key = `${config.url}|${config.db}|${config.username}|${config.password}`;
  const now = Date.now();
  if (authCache && authCache.key === key && now < authCache.expiresAt) {
    return authCache.uid;
  }

  const uid = await rpcCall<number>(config, "common", "login", [
    config.db,
    config.username,
    config.password,
  ]);

  if (!uid) {
    throw new Error("Odoo authentication failed");
  }

  authCache = {
    uid,
    key,
    expiresAt: now + 5 * 60 * 1000,
  };

  return uid;
}

async function executeKw<T>(
  config: OdooConfig,
  uid: number,
  model: string,
  method: string,
  args: unknown[] = [],
  kwargs: Record<string, unknown> = {}
): Promise<T> {
  return rpcCall<T>(config, "object", "execute_kw", [
    config.db,
    uid,
    config.password,
    model,
    method,
    args,
    kwargs,
  ]);
}

async function findPartnerId(
  config: OdooConfig,
  uid: number,
  email?: string,
  phone?: string
): Promise<number | null> {
  if (email) {
    const partners = await executeKw<OdooPartner[]>(
      config,
      uid,
      "res.partner",
      "search_read",
      [[["email", "=", email]]],
      { fields: ["id"], limit: 1 }
    );
    if (partners.length > 0) return partners[0].id;
  }

  if (phone) {
    const partners = await executeKw<OdooPartner[]>(
      config,
      uid,
      "res.partner",
      "search_read",
      [["|", ["phone", "=", phone], ["mobile", "=", phone]]],
      { fields: ["id"], limit: 1 }
    );
    if (partners.length > 0) return partners[0].id;
  }

  return null;
}

async function ensurePartnerId(
  config: OdooConfig,
  uid: number,
  customer: { name: string; phone: string; email?: string; city?: string; source?: string }
): Promise<number> {
  const existingPartnerId = await findPartnerId(
    config,
    uid,
    customer.email,
    customer.phone
  );
  if (existingPartnerId) return existingPartnerId;

  const values: Record<string, unknown> = {
    name: customer.name,
    phone: customer.phone,
    mobile: customer.phone,
    type: "contact",
  };

  if (customer.email) values.email = customer.email;
  if (customer.city) values.city = customer.city;
  if (customer.source) values.comment = `Source: ${customer.source}`;

  return executeKw<number>(config, uid, "res.partner", "create", [values]);
}

function buildLeadDescription(input: WebsiteLeadInput): string {
  const lines = [
    `Source: ${input.source || "website"}`,
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    input.email ? `Email: ${input.email}` : "",
    input.city ? `City: ${input.city}` : "",
    input.sector ? `Sector: ${input.sector}` : "",
    input.pipeSize ? `Pipe Size: ${input.pipeSize}` : "",
    input.hardness ? `Hardness: ${input.hardness}` : "",
    input.usage ? `Usage: ${input.usage}` : "",
    input.message ? `Message: ${input.message}` : "",
    input.ip ? `IP: ${input.ip}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

export async function createOdooLead(input: WebsiteLeadInput): Promise<{ leadId: number; partnerId: number }> {
  const config = getOdooConfig();
  const uid = await authenticate(config);

  const partnerId = await ensurePartnerId(config, uid, {
    name: input.name,
    phone: input.phone,
    email: input.email,
    city: input.city,
    source: input.source || "website",
  });

  const leadValues: Record<string, unknown> = {
    name: `${input.sector ? `${input.sector} - ` : ""}${input.name} (Website Lead)`,
    type: "lead",
    partner_id: partnerId,
    contact_name: input.name,
    phone: input.phone,
    mobile: input.phone,
    description: buildLeadDescription(input),
  };

  if (input.email) leadValues.email_from = input.email;
  if (input.city) leadValues.city = input.city;
  if (config.salesTeamId) leadValues.team_id = config.salesTeamId;
  if (config.salespersonId) leadValues.user_id = config.salespersonId;

  const leadId = await executeKw<number>(
    config,
    uid,
    "crm.lead",
    "create",
    [leadValues]
  );

  return { leadId, partnerId };
}

export async function createOdooSaleOrder(input: WebsiteOrderInput): Promise<OdooOrder> {
  if (!input.lines || input.lines.length === 0) {
    throw new Error("Order must include at least one line item");
  }

  const invalidLine = input.lines.find(
    (line) => !Number.isFinite(line.productId) || line.productId <= 0 || !Number.isFinite(line.quantity) || line.quantity <= 0
  );
  if (invalidLine) {
    throw new Error("Each order line must include valid productId and quantity");
  }

  const config = getOdooConfig();
  const uid = await authenticate(config);

  const partnerId = await ensurePartnerId(config, uid, {
    name: input.customer.name,
    phone: input.customer.phone,
    email: input.customer.email,
    city: input.customer.city,
    source: input.source || "website-order",
  });

  const orderLineCommands = input.lines.map((line) => {
    const values: Record<string, unknown> = {
      product_id: line.productId,
      product_uom_qty: line.quantity,
    };

    if (line.description) values.name = line.description;
    if (Number.isFinite(line.unitPrice)) values.price_unit = line.unitPrice;

    return [0, 0, values];
  });

  const orderValues: Record<string, unknown> = {
    partner_id: partnerId,
    order_line: orderLineCommands,
  };

  if (input.note) orderValues.note = input.note;
  if (config.salesTeamId) orderValues.team_id = config.salesTeamId;
  if (config.salespersonId) orderValues.user_id = config.salespersonId;

  const orderId = await executeKw<number>(
    config,
    uid,
    "sale.order",
    "create",
    [orderValues]
  );

  const orders = await executeKw<OdooOrder[]>(
    config,
    uid,
    "sale.order",
    "read",
    [[orderId]],
    { fields: ["id", "name", "amount_total", "state"] }
  );

  if (orders.length === 0) {
    throw new Error("Could not fetch created sales order");
  }

  return orders[0];
}
