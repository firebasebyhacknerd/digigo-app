"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  { sector: "Agriculture", items: ["500-acre farm (Punjab)", "Greenhouse (Maharashtra)"] },
  { sector: "Residential", items: ["50-unit villas (Bangalore)", "200+ apartments (Mumbai)"] },
  { sector: "Hospitality", items: ["5-star hotel chain (Delhi)"] },
  { sector: "Industrial", items: ["Textile plant (Surat)", "Food processing (Rajkot)"] },
];

export default function Projects() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Proof"
        title="Projects"
        subtitle="Selected deployments across agriculture, residential, hospitality, and industry. Request project references and case studies for your sector."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {projects.map((group) => (
              <Card key={group.sector} className="border-border bg-surface-2/40">
                <CardHeader>
                  <CardTitle className="text-ink">{group.sector}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((p) => (
                    <div key={p} className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3 text-ink">
                      {p}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Need proof for approvals?</CardTitle>
              <p className="text-muted">We can share sector references and PDFs (where available) for internal approvals.</p>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button asChild className="btn-primary">
                <Link href="/case-studies">Case Studies & Reports</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/government-projects">Government Projects</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/contact">Request Project References</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
