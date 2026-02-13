import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Warranty | DIGIGO E-SOFT",
  description:
    "Overview of E-SOFT warranty support, coverage expectations, and how to request service assistance.",
};

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Warranty"
        title="Warranty-Backed Premium Support"
        subtitle="E-SOFT includes hardware-backed support with structured diagnostics and service coordination."
        imageSrc="/digigostore-assets/industrial-grade.jpeg"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Coverage",
              desc: "Controller and supplied components are covered per approved scope.",
            },
            {
              title: "Support Access",
              desc: "Technical team assistance is available for diagnostics and troubleshooting.",
            },
            {
              title: "Service Workflow",
              desc: "Issues are logged, reviewed, and resolved through a standard support process.",
            },
          ].map((item) => (
            <div key={item.title} className="luxury-panel p-6">
              <ShieldCheck className="mb-3 h-8 w-8 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">How to Request Support</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "Share installation location and purchase details",
              "Describe observed issue and timeline",
              "Provide photos or short video if possible",
              "Our team will guide the next action quickly",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell max-w-5xl">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold">Need Warranty Help Right Now?</h2>
            <p className="mt-3 text-lg text-white/90">
              Contact our support desk for priority response and guided troubleshooting.
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
