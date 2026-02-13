import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Factory, Gauge, Settings, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Factories | DIGIGO E-SOFT",
  description:
    "Factory-focused E-SOFT deployment guidance to reduce scale impact, protect equipment, and improve utility reliability.",
};

export default function ForFactoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="For Factories"
        title="Industrial Reliability with Premium Utility Control"
        subtitle="For plants and process utilities where scale behavior directly affects uptime, energy performance, and maintenance cycles."
        imageSrc="/digigostore-assets/industrial-grade.jpeg"
        imageAlt="Industrial grade E-SOFT"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Settings,
              title: "Boilers and Heat Exchangers",
              desc: "Supports lower scale stress and steadier heat-transfer behavior in utility lines.",
            },
            {
              icon: Gauge,
              title: "Cooling and Process Loops",
              desc: "Helps reduce adhesion tendency in circulation-driven systems.",
            },
            {
              icon: ShieldCheck,
              title: "Utility Protection Layer",
              desc: "Designed as a low-handling conditioning layer for critical industrial assets.",
            },
          ].map((item) => (
            <div key={item.title} className="luxury-panel p-6">
              <item.icon className="mb-3 h-8 w-8 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">Industrial Technical Snapshot</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
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
                    ["Hardness / TDS", "Defines conditioning expectation range"],
                    ["Application duty", "Boiler, chiller, process, utility, mixed"],
                    ["Installation window", "Short, non-invasive retrofit workflow"],
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

          <div className="luxury-panel overflow-hidden">
            <div className="relative h-80 bg-slate-100">
              <Image
                src="/digigostore-assets/product-2048.png"
                alt="Industrial product visual"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <div className="flex items-start gap-3">
              <Factory className="mt-1 h-7 w-7" />
              <div>
                <h2 className="text-3xl font-bold">Book a Factory Site Survey</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share line diagram, usage profile, and current challenges for technical fitment and scope estimate.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">
                  Request Factory Proposal
                  <Sparkles className="h-4 w-4" />
                </Link>
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
