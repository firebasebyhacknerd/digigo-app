"use client";

import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Hospitals | DIGIGO E-SOFT Applications",
  description: "Scale-free steam, laundry, and sterilization lines with zero salt or chemicals. Protect autoclaves, boilers, and laundry equipment.",
};

export default function Hospitals() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Application"
        title="Hospitals & Healthcare"
        subtitle="Scale-free steam, laundry, and sterilization lines with zero salt or chemicals. Protect autoclaves, boilers, and laundry equipment while keeping minerals in the water."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Why Hospitals Choose E‑SOFT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <p>• Prevents scale in steam sterilizers and CSSD lines</p>
              <p>• Reduces downtime and cleaning labor in laundries</p>
              <p>• Improves heat transfer efficiency for hospital boilers</p>
              <p>• Non-invasive pipe-mounted coil; no process interruption</p>
              <p>• Zero salt, zero chemicals, zero wastewater</p>
              <p>• Keeps essential minerals in water for patient safety</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Key Outcomes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <p>• Stable boiler approach temperatures</p>
              <p>• Lower detergent and chemical usage in laundries</p>
              <p>• Fewer descaling events and maintenance calls</p>
              <p>• Consistent steam quality for sterilization</p>
              <p>• Compliance with water safety standards</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn-primary">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/technology">How It Works</Link>
          </Button>
          <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/faq">FAQ</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
