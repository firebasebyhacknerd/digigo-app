"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GetQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const isOffline = process.env.NEXT_PUBLIC_LEADS_ENABLED !== "true";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (isOffline) {
      setError("Lead submission is temporarily offline. Please call +91 63563 11101 or email info.digigo@gmail.com.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("website");
    if (honeypot) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setStatus("idle");
      setError("Could not submit right now. Please retry in a moment.");
    }
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 lg:grid-cols-3">
      <Card className="border-border bg-surface-2/40 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-ink">Quote Details</CardTitle>
          <p className="text-muted">Name and phone are required. Add any notes that help our sizing team.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required type="tel" placeholder="+91-__________" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@company.com" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="city">City</Label>
                <Input id="city" name="city" placeholder="Ahmedabad / Bengaluru" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="industry">Industry / Sector</Label>
                <Input id="industry" name="sector" placeholder="Residential / Hotel / Hospital / Plant" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pipeSize">Pipe Size</Label>
                <Input id="pipeSize" name="pipeSize" placeholder="e.g., 1.5 inch" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="hardness">Hardness / TDS (if known)</Label>
                <Input id="hardness" name="hardness" placeholder="e.g., 1200 ppm TDS / 350 ppm hardness" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="usage">Usage Type</Label>
                <Input id="usage" name="usage" placeholder="Domestic / Process / HVAC" />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <Label htmlFor="message">Message / Site Notes</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Flow profile, water source, problems (scale/spotting/energy loss), and any critical equipment."
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit" className="btn-primary" disabled={status === "sending"}>
                {status === "sent"
                  ? "Submitted - we will contact you"
                  : status === "sending"
                    ? "Submitting..."
                    : "Submit"}
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/faq">FAQ (Doubts)</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/technology">How It Works</Link>
              </Button>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
            {status === "sent" && <p className="text-sm text-neon">Submitted. Our technical desk will contact you soon.</p>}

            <p className="text-[11px] text-muted">
              By submitting, you agree to be contacted by DIGIGO Technology. Data is stored in Firebase for lead response only when enabled.
            </p>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border bg-surface-2/40">
        <CardHeader>
          <CardTitle className="text-ink">Direct Contact</CardTitle>
          <p className="text-muted">Prefer phone/email? Reach us directly.</p>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted">
          <p>
            <span className="text-ink font-medium">Phone:</span>{" "}
            <a className="text-neon" href="tel:+916356311101">
              +91 63563 11101
            </a>
          </p>
          <p>
            <span className="text-ink font-medium">Email:</span>{" "}
            <a className="text-neon" href="mailto:info.digigo@gmail.com">
              info.digigo@gmail.com
            </a>
          </p>
          <p>
            <span className="text-ink font-medium">Office:</span> Ahmedabad, Gujarat
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
