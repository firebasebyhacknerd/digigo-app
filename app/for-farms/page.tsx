import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, CircleOff, Droplets, Sprout, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Farms | DIGIGO E-SOFT",
  description:
    "Agriculture-focused E-SOFT guidance for irrigation reliability, lower deposit stress, and cleaner distribution behavior.",
};

export default function ForFarmsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="For Farms"
        title="Reliable Irrigation with Modern Water Conditioning"
        subtitle="E-SOFT supports agriculture networks where emitter cleanliness and flow consistency directly affect field performance."
        imageSrc="/digigostore-assets/domestic-grade.jpeg"
        imageAlt="Agriculture water conditioning"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              icon: CircleOff,
              title: "Lower Clogging Risk",
              desc: "Helps keep irrigation paths cleaner over recurring operating cycles.",
            },
            {
              icon: Droplets,
              title: "Flow Stability",
              desc: "Supports more consistent flow behavior across network sections.",
            },
            {
              icon: TrendingUp,
              title: "Lower Handling Model",
              desc: "No recurring salt consumables and no backwash regeneration routine.",
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
                src="/digigostore-assets/home-lifestyle.jpg"
                alt="Water quality and agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">Sizing Inputs for Farms</h2>
            <div className="mt-6 space-y-3">
              {[
                "Water source quality and hardness profile",
                "Irrigation mode (drip / sprinkler / mixed)",
                "Coverage area and peak flow rates",
                "Pipe network details and pressure range",
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
              <Sprout className="mt-1 h-7 w-7" />
              <div>
                <h2 className="text-3xl font-bold">Get a Farm-Specific Recommendation</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share acreage, crop profile, and water details for model selection and investment estimate.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
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
