import type { Metadata } from "next";
import Link from "next/link";
import { Bolt, CircleDot, Waves } from "lucide-react";
import { Explainer3D } from "@/components/explainer-3d";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How It Works | DIGIGO E-SOFT",
  description:
    "Simple explanation of E-SOFT electronic water conditioning and why it helps reduce scale adhesion without salt.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="How It Works"
        title="Simple Science, Premium Utility Outcome"
        subtitle="E-SOFT conditions mineral behavior electronically so scale adhesion tendency reduces without salt, chemicals, or backwash."
        imageSrc="/digigostore-assets/product-2048.png"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="luxury-panel p-4">
            <Explainer3D />
          </div>

          <div className="grid gap-4 md:grid-cols-1">
            {[
              {
                icon: Waves,
                title: "Step 1: Hard Water Enters",
                desc: "Water carries calcium and magnesium that can build deposits on surfaces.",
              },
              {
                icon: Bolt,
                title: "Step 2: Signal Conditioning",
                desc: "Controller sends programmed electronic patterns through the external induction coil.",
              },
              {
                icon: CircleDot,
                title: "Step 3: Lower Adhesion Tendency",
                desc: "Mineral behavior shifts so sticking tendency can reduce under operating conditions.",
              },
            ].map((item) => (
              <div key={item.title} className="luxury-panel p-6">
                <item.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">Common Questions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                q: "Will water taste change?",
                a: "No major taste change is expected because minerals remain in water.",
              },
              {
                q: "Is it safe for drinking lines?",
                a: "Yes. It is a non-chemical external signal-based conditioning approach.",
              },
              {
                q: "Does it need electricity?",
                a: "Yes, a standard power source is needed for the controller.",
              },
              {
                q: "How long does installation take?",
                a: "Typical onsite installation is short and usually non-invasive.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-xl border border-blue-100 bg-white p-5">
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold">Need a Site-Specific Explanation?</h2>
            <p className="mt-3 text-lg text-white/90">
              Share your line details and we will explain expected behavior for your specific setup.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Request Expert Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/why-not-salt-softener">Compare with Salt Softener</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
