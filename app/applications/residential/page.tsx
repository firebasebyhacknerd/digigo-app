import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Residential Application | DIGIGO E-SOFT",
  description:
    "Protect geysers, taps, tiles, RO, and appliances. Reduce soap use and dryness with salt-free E-SOFT electronic conditioning for homes.",
};

export default function ResidentialPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Residential"
        title="Soft-Water Comfort Without Salt or Resin"
        subtitle="Protect bathrooms, kitchens, glass, and appliances. Gentle feel on skin and hair—no bags of salt, no water wastage."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Problem → Why it happens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p><strong className="text-ink">Problem:</strong> Scale on showerheads, geyser coils, faucets, tiles; dry skin/hair; white spotting on glass.</p>
            <p><strong className="text-ink">Why:</strong> Calcium & magnesium crystallize as hard, adhesive calcite/aragonite and stick to hot surfaces; soaps react with Ca/Mg creating residues.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted">
            <p>Lower spotting on glass/tiles.</p>
            <p>Smoother rinse feel for many users (varies by skin type).</p>
            <p>Protect geysers & fixtures from scale.</p>
            <p>Reduce soap/shampoo use by 10–25% (depends on water chemistry).</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How E-SOFT Helps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p>Signal-based conditioning converts Ca/Mg to fine, rounded micro-crystals that do not adhere to hot surfaces.</p>
            <p>TDS stays unchanged; essential minerals remain.</p>
            <p>Non-invasive install: coil wraps the pipe; no cutting.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expected Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted">
            <p>Scale reduction is typically visible within weeks on active surfaces; legacy scale loosens gradually over months.</p>
            <p>Reduced maintenance and descaling visits.</p>
            <p>Energy efficiency maintained for geysers and instant heaters.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
            <h3 className="text-xl font-semibold text-ink">Book Free Consultation</h3>
            <p className="text-sm text-muted">Share city, hardness source, family size, number of bathrooms, and flow rate.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Talk to a Technical Expert</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <p>We map your flow profile and recommend the right controller without over-sizing.</p>
              <p>Includes installation notes for plumber/contractor.</p>
              <Button asChild className="btn-primary">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
