"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const installs = [
  "Rajbhavan Gandhinagar",
  "Civil Hospital Ahmedabad",
  "Sachivalaya",
  "Sola Civil Hospital",
];

export default function GovernmentProjects() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Proof"
        title="Government Projects"
        subtitle="Selected institutional deployments. Request tender support, references, and project notes for approvals."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink text-3xl">50+</CardTitle>
              <p className="text-muted">Government projects</p>
            </CardHeader>
          </Card>
          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink text-3xl">15+</CardTitle>
              <p className="text-muted">Hospitals</p>
            </CardHeader>
          </Card>
          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink text-3xl">24/7</CardTitle>
              <p className="text-muted">Support (as per program)</p>
            </CardHeader>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border bg-surface-2/40 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-ink">Selected Installations</CardTitle>
              <p className="text-muted">Need a sector-specific list? Request references and we will share details.</p>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {installs.map((p) => (
                <div key={p} className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3 text-ink">
                  {p}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Tender & Approvals</CardTitle>
              <p className="text-muted">We can share technical notes, installation method, and available PDF reports.</p>
            </CardHeader>
            <CardContent className="grid gap-3">
              <Button asChild className="btn-primary">
                <Link href="/contact">Contact Tender Team</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/case-studies">Case Studies & Reports</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/projects">All Projects</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted">
          For a formal government quotation, use <Link className="text-neon" href="/get-quote">Get Quote</Link>.
        </p>
      </section>
    </main>
  );
}
