import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function TechnologyPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Technology"
        title="E-SOFT | Electro Hydro Enhancer"
        subtitle="Electronic, salt-free, chemical-free conditioning that prevents scale adhesion while keeping minerals intact. Designed for residential, commercial, industrial, and agricultural duty."
      />

      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>What E-SOFT Does</CardTitle>
              <p className="text-sm text-white/70">
                Alters mineral crystallization so hardness minerals become fine, rounded micro-particles (~0.5 μm) that travel with flow instead
                of sticking to surfaces.
              </p>
            </CardHeader>
            <CardContent className="text-sm text-white/80 space-y-2">
              <p>Prevents new scale adhesion.</p>
              <p>Gradually loosens existing scale; surfaces clean during normal operation.</p>
              <p>Maintains flow and heat-transfer efficiency; lowers energy penalty in boilers and chillers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What E-SOFT Does NOT Do</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/80 space-y-2">
              <p>Does not reduce TDS.</p>
              <p>Does not remove minerals or make RO-quality water.</p>
              <p>Does not add chemicals, salt, or resin media.</p>
              <p>Does not waste water—no backwash or regeneration.</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Signal Path</CardTitle>
              <p className="text-sm text-white/70">
                Digitally controlled, low-frequency, modulated signals are applied via an induction coil wrapped around the pipe—fully non-invasive.
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-white/80">
              <p>Controller tunes waveform to mineral behavior across flow and temperature ranges.</p>
              <p>Coil induces electromagnetic field that affects nucleation and crystal habit of Ca/Mg.</p>
              <p>Results: aragonite-like, rounded crystals with low adhesion; they stay suspended and flush through.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation & Proof</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-white/80">
              <p>Visual: reduced new scale, gradual clean-up of prior deposits.</p>
              <p>Hydraulic: stable pressure drop across equipment and pipelines.</p>
              <p>Thermal: improved approach temperature in chillers; reduced fuel/kWh per output.</p>
              <p>Consumption: lower detergent/soap usage; reduced descaling events.</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="compare" className="w-full">
          <TabsList>
            <TabsTrigger value="compare">Comparison</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="form">Request Technical Brief</TabsTrigger>
          </TabsList>
          <TabsContent value="compare" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {comparison.map((row) => (
                <Card key={row.type}>
                  <CardHeader>
                    <CardTitle className="text-lg">{row.type}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-white/80">
                    <p><strong>Mechanism:</strong> {row.mechanism}</p>
                    <p><strong>Impact:</strong> {row.impact}</p>
                    <p><strong>Maintenance:</strong> {row.maintenance}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <Accordion type="single" collapsible className="mt-4 space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="form">
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Download Technology Brief</h3>
              <p className="text-sm text-white/70">Receive PDF with signal specs, installation notes, and validation checklist.</p>
              <div className="mt-4">
                <LeadForm />
              </div>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/tech-brief.pdf" download>
                  Download placeholder PDF
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
