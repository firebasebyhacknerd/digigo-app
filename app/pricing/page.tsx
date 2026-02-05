import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Pricing | DIGIGO E-SOFT",
  description:
    "Transparent sizing logic for E-SOFT. Pricing depends on pipe size, hardness, daily usage, and application. Get a tailored quote.",
};

export default function PricingPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Pricing"
        title="Sized to Flow, Duty, and Chemistry"
        subtitle="No fixed sticker price. We size controllers to pipe diameter, flow profile, hardness, and application duty."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>What Drives Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Pipe size and metallurgy.</p>
            <p>Flow rate (peak / average) and daily consumption.</p>
            <p>Inlet hardness / TDS and temperature profile.</p>
            <p>Application duty (domestic, commercial, industrial, agriculture).</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What’s Included</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Site assessment + sizing.</p>
            <p>Controller + induction coil + mounting hardware.</p>
            <p>Installation guidance (non-invasive wrap-around).</p>
            <p>Commissioning checklist and monitoring guide.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lead Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Request quotation (standard).</p>
            <p>Book site evaluation (recommended for complex plants).</p>
            <p>Download technology brief for internal approval.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl border border-border bg-surface-2/40 p-6 shadow-card-glow">
          <h3 className="text-2xl font-semibold text-ink">Request a Quote</h3>
          <p className="text-sm text-muted">Share the basics; we respond with configuration and investment range.</p>
          <div className="mt-4">
            <LeadForm />
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Talk to a Technical Expert</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
