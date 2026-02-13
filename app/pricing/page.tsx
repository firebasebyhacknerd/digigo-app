import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | DIGIGO E-SOFT",
  description:
    "Transparent E-SOFT pricing ranges by segment with clear inclusions and next-step quote options.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Simple and Transparent Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            Pricing is based on pipe size, water conditions, and usage profile.
            The ranges below are practical starting points.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Home",
              range: "INR 35,000 - 50,000",
              note: "Typical 2-4 member household",
            },
            {
              title: "Business",
              range: "INR 1.2L - 2.5L",
              note: "Hotels, offices, and commercial buildings",
            },
            {
              title: "Factory",
              range: "INR 3L - 10L+",
              note: "Based on industrial duty and flow profile",
            },
            {
              title: "Farm",
              range: "INR 80,000 - 1.5L",
              note: "Depends on acreage and irrigation network",
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-7 text-center transition-all hover:border-blue-500 hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-slate-900">{plan.title}</h2>
              <p className="mt-3 text-2xl font-bold text-blue-700">{plan.range}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            What Is Included
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Controller and coil package",
              "Model sizing support",
              "Installation guidance",
              "Commissioning checklist",
              "Warranty-backed hardware",
              "Technical support access",
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
            <h2 className="text-3xl font-bold">Get Your Exact Quote</h2>
            <p className="mt-3 text-lg text-white/90">
              Share your property type, pipe details, and current issue. We will
              provide the right model and exact quote.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Start Quote</Link>
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
