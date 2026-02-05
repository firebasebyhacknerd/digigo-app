import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Technology | E-SOFT Electro Hydro Enhancer – How It Works",
  description:
    "CTO-grade explanation of DIGIGO E-SOFT: signal-based electronic water conditioning. Alters mineral crystallization, prevents scale adhesion. No salt, no chemicals, zero water waste.",
};

const comparison = [
  {
    type: "Salt Softeners (Ion Exchange)",
    mechanism: "Swap Ca/Mg for Na using resin + salt regeneration",
    impact: "Reduces hardness; increases sodium; wastes water in backwash",
    maintenance: "Regular salt top-up, resin replacement, backwash cycles",
  },
  {
    type: "Magnetic Devices",
    mechanism: "Static magnet fields attempt to influence ions",
    impact: "Non-programmable; effect varies with flow and temperature",
    maintenance: "Low, but inconsistent performance evidence",
  },
  {
    type: "E-SOFT Electro Hydro Enhancer",
    mechanism: "Programmable low-frequency signals via induction coil; alters crystal habit",
    impact: "Minerals stay but lose adhesive scale behavior; TDS unchanged; zero water waste",
    maintenance: "No consumables; periodic visual inspection only",
  },
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
];

const features = [
  "Maintenance-free",
  "Easy to install (non-invasive coil on pipe)",
  "Zero wastage of water (no backwash)",
  "Free of any chemicals and salts",
  "Environment friendly",
  "Longer life expectancy",
  "Keeps the water nutrients intact",
  "Keeps pipelines cleaner by reducing scale adhesion",
  "Made in India",
];

const comparisonTable = [
  {
    label: "Power / Suitability",
    international: "Up to ~2000 TDS (varies)",
    national: "Up to ~2000 TDS (varies)",
    esoft: "Up to ~5000 TDS (as per application)",
  },
  {
    label: "Technology",
    international: "Impulse / conditioner (varies)",
    national: "Impulse / conditioner (varies)",
    esoft: "Programmable electronic conditioning (coil on pipe)",
  },
  {
    label: "Design",
    international: "Varies",
    national: "Varies",
    esoft: "Closed, industrial-grade controller",
  },
  {
    label: "Life Duration",
    international: "~20 years (typical claim)",
    national: "~10 years (typical claim)",
    esoft: "30+ years (design target)",
  },
  {
    label: "Maintenance",
    international: "Varies",
    national: "Varies",
    esoft: "No consumables",
  },
  {
    label: "Price",
    international: "High",
    national: "Low",
    esoft: "Medium (sized by pipe/flow)",
  },
];

export default function TechnologyPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Technology"
        title="E-SOFT | Electro Hydro Enhancer"
        subtitle="Electronic, salt-free, chemical-free conditioning that prevents scale adhesion while keeping minerals intact. Designed for residential, commercial, industrial, and agricultural duty."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        {/* Machine Visual + Quick Features */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Machine Visual</CardTitle>
              <p className="text-sm text-muted">Controller + coil placement on the pipeline (illustrative).</p>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src="/esoft-machine.webp"
                  alt="DIGIGO E-SOFT controller and induction coil mounted on a pipeline"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Key Features</CardTitle>
              <p className="text-sm text-muted">Designed to solve day-to-day hard-water problems without salt bags, chemicals, or backwash.</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <div className="grid gap-2">
                {features.map((f) => (
                  <div key={f} className="rounded-2xl border border-border bg-surface-3/50 px-4 py-2 text-ink">
                    {f}
                  </div>
                ))}
              </div>
              <Button asChild className="btn-primary w-full mt-4">
                <Link href="/get-quote">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <Card className="border-border bg-surface-2/40">
          <CardHeader>
            <CardTitle className="text-ink">How It Works</CardTitle>
            <p className="text-sm text-muted">Non-invasive installation: the coil wraps around the pipe and the controller drives the programmed signal. No pipe cutting.</p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3">
                <p className="text-ink font-medium">Controller</p>
                <p>Generates the programmed, low-frequency modulation used for conditioning.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3">
                <p className="text-ink font-medium">Induction Coil / Coupler</p>
                <p>Wraps the existing pipe and couples the signal without touching the water.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3">
                <p className="text-ink font-medium">Power</p>
                <p>Requires a nearby electrical point for the controller (site-specific).</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3">
                <p className="text-ink font-medium">Sizing Inputs</p>
                <p>Pipe size, flow (peak/avg), hardness/TDS range, and application duty.</p>
              </div>
            </div>

            <div>
              <p className="text-ink font-medium">Typical steps</p>
              <ol className="mt-2 space-y-2">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon text-surface text-xs flex items-center justify-center font-bold">1</span>
                  <span>Identify installation location on the mainline (before critical assets as per design).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon text-surface text-xs flex items-center justify-center font-bold">2</span>
                  <span>Wrap and secure the coil around the pipe.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon text-surface text-xs flex items-center justify-center font-bold">3</span>
                  <span>Mount controller and connect coil leads.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neon text-surface text-xs flex items-center justify-center font-bold">4</span>
                  <span>Power on and verify status indicators.</span>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        <Card className="border-border bg-surface-2/40">
          <CardHeader>
            <CardTitle className="text-ink">Comparison Table (Quick View)</CardTitle>
            <p className="text-sm text-muted">For evaluation and procurement discussions. Exact outcomes depend on water chemistry and operating conditions.</p>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="text-muted">
                  <th className="py-2 pr-4">Parameter</th>
                  <th className="py-2 pr-4">International Conditioner</th>
                  <th className="py-2 pr-4">National Conditioner</th>
                  <th className="py-2">E-SOFT</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="py-3 pr-4 text-ink font-medium">{row.label}</td>
                    <td className="py-3 pr-4 text-muted">{row.international}</td>
                    <td className="py-3 pr-4 text-muted">{row.national}</td>
                    <td className="py-3 text-ink">{row.esoft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="border-border bg-surface-2/40">
          <CardHeader>
            <CardTitle className="text-ink">Frequently Asked Questions</CardTitle>
            <p className="text-sm text-muted">Quick answers to common doubts about E‑SOFT technology.</p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border bg-surface-3/50">
                  <AccordionTrigger className="text-ink hover:text-neon">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn-primary">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/faq">More FAQs</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/contact">Talk to Expert</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
