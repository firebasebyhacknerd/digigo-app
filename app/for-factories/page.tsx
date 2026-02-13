import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Factory, ShieldCheck, Gauge, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "For Factories | DIGIGO E-SOFT",
  description:
    "Factory-focused E-SOFT deployment guidance for reducing scale impact, downtime, and avoidable energy loss.",
};

export default function ForFactoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">
            For Factories
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Reduce Downtime. Protect Equipment. Improve Efficiency.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT supports industrial water systems where scale impacts boilers,
            chillers, and process consistency.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/get-quote">Schedule Technical Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to Engineer</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {[
            {
              icon: Settings,
              title: "Boilers and Heat Exchangers",
              desc: "Scale control supports steadier heat transfer performance.",
            },
            {
              icon: Gauge,
              title: "Chillers and Cooling Loops",
              desc: "Helps reduce scale adhesion risk in circulation systems.",
            },
            {
              icon: ShieldCheck,
              title: "RO Pre-treatment Context",
              desc: "Improves upstream conditioning in broader water treatment setups.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <item.icon className="mb-3 h-8 w-8 text-indigo-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Technical Snapshot
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full bg-white text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold text-slate-800">Parameter</th>
                  <th className="px-4 py-3 font-semibold text-slate-800">Consideration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Pipe size", "Primary sizing input for model selection"],
                  ["Flow profile", "Peak and average flow influence tuning"],
                  ["Hardness / TDS", "Helps estimate conditioning strategy"],
                  ["Application duty", "Boiler, chiller, process, utility, mixed"],
                  ["Install window", "Typical onsite work is short and non-invasive"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-900">{row[0]}</td>
                    <td className="px-4 py-3 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-700 to-blue-600 p-8 text-white">
            <div className="flex items-start gap-3">
              <Factory className="mt-1 h-7 w-7" />
              <div>
                <h2 className="text-3xl font-bold">Book a Site Survey</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share line diagram, flow profile, and current issues. Our team
                  will respond with fitment guidance and a scope estimate.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-slate-100">
                <Link href="/get-quote">Request Factory Proposal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+916356311101">Call Technical Desk</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
