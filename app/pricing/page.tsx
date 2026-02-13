import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing | DIGIGO E-SOFT",
  description:
    "Transparent E-SOFT pricing ranges by segment with clear inclusions and next-step quote options.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Pricing"
        title="Premium Water Standard, Transparent Investment"
        subtitle="Pricing depends on line size, water profile, and duty. These are practical starting ranges for evaluation."
        imageSrc="/digigostore-assets/domestic-grade.jpeg"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            <div key={plan.title} className="luxury-panel p-7 text-center">
              <h2 className="text-2xl font-bold text-slate-900">{plan.title}</h2>
              <p className="mt-3 text-2xl font-bold text-blue-700">{plan.range}</p>
              <p className="mt-2 text-sm text-slate-600">{plan.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">What Is Included</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Controller and coil package",
              "Model sizing support",
              "Installation guidance",
              "Commissioning checklist",
              "Warranty-backed hardware",
              "Technical support access",
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
            <h2 className="text-3xl font-bold">Get Your Exact Quote</h2>
            <p className="mt-3 text-lg text-white/90">
              Share line details and water profile. We will recommend the right model and precise quote.
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
