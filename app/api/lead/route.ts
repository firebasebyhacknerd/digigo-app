import { NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDb } from "@/lib/firebase";

// Basic in-memory rate limit placeholder
const recent: Record<string, number> = {};

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "anon";
  const now = Date.now();
  if (recent[ip] && now - recent[ip] < 5000) {
    return NextResponse.json({ ok: false, error: "Rate limit" }, { status: 429 });
  }
  recent[ip] = now;

  const body = await req.json();
  const { name, phone, email, city, sector, pipeSize, message } = body || {};
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
      message: message || "",
      createdAt: serverTimestamp(),
      ip,
      source: "website",
    });
  } catch (err) {
    console.error("Lead save error", err);
    // swallow so UI still succeeds
  }

  return NextResponse.json({ ok: true });
}
