import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, Zap, Droplets, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Technology | DIGIGO E-SOFT Electronic Water Conditioning",
  description: "How E-SOFT electronic water conditioning works: signal-based scale prevention without salt, chemicals, or wastewater. Designed for residential, commercial, industrial, and agricultural use.",
};

const features = [
  "Zero salt, zero chemicals, zero wastewater",
  "Keeps essential minerals in water",
  "Non-invasive installation: no pipe cutting",
  "Programmed signals for specific water conditions",
  "Zero maintenance: no consumables or backwash",
  "30+ year hardware lifespan",
  "Works with existing RO/UV systems",
  "Safe for drinking and cooking",
];

const comparisonTable = [
  { label: "Salt Required", international: "Yes", national: "Yes", esoft: "No" },
  { label: "Wastewater Generation", international: "Yes (backwash)", national: "Yes (backwash)", esoft: "No" },
  { label: "Chemicals Added", international: "Yes", national: "Yes", esoft: "No" },
  { label: "Minerals Removed", international: "Yes", national: "Yes", esoft: "No" },
  { label: "Maintenance", international: "Regular salt top-up", national: "Regular salt top-up", esoft: "Zero" },
  { label: "Power Consumption", international: "Medium", national: "Medium", esoft: "Low" },
  { label: "Installation", international: "Plumbing changes", national: "Plumbing changes", esoft: "Non-invasive" },
];

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
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        kicker="Technology"
        title="E-SOFT | Electro Hydro Enhancer"
        subtitle="Electronic, salt-free, chemical-free conditioning that prevents scale adhesion while keeping minerals intact. Designed for residential, commercial, industrial, and agricultural duty."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Machine Visual */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl bg-surface-2 p-8 shadow-2xl border border-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent" />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/machine-hero.webp"
                    alt="DIGIGO E-SOFT controller and induction coil mounted on a pipeline"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 backdrop-blur p-3 shadow-lg border border-slate-200">
                  <p className="text-xs font-medium text-slate-700">E-SOFT System: Controller + Induction Coil</p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-slate-900">Key Features</h3>
                <p className="text-xl text-slate-600">Designed to solve day-to-day hard-water problems without salt bags, chemicals, or backwash.</p>
              </div>
              
              <div className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 rounded-2xl bg-surface-2 p-4 shadow-lg border border-border">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-neon" />
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <Link href="/get-quote" className="flex items-center justify-center gap-2">
                    Get Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Non-invasive installation: the coil wraps around the pipe and the controller drives the programmed signal. No pipe cutting.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 bg-surface-2 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle className="text-slate-900">Controller</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Generates the programmed, low-frequency modulation used for conditioning.</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-surface-2 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                  <Droplets className="h-6 w-6" />
                </div>
                <CardTitle className="text-slate-900">Induction Coil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Wraps the existing pipe and couples the signal without touching the water.</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-surface-2 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                  <Shield className="h-6 w-6" />
                </div>
                <CardTitle className="text-slate-900">Power</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Requires a nearby electrical point for the controller (site-specific).</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-surface-2 shadow-lg">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle className="text-slate-900">Sizing Inputs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Pipe size, flow (peak/avg), hardness/TDS range, and application duty.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Installation Steps</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Identify installation location on the mainline",
                "Wrap and secure the coil around the pipe",
                "Mount controller and connect coil leads",
                "Power on and verify status indicators",
              ].map((step, i) => (
                <div key={i} className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-surface-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Comparison Table</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              For evaluation and procurement discussions. Exact outcomes depend on water chemistry and operating conditions.
            </p>
          </div>

          <Card className="border-0 bg-surface-2 shadow-xl">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="pb-4 pr-4 text-left font-semibold text-slate-900">Parameter</th>
                      <th className="pb-4 pr-4 text-left font-semibold text-slate-900">International Conditioner</th>
                      <th className="pb-4 pr-4 text-left font-semibold text-slate-900">National Conditioner</th>
                      <th className="pb-4 text-left font-semibold text-blue-600">E-SOFT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.map((row) => (
                      <tr key={row.label} className="border-b border-slate-100">
                        <td className="py-4 pr-4 font-medium text-slate-900">{row.label}</td>
                        <td className="py-4 pr-4 text-slate-600">{row.international}</td>
                        <td className="py-4 pr-4 text-slate-600">{row.national}</td>
                        <td className="py-4 font-medium text-blue-600">{row.esoft}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-2">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Quick answers to common doubts about E-SOFT technology.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0 bg-surface-2 shadow-lg">
                <AccordionTrigger className="text-left text-slate-900 hover:text-blue-600 px-6 py-4">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-slate-600">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/get-quote" className="flex items-center gap-2">
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
