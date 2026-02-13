import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sprout, Droplets, CircleOff, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "For Farms | DIGIGO E-SOFT",
  description:
    "Agriculture-focused E-SOFT information for irrigation reliability, reduced clogging risk, and efficient water usage.",
};

export default function ForFarmsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-50 via-white to-lime-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            For Farms
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Improve Irrigation Reliability and Reduce Scale-Related Clogging
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT helps farming operations where emitter cleanliness and water
            behavior directly impact field performance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-quote">Talk to Agri Expert</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Request Farm Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: CircleOff,
              title: "Reduced Emitter Clogging Risk",
              desc: "Helps keep irrigation pathways cleaner over operating cycles.",
            },
            {
              icon: Droplets,
              title: "Better Water Distribution Stability",
              desc: "Supports consistent flow behavior across network sections.",
            },
            {
              icon: TrendingUp,
              title: "Lower Maintenance Overhead",
              desc: "No recurring salt consumables or regeneration process required.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <item.icon className="mb-3 h-8 w-8 text-green-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            What We Need to Size for Farms
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Water source type and quality",
              "Irrigation mode (drip / sprinkler / mixed)",
              "Coverage area and peak flow",
              "Pipe network details and pressure range",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-green-100 bg-white p-4"
              >
                <Sprout className="mt-0.5 h-5 w-5 text-green-700" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-green-700 to-lime-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Get a Farm-Specific Recommendation</h2>
            <p className="mt-3 text-lg text-white/90">
              Share acreage, crop profile, and water source details. We will map
              an appropriate model and expected investment range.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-slate-100">
                <Link href="/get-quote">Start Farm Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+916356311101">Call +91 63563 11101</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
