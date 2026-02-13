import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

// Basic in-memory rate limit placeholder
const recent: Record<string, number> = {};

const leadsEnabled = process.env.LEADS_ENABLED === "true" || process.env.NEXT_PUBLIC_LEADS_ENABLED === "true";

export async function POST(req: Request) {
  if (!leadsEnabled) {
    return NextResponse.json(
      { ok: false, error: "Lead capture disabled" },
      { status: 503 }
    );
  }
  const ip = req.headers.get("x-forwarded-for") || "anon";
  const now = Date.now();
  if (recent[ip] && now - recent[ip] < 5000) {
    return NextResponse.json({ ok: false, error: "Rate limit" }, { status: 429 });
  }
  recent[ip] = now;

  const body = await req.json();
  const { name, phone, email, city, sector, pipeSize, hardness, usage, message } = body || {};
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const db = getDb();
    await addDoc(collection(db, "leads"), {
      name,
      phone,
      email: email || "",
      city: city || "",
      sector: sector || "",
      pipeSize: pipeSize || "",
      hardness: hardness || "",
      usage: usage || "",
      message: message || "",
      createdAt: serverTimestamp(),
      ip,
      source: "website",
    });
  } catch (err) {
    console.error("Lead save error", err);
    return NextResponse.json(
      { ok: false, error: "Could not save lead" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
