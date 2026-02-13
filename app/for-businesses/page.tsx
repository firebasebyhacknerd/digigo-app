import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, CheckCircle2, Hospital, Hotel, Sparkles, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "For Businesses | DIGIGO E-SOFT",
  description:
    "Business-focused E-SOFT solution for hotels, hospitals, and commercial assets that need premium water experience and operational stability.",
};

export default function ForBusinessesPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="For Businesses"
        title="Premium Guest Experience, Lower Utility Burden"
        subtitle="Hotels, hospitals, and offices are positioning E-SOFT as a service-quality standard for cleaner use points and more reliable operations."
        imageSrc="/digigostore-assets/domestic-grade.jpeg"
        imageAlt="Business grade E-SOFT"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Hotel,
              title: "Hotels and Hospitality",
              desc: "Cleaner fixtures and reduced spot-related upkeep improve premium guest perception.",
            },
            {
              icon: Hospital,
              title: "Hospitals and Healthcare",
              desc: "Supports cleaner utility behavior where consistency and reliability matter daily.",
            },
            {
              icon: Building2,
              title: "Commercial Assets",
              desc: "Lower hard-water complaint pressure and reduced recurring handling overhead.",
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
                src="/digigostore-assets/industrial-grade.jpeg"
                alt="Commercial and industrial grade setup"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">Business ROI Drivers</h2>
            <div className="mt-6 space-y-3">
              {[
                "Reduced spot-related housekeeping effort",
                "Lower scale cleaning frequency",
                "Improved utility consistency",
                "No recurring salt logistics",
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
              <TrendingUp className="mt-1 h-7 w-7" />
              <div>
                <h2 className="text-3xl font-bold">Request a Business Water Performance Estimate</h2>
                <p className="mt-3 text-lg text-white/90">
                  Share occupancy, use profile, and pain points for segment-specific fitment and investment guidance.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">
                  Request Business Evaluation
                  <Sparkles className="h-4 w-4" />
                </Link>
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
