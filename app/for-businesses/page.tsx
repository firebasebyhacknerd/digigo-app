import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Hotel, Hospital, CheckCircle2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "For Businesses | DIGIGO E-SOFT",
  description:
    "Business-focused E-SOFT solution for hotels, hospitals, and offices to reduce maintenance, spotting, and operating costs.",
};

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            For Businesses
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Reduce Complaints. Lower Maintenance Costs.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT is used in hotels, hospitals, and facilities where water quality
            consistency affects guest experience and operations.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-quote">Request Business Evaluation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">View Pricing Logic</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: Hotel,
              title: "Hotels and Hospitality",
              desc: "Cleaner fixtures and reduced upkeep help improve guest experience.",
            },
            {
              icon: Hospital,
              title: "Hospitals and Healthcare",
              desc: "Better operating stability for systems relying on consistent water quality.",
            },
            {
              icon: Building2,
              title: "Offices and Commercial Sites",
              desc: "Less scale-related maintenance and fewer visible hard-water marks.",
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
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Typical Business ROI Drivers
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Reduced spot-related housekeeping effort",
              "Lower scale cleaning frequency",
              "More stable equipment performance",
              "No recurring salt logistics",
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
          <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <div className="flex items-start gap-3">
              <TrendingUp className="mt-1 h-7 w-7" />
              <div>
                <h2 className="text-3xl font-bold">Request a Business ROI Estimate</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share occupancy, usage profile, and major pain points. We will
                  provide a fitment and cost range.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Get Business Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+916356311101">Call Sales Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
