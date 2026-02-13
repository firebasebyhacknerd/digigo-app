import { NextResponse } from "next/server";
import { createOdooSaleOrder } from "@/lib/odoo";

const recent: Record<string, number> = {};

function readClientIp(req: Request): string {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }

  const xRealIp = req.headers.get("x-real-ip");
  return xRealIp?.trim() || "anon";
}

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function readNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

export async function POST(req: Request) {
  const ip = readClientIp(req);
  const now = Date.now();
  if (recent[ip] && now - recent[ip] < 3000) {
    return NextResponse.json({ ok: false, error: "Rate limit" }, { status: 429 });
  }
  recent[ip] = now;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const customer = payload.customer;
  const lines = payload.lines;

  if (!customer || typeof customer !== "object") {
    return NextResponse.json({ ok: false, error: "Missing customer details" }, { status: 400 });
  }

  if (!Array.isArray(lines) || lines.length === 0) {
    return NextResponse.json({ ok: false, error: "Order must include at least one line item" }, { status: 400 });
  }

  const customerInput = customer as Record<string, unknown>;
  const customerName = readString(customerInput.name);
  const customerPhone = readString(customerInput.phone);
  const customerEmail = readString(customerInput.email);
  const customerCity = readString(customerInput.city);

  if (!customerName || !customerPhone) {
    return NextResponse.json({ ok: false, error: "Customer name and phone are required" }, { status: 400 });
  }

  const normalizedLines: Array<{
    productId: number;
    quantity: number;
    unitPrice?: number;
    description?: string;
  }> = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line || typeof line !== "object") {
      return NextResponse.json({ ok: false, error: `Invalid line at index ${index + 1}` }, { status: 400 });
    }

    const lineInput = line as Record<string, unknown>;
    const productId = readNumber(lineInput.productId);
    const quantity = readNumber(lineInput.quantity);
    const unitPrice = readNumber(lineInput.unitPrice);
    const description = readString(lineInput.description);

    if (!productId || productId <= 0 || !quantity || quantity <= 0) {
      return NextResponse.json(
        { ok: false, error: `Each line needs a valid productId and quantity (line ${index + 1})` },
        { status: 400 }
      );
    }

    normalizedLines.push({
      productId,
      quantity,
      unitPrice: unitPrice && unitPrice > 0 ? unitPrice : undefined,
      description: description || undefined,
    });
  }

  try {
    const created = await createOdooSaleOrder({
      customer: {
        name: customerName,
        phone: customerPhone,
        email: customerEmail || undefined,
        city: customerCity || undefined,
      },
      lines: normalizedLines,
      note: readString(payload.note) || undefined,
      source: readString(payload.source) || "website-order",
    });

    return NextResponse.json({
      ok: true,
      order: {
        id: created.id,
        name: created.name,
        amountTotal: created.amount_total,
        state: created.state,
      },
    });
  } catch (err) {
    console.error("Order create error (Odoo)", err);
    const message = err instanceof Error ? err.message : "Could not create order";

    if (message.startsWith("Missing Odoo env vars:")) {
      return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }

    if (message.toLowerCase().includes("authentication")) {
      return NextResponse.json(
        { ok: false, error: "Odoo authentication failed. Check ODOO_DB, ODOO_USERNAME, and ODOO_PASSWORD." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
