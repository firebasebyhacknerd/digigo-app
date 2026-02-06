import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About DIGIGO Technology Pvt. Ltd.",
  description:
    "Founded 2012 in Ahmedabad, DIGIGO builds E-SOFT electronic water conditioning systems: salt-free, chemical-free, zero water waste, long-life hardware.",
};

export default function AboutPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="About"
        title="DIGIGO Technology Pvt. Ltd."
        subtitle="Founded 2012 - Headquarters: Ahmedabad, India - Founder-managed manufacturing. CEO: Rekha Sethiya. CTO: Chief Technical Officer leading technology and product architecture."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted">
            Treat water intelligently, not chemically, delivering scale-free performance with zero discharge and zero consumables.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted">
            Make electronic conditioning the default for buildings, industry, and agriculture across India and emerging markets.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sustainability</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted">
            Zero backwash water, zero salt discharge, minimal embodied consumables, engineered for 30+ year service life.
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engineering Ethos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p>Electronics designed for harsh electrical environments common in India.</p>
            <p>Non-invasive installation; retrofit friendly for existing plants and residences.</p>
            <p>Documentation-first: installation SOPs, monitoring checklists, and validation methods.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leadership</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p><strong className="text-ink">CEO:</strong> Rekha Sethiya - oversees manufacturing and customer programs.</p>
            <p><strong className="text-ink">CTO:</strong> Chief Technical Officer - technology authority for signal design and product roadmap.</p>
            <p>Founder-managed manufacturing with in-house R&D and QA.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
