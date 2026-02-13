import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Warranty | DIGIGO E-SOFT",
  description:
    "Overview of E-SOFT warranty support, coverage expectations, and how to request service assistance.",
};

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Warranty
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Warranty and Support Commitment
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT systems include warranty-backed hardware support with guided
            troubleshooting and service coordination.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              title: "Coverage",
              desc: "Controller and supplied system components are covered per approved scope.",
            },
            {
              title: "Support Access",
              desc: "Technical team support is available for diagnostics and guidance.",
            },
            {
              title: "Service Workflow",
              desc: "Reported issues are logged, reviewed, and resolved through standard process.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <ShieldCheck className="mb-3 h-8 w-8 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            To Request Warranty Support
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "Share installation location and purchase details",
              "Describe observed issue and timeframe",
              "Provide photos or short video if possible",
              "Our team will guide next action quickly",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Need Warranty Help Right Now?</h2>
            <p className="mt-3 text-lg text-white/90">
              Contact support directly and we will assist with a priority response.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="tel:+916356311101">Call Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Open Support Request</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
