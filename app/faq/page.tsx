import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, HelpCircle, Shield, Droplets, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "FAQ | DIGIGO E-SOFT",
  description: "Frequently asked questions about electronic water conditioning, installation, performance, and comparisons.",
};

const faqs = [
  {
    q: "Does it reduce TDS?",
    a: "No. E-SOFT does not remove minerals. It changes the way calcium and magnesium crystallize so they remain suspended and non-adherent.",
  },
  {
    q: "Is it safe for drinking water?",
    a: "Yes. No chemicals are added, and essential minerals stay in the water. The system induces signals externally without contact with water.",
  },
  {
    q: "What maintenance is required?",
    a: "None for consumables. A quick visual check of the controller and coil and verifying indicator LEDs is typically sufficient.",
  },
  {
    q: "What is the lifespan?",
    a: "Hardware is designed for 30+ years with industrial-grade electronics. No resin, no media to replace.",
  },
  {
    q: "Will it work on my water hardness?",
    a: "E-SOFT is sized based on pipe size, flow rate, and hardness/TDS range. Share your details and we will confirm suitability.",
  },
  {
    q: "How is it different from a salt softener?",
    a: "Salt softeners replace hardness minerals with sodium and waste water in regeneration. E-SOFT keeps minerals, adds no sodium, and wastes no water.",
  },
  {
    q: "Can I install it myself?",
    a: "Installation is non-invasive (coil wraps) pipe, but we recommend a technician to ensure correct placement and power setup.",
  },
  {
    q: "What if I don't see results?",
    a: "Results are gradual: reduced new scale and gradual loosening of existing deposits. If you're unsure, we can provide a monitoring checklist and support.",
  },
  {
    q: "Does it work with existing RO systems?",
    a: "Yes. E-SOFT works as pre-treatment to protect RO membranes and extend their life. It does not replace RO for drinking water purification.",
  },
  {
    q: "What about iron or manganese in water?",
    a: "E-SOFT primarily targets calcium and magnesium scale. For high iron/manganese, additional filtration may be recommended.",
  },
  {
    q: "Is there a warranty?",
    a: "Yes. We offer comprehensive warranty on electronics and workmanship. Specific terms depend on application and installation.",
  },
];

const categories = [
  { name: "General", icon: HelpCircle, color: "from-blue-100 to-cyan-100" },
  { name: "Installation", icon: Shield, color: "from-blue-50 to-cyan-100" },
  { name: "Performance", icon: Zap, color: "from-blue-100 to-cyan-200" },
  { name: "Compatibility", icon: Droplets, color: "from-blue-50 to-cyan-200" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <PageHero
          kicker="FAQ"
          title="Doubts, Answered"
          subtitle="Clear answers for homeowners, facility managers, and engineers - TDS, salt, installation, performance, and sizing."
        />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-slate-900">Quick Answers</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Find what you need to know about E-SOFT technology, installation, and results.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((category) => (
                <div key={category.name} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-slate-700`}>
                      {React.createElement(category.icon, { className: "h-5 w-5" })}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                  </div>
                  <div className="space-y-3">
                    {faqs
                      .filter((_, i) => i % 4 === categories.indexOf(category))
                      .map((f, i) => (
                        <div key={i} className="rounded-2xl bg-surface-2 p-4 shadow-lg border border-border">
                          <p className="font-medium text-slate-900 mb-2">{f.q}</p>
                          <p className="text-slate-600">{f.a}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Badge className="mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 text-white border-0 shadow-lg">
                Still have questions?
              </Badge>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/get-quote" className="flex items-center gap-2">
                    Get Free Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Talk to Expert</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
