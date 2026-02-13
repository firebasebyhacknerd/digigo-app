import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Home, ShowerHead, Sparkles, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Homes | DIGIGO E-SOFT",
  description:
    "Premium home-focused hard-water solution: cleaner fixtures, better comfort, and appliance protection without salt routines.",
};

export default function ForHomesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="For Homes"
        title="Premium Water Comfort for Modern Homes"
        subtitle="Position E-SOFT as a default utility standard for families that want cleaner bathrooms, better skin feel, and lower hard-water maintenance burden."
        imageSrc="/digigostore-assets/home-lifestyle.jpg"
        imageAlt="Premium home lifestyle"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShowerHead,
              title: "Daily Comfort Upgrade",
              desc: "A better showering and cleaning experience with reduced hard-water stress over time.",
            },
            {
              icon: Wrench,
              title: "Appliance Protection",
              desc: "Reduced scale pressure helps geysers, taps, and washing utilities run cleaner.",
            },
            {
              icon: Home,
              title: "No Salt Lifestyle",
              desc: "No salt bag purchase, storage, and refill routine in your home utility cycle.",
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
          <div className="luxury-panel overflow-hidden">
            <div className="relative h-72 bg-slate-100">
              <Image
                src="/digigostore-assets/children-water.png"
                alt="Healthy family water use"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
              Typical Home Upgrade Timeline
            </h2>
            <div className="mt-6 space-y-3">
              {[
                "Week 1: less visible spotting on taps and glass",
                "Month 1: improved comfort in daily water use",
                "Month 3: old deposit stress may begin to reduce",
                "Year 1: no recurring salt consumable burden",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-1 h-6 w-6" />
              <div>
                <h2 className="text-3xl font-bold">Set E-SOFT as Your Home Water Standard</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share home size, bathroom count, and current hard-water concerns for exact sizing and pricing guidance.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Get Home Quote</Link>
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
