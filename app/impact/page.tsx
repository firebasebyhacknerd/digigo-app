"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Impact() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Impact"
        title="Impact & Savings"
        subtitle="Examples of how E-SOFT can reduce detergent, energy penalty from scale, and repairs. Exact savings depend on water chemistry and usage."
      />

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-12">
        <Card className="border-border bg-surface-2/40">
          <CardHeader>
            <CardTitle className="text-ink">Example ROI Snapshot</CardTitle>
            <p className="text-muted">Illustrative numbers for understanding (not a guarantee).</p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted">
            <div><span className="text-ink font-medium">Soap/Detergent:</span> INR 12,000 to INR 6,000</div>
            <div><span className="text-ink font-medium">Energy Bills:</span> INR 24,000 to INR 15,600</div>
            <div><span className="text-ink font-medium">Repairs:</span> INR 8,000 to INR 2,000</div>
            <div className="text-neon font-semibold">Total Annual Savings: INR 20,400</div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn-primary">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/faq">FAQ (Doubts)</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
