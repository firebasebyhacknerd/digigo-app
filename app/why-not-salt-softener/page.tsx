import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Why E-SOFT vs Salt Softener | DIGIGO",
  description:
    "Clear comparison between salt softeners and E-SOFT across maintenance, waste, and lifecycle economics.",
};

export default function WhyNotSaltSoftenerPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Comparison"
        title="Why E-SOFT Is the Modern Water Standard"
        subtitle="Compare legacy salt-softener dependency against a premium, low-handling electronic conditioning model."
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-16">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-rose-900">Salt Softener</h2>
            <div className="space-y-3">
              {[
                "Recurring salt purchase and handling",
                "Regeneration cycle water waste",
                "Consumable dependency and refill routine",
                "Typically shorter lifecycle than electronic systems",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-700">
                  <XCircle className="mt-0.5 h-4 w-4 text-rose-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-rose-100 p-4">
              <p className="font-semibold text-rose-900">Illustrative 5-Year Cost</p>
              <p className="text-3xl font-bold text-rose-900">INR 55,000+</p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-blue-900">DIGIGO E-SOFT</h2>
            <div className="space-y-3">
              {[
                "No salt consumables",
                "No backwash discharge cycle",
                "No recurring resin replacement model",
                "Long design-life with low routine handling",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-700" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-blue-100 p-4">
              <p className="font-semibold text-blue-900">Illustrative 5-Year Cost</p>
              <p className="text-3xl font-bold text-blue-900">INR 40,000</p>
              <p className="mt-1 font-semibold text-blue-800">Potential savings: INR 15,000</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">At-a-Glance Difference</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">Factor</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Salt Softener</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">E-SOFT</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Consumables", "Salt required", "No salt required"],
                  ["Water use", "Backwash loss", "No backwash"],
                  ["Maintenance", "Recurring schedule", "Low routine handling"],
                  ["Mineral behavior", "Ion exchange model", "Electronic conditioning"],
                  ["Lifecycle", "Lower typical span", "Long design life"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">{row[0]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell max-w-5xl">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold">Get a Real Cost Comparison for Your Site</h2>
            <p className="mt-3 text-lg text-white/90">
              Share your pipe size and usage profile. We will prepare a site-specific comparison view.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Get Comparison Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/how-it-works">Understand the Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
