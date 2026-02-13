import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Why E-SOFT vs Salt Softener | DIGIGO",
  description:
    "Clear comparison between salt softeners and E-SOFT electronic conditioning across maintenance, waste, and lifecycle cost.",
};

export default function WhyNotSaltSoftenerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-red-50 via-white to-green-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Comparison
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Salt Softener vs E-SOFT
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            Understand the trade-offs in running cost, maintenance, and water
            usage before choosing your solution.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-red-900">
              Salt Softener
            </h2>
            <div className="space-y-3">
              {[
                "Recurring salt purchase and handling",
                "Regeneration cycle water waste",
                "Consumable dependency and refill routine",
                "Usually shorter lifecycle than electronic systems",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-700">
                  <X className="mt-0.5 h-4 w-4 text-red-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-red-100 p-4">
              <p className="font-semibold text-red-900">Example 5-Year Cost</p>
              <p className="text-3xl font-bold text-red-900">INR 55,000+</p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-green-500 bg-green-50 p-8">
            <h2 className="mb-6 text-center text-2xl font-bold text-green-900">
              E-SOFT
            </h2>
            <div className="space-y-3">
              {[
                "No salt consumables",
                "No backwash discharge cycle",
                "Zero recurring resin replacement model",
                "Long design life with low maintenance",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-green-100 p-4">
              <p className="font-semibold text-green-900">Example 5-Year Cost</p>
              <p className="text-3xl font-bold text-green-900">INR 40,000</p>
              <p className="mt-1 font-semibold text-green-800">
                Estimated savings: INR 15,000
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            At-a-Glance Difference
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full bg-white text-left text-sm">
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
                  ["Maintenance", "Recurring schedule", "Low-operating maintenance"],
                  ["Mineral behavior", "Ion exchange model", "Electronic conditioning model"],
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
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Get a Real Cost Comparison for Your Site</h2>
            <p className="mt-3 text-lg text-white/90">
              Provide your pipe size and usage details. We will share a
              site-specific cost and payback view.
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
