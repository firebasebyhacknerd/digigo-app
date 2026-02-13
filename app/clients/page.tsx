"use client";

import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Clients() {
  const sectors = [
    "Government & PSU",
    "Healthcare",
    "Real Estate",
    "Industrial",
    "Hospitality",
  ];

  const highlights = [
    { title: "500+", label: "Happy clients" },
    { title: "50+", label: "Government projects" },
    { title: "99%", label: "Retention" },
  ];

  const clientLogos = [
    { name: "Sardardham", file: "sardardham.png" },
    { name: "Krishna Group", file: "krishna-group.png" },
    { name: "Brahma", file: "brhma.png" },
    { name: "Arise", file: "arise.png" },
    { name: "Shanti", file: "shanti-logo.png" },
    { name: "AIM Plast", file: "aim-plast.jpg" },
    { name: "Apollo", file: "apollo.png" },
    { name: "Atmos", file: "atmos.jpg" },
    { name: "Compocan Industries", file: "compocan-industries.jpg" },
    { name: "Cotton Concept", file: "cotton-concept.png" },
    { name: "Decon", file: "decon.png" },
    { name: "Dhanraj", file: "dhanraj.jpg" },
    { name: "Duke", file: "duke.png" },
    { name: "FCG", file: "fcg.png" },
    { name: "Gujarat Health", file: "Gujarat-Health.jpeg" },
    { name: "Life Care", file: "life-care.jpg" },
    { name: "Madhvi", file: "Madhvi.png" },
    { name: "Mandan Metals", file: "mandan-matels.png" },
    { name: "Mavjat", file: "mavjat.png" },
    { name: "Nucleus Formulation", file: "nucleus-formulation-pvt-ltd.png" },
    { name: "Osho Dynamic", file: "osho-dynamic.jpg" },
    { name: "Pharmanza", file: "pharmanza.png" },
    { name: "Sai", file: "sai.png" },
    { name: "Shikshapatri", file: "shikshapatri.png" },
    { name: "Stagot", file: "stagot.jpg" },
    { name: "Sun Resorts", file: "sun-resorts.png" },
    { name: "Vinitech", file: "vinitech.png" },
    { name: "Vivaan", file: "vivaan.png" },
  ];

  return (
    <main className="pb-16">
      <PageHero
        kicker="Proof"
        title="Clients"
        subtitle="Customers choose E-SOFT for no-maintenance scale control across buildings, institutions, and industry. Explore sectors and request references."
      />

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <Card key={h.label} className="border-border bg-surface-2/40">
              <CardHeader>
                <CardTitle className="text-ink text-3xl">{h.title}</CardTitle>
                <p className="text-muted">{h.label}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-border bg-surface-2/40 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-ink">Client Logos</CardTitle>
              <p className="text-muted">Live logo set captured from your current website.</p>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {clientLogos.map((client) => (
                <div
                  key={client.file}
                  className="flex h-24 items-center justify-center rounded-2xl border border-border bg-white px-4 py-3"
                  title={client.name}
                >
                  <Image
                    src={`/client-logos/${client.file}`}
                    alt={`${client.name} logo`}
                    width={180}
                    height={72}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-surface-2/40">
            <CardHeader>
              <CardTitle className="text-ink">Sectors Served</CardTitle>
              <p className="text-muted">If you want examples from your segment, we can share a reference list on request.</p>
            </CardHeader>
            <CardContent className="space-y-2 text-muted">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3 text-ink"
                >
                  {sector}
                </div>
              ))}
              <div className="pt-3 grid gap-3">
                <Button asChild className="btn-primary">
                  <Link href="/case-studies">See Case Studies</Link>
                </Button>
                <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                  <Link href="/contact">Request References</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted">
          Also explore <Link className="text-neon" href="/projects">Projects</Link> and <Link className="text-neon" href="/government-projects">Government Projects</Link>.
        </p>
      </section>
    </main>
  );
}
