import { PageHero } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "FAQ | DIGIGO E-SOFT",
  description: "Frequently asked questions about electronic water conditioning, installation, performance, and comparisons.",
};

const faqs = [
  {
    q: "Does it reduce TDS?",
    a: "No. E‑SOFT does not remove minerals. It changes the way calcium and magnesium crystallize so they remain suspended and non‑adherent.",
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
    a: "Hardware is designed for 30+ years with industrial‑grade electronics. No resin, no media to replace.",
  },
  {
    q: "Will it work on my water hardness?",
    a: "E‑SOFT is sized based on pipe size, flow rate, and hardness/TDS range. Share your details and we will confirm suitability.",
  },
  {
    q: "How is it different from a salt softener?",
    a: "Salt softeners replace hardness minerals with sodium and waste water in regeneration. E‑SOFT keeps minerals, adds no sodium, and wastes no water.",
  },
  {
    q: "Can I install it myself?",
    a: "Installation is non‑invasive (coil wraps the pipe), but we recommend a technician to ensure correct placement and power setup.",
  },
  {
    q: "What if I don’t see results?",
    a: "Results are gradual: reduced new scale and gradual loosening of existing deposits. If you’re unsure, we can provide a monitoring checklist and support.",
  },
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
      <main className="pb-16">
        <PageHero
          kicker="FAQ"
          title="Doubts, Answered"
          subtitle="Clear answers for homeowners, facility managers, and engineers—TDS, salt, installation, performance, and sizing."
        />

        <section className="mx-auto max-w-4xl space-y-4 px-4 py-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border bg-surface-2/40">
                <AccordionTrigger className="text-ink hover:text-neon">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-wrap gap-3 pt-6">
            <Button asChild className="btn-primary">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
              <Link href="/technology">How It Works</Link>
            </Button>
            <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
              <Link href="/contact">Talk to Expert</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
