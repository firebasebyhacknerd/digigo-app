import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Factory, Building2, Droplets, Sprout } from "lucide-react";

const items = [
  {
    title: "Residential",
    icon: Droplets,
    href: "/applications/residential",
    problem: "Scale damages geysers, shower fittings, glass, tiles; skin & hair feel dry.",
    outcome: "Gentle water feel, protected fixtures, lower soap use, no salt bags.",
  },
  {
    title: "Commercial",
    icon: Building2,
    href: "/applications/commercial",
    problem: "Hotels, hospitals, malls face spotting, housekeeping load, and guest discomfort.",
    outcome: "Spot-free finishes, predictable maintenance, stable hygiene performance.",
  },
  {
    title: "Industrial",
    icon: Factory,
    href: "/applications/industrial",
    problem: "Boilers, chillers, RO pre-treatment suffer scale -> energy penalty & downtime.",
    outcome: "Lower approach temperature, fewer shutdowns, longer RO membrane life.",
  },
  {
    title: "Agriculture",
    icon: Sprout,
    href: "/applications/agriculture",
    problem: "Hard water precipitates nutrients and clogs emitters; soil permeability drops.",
    outcome: "Better nutrient availability, improved infiltration, potential fertilizer savings.",
  },
];

export const metadata = {
  title: "Applications | DIGIGO E-SOFT",
  description: "Residential, commercial, industrial, and agriculture applications for DIGIGO E-SOFT electronic water conditioning.",
};

export default function ApplicationsPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Applications"
        title="Engineered for Homes, Buildings, Plants, and Farms"
        subtitle="One platform, tuned by pipe size and duty: the same science serves villas, hotels, hospitals, factories, and irrigation."
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(({ title, href, problem, outcome, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-border bg-surface-3/50 p-3">
                    <Icon className="h-5 w-5 text-neon" />
                  </div>
                  <CardTitle className="text-ink">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted">
                <p><strong className="text-ink">Problem:</strong> {problem}</p>
                <p><strong className="text-ink">Outcome:</strong> {outcome}</p>
                <Button asChild variant="outline" size="sm">
                  <Link href={href}>View {title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
