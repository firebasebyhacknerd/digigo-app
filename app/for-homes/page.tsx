import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Home, ShowerHead, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "For Homes | DIGIGO E-SOFT",
  description:
    "Homeowner-focused hard water solution: reduce scale, protect appliances, and avoid recurring salt maintenance with E-SOFT.",
};

export default function ForHomesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            For Homeowners
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Stop Paying for Salt Bags. Protect Your Family and Appliances.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT helps reduce hard-water issues without salt handling, resin
            replacement, or water-wasting regeneration.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-quote">Get Home Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="tel:+916356311101">Call +91 63563 11101</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: ShowerHead,
              title: "Skin and Bathroom Comfort",
              desc: "Less spotting and a better showering experience over time.",
            },
            {
              icon: Wrench,
              title: "Appliance Protection",
              desc: "Reduced scale load helps geysers and washing machines run cleaner.",
            },
            {
              icon: Home,
              title: "No Salt Handling",
              desc: "No monthly salt purchase, storage, or refill routines.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <item.icon className="mb-3 h-8 w-8 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Typical Homeowner Timeline
          </h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-4">
            {[
              "Week 1: less visible spotting on taps and glass",
              "Month 1: improved feel in daily water use",
              "Month 3: old deposits may start loosening",
              "Year 1: no salt, no consumable replacement cycle",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4"
              >
                <Check className="mt-0.5 h-5 w-5 text-green-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Get Your Home Sizing Recommendation</h2>
            <p className="mt-3 text-lg text-white/90">
              Share house size, bathroom count, and your current hard-water
              issues. We will suggest the right model and pricing range.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Start Home Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
