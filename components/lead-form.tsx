"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const sectors = ["Residential", "Agriculture", "Commercial", "Industrial"];

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isOffline = process.env.NEXT_PUBLIC_LEADS_ENABLED !== "true";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isOffline) {
      setSuccess(null);
      setError("Lead submission is temporarily offline. Please call +91 63563 11101 or email info.digigo@gmail.com.");
      return;
    }
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const honeypot = formData.get("website");
    if (honeypot) {
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess("Submitted. Our technical desk will contact you soon.");
      (event.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setError("Could not submit right now. Please retry in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-3 rounded-2xl border border-border bg-surface-2/40 p-4"
    >
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            required
            placeholder="+91-__________"
            type="tel"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" placeholder="Ahmedabad / Bengaluru" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="sector">Sector</Label>
          <Select id="sector" name="sector" defaultValue="">
            <option value="" disabled>
              Choose sector
            </option>
            {sectors.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="pipeSize">Pipe Size</Label>
          <Input id="pipeSize" name="pipeSize" placeholder="e.g., 1.5 inch" />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Notes / Application</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Brief on water source, flow rate, challenges (scale, energy loss, spotting)."
          rows={compact ? 3 : 4}
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {isOffline ? "Contact Us (leads offline)" : loading ? "Submitting..." : "Request Site Evaluation"}
      </Button>
      {success && <p className="text-xs text-neon">{success}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
      <p className="text-[11px] text-muted">
        By submitting, you agree to be contacted by DIGIGO Technology. Data is
        stored in Firebase (India / preferred region) for lead response only when enabled.
      </p>
    </form>
  );
}
