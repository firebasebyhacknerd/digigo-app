import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Case Studies & Test Reports | DIGIGO E-SOFT",
  description:
    "Installation examples, before/after observations, performance summaries, and downloadable test reports for DIGIGO E-SOFT.",
};

const cases = [
  {
    title: "Rajbhavan Gandhinagar – Central Utilities",
    summary: "Conditioned make-up and domestic water to arrest scale in geysers and cooling circuits.",
    pdf: "/case-study-rajbhavan.pdf",
  },
  {
    title: "Civil Hospital Ahmedabad – Steam & Hot Water",
    summary: "Reduced scale in steam generators and hot water lines; improved maintenance intervals.",
    pdf: "/case-study-civil-hospital.pdf",
  },
  {
    title: "Hospitality Cluster – Guest Bathrooms & Laundry",
    summary: "Lower spotting, reduced detergent use, stable housekeeping KPIs across 4 properties.",
    pdf: "/case-study-hospitality.pdf",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Proof"
        title="Case Studies & Test Reports"
        subtitle="Real installations across government, healthcare, hospitality, industry. Downloadable PDFs for technical teams."
      />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 md:grid-cols-3">
        {cases.map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle className="text-ink">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted">
              <p className="text-muted">{c.summary}</p>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href={c.pdf} download>
                  Download PDF
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
