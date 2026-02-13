"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type SubmitState = "idle" | "sending" | "sent";

export function QuickQuoteForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const leadsEnabled = process.env.NEXT_PUBLIC_LEADS_ENABLED === "true";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!leadsEnabled) {
      setError(
        "Lead submission is temporarily offline. Please call +91 63563 11101."
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const sector = String(formData.get("sector") || "").trim();
    const problem = String(formData.get("problem") || "").trim();

    if (!phone) {
      setError("Phone number is required.");
      return;
    }

    setState("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Quick Quote Lead",
          phone,
          sector,
          usage: problem,
          message: `Quick quote request from homepage. Problem: ${problem}`,
        }),
      });

      const payload = await res.json().catch(() => null);
      if (!res.ok) {
        const apiError =
          payload && typeof payload.error === "string"
            ? payload.error
            : "Could not submit right now.";
        throw new Error(apiError);
      }

      setState("sent");
      event.currentTarget.reset();
    } catch (submitError) {
      setState("idle");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not submit right now."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          type="text"
          placeholder="Your Name (Optional)"
          className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select
          name="sector"
          required
          className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select Your Type
          </option>
          <option value="Residential">Homeowner</option>
          <option value="Commercial">Business</option>
          <option value="Industrial">Factory</option>
          <option value="Agriculture">Farm</option>
        </select>

        <select
          name="problem"
          required
          className="rounded-xl border border-steel-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 focus:border-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Main Water Problem
          </option>
          <option value="Scale buildup">Scale Buildup</option>
          <option value="Dry skin and rough hair">Dry Skin</option>
          <option value="Appliance damage">Appliance Damage</option>
          <option value="Salt and maintenance costs">High Costs</option>
        </select>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-white text-blue-700 hover:bg-slate-100"
        disabled={state === "sending"}
      >
        {state === "sent" ? "Submitted - We Will Call You" : state === "sending" ? "Submitting..." : "Get My Free Quote"}
      </Button>

      {error && <p className="text-sm text-red-200">{error}</p>}
      {state === "sent" && (
        <p className="text-sm text-green-200">
          Thanks. Our team will contact you shortly.
        </p>
      )}
      <p className="text-xs text-white/80">
        Free consultation. No obligation.
      </p>
    </form>
  );
}
