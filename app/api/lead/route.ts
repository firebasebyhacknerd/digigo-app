import { NextResponse } from "next/server";
import { createOdooLead } from "@/lib/odoo";

// Basic in-memory rate limit placeholder
const recent: Record<string, number> = {};

const leadsEnabled = process.env.LEADS_ENABLED === "true" || process.env.NEXT_PUBLIC_LEADS_ENABLED === "true";

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function readClientIp(req: Request): string {
  const xForwardedFor = req.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }

  const xRealIp = req.headers.get("x-real-ip");
  return xRealIp?.trim() || "anon";
}

export async function POST(req: Request) {
  if (!leadsEnabled) {
    return NextResponse.json(
      { ok: false, error: "Lead capture disabled" },
      { status: 503 }
    );
  }

  const ip = readClientIp(req);
  const now = Date.now();
  if (recent[ip] && now - recent[ip] < 5000) {
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
  const name = readString(payload.name);
  const phone = readString(payload.phone);
  const email = readString(payload.email);
  const city = readString(payload.city);
  const sector = readString(payload.sector);
  const pipeSize = readString(payload.pipeSize);
  const hardness = readString(payload.hardness);
  const usage = readString(payload.usage);
  const message = readString(payload.message);

  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const created = await createOdooLead({
      name,
      phone,
      email: email || undefined,
      city: city || undefined,
      sector: sector || undefined,
      pipeSize: pipeSize || undefined,
      hardness: hardness || undefined,
      usage: usage || undefined,
      message: message || undefined,
      ip: ip === "anon" ? undefined : ip,
      source: "website",
    });

    return NextResponse.json({ ok: true, leadId: created.leadId, partnerId: created.partnerId });
  } catch (err) {
    console.error("Lead save error (Odoo)", err);
    const message = err instanceof Error ? err.message : "Could not save lead";

    if (message.startsWith("Missing Odoo env vars:")) {
      return NextResponse.json({ ok: false, error: message }, { status: 500 });
    }

    if (message.toLowerCase().includes("authentication")) {
      return NextResponse.json(
        { ok: false, error: "Odoo authentication failed. Check ODOO_DB, ODOO_USERNAME, and ODOO_PASSWORD." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: false, error: "Could not save lead in Odoo" }, { status: 500 });
  }
}
