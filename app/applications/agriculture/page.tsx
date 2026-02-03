import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Agriculture Application | DIGIGO E-SOFT",
  description:
    "Improve irrigation behavior, soil permeability, and nutrient availability with electronic conditioning. Salt-free, water-waste-free for farms and greenhouses.",
};

export default function AgriculturePage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Agriculture"
        title="Condition Irrigation Water for Better Uptake"
        subtitle="Reduce precipitation losses, improve emitter reliability, and support soil permeability with signal-based conditioning."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Problem → Why it happens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p><strong>Problem:</strong> Hard water precipitates nutrients, clogs emitters, and reduces soil permeability.</p>
            <p><strong>Why:</strong> Ca/Mg form insoluble precipitates with phosphates and sulfates; crystals deposit in driplines and soil pores.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expected Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>Improved nutrient availability; reduced precipitation losses (up to a meaningful percentage depending on water/soil chemistry).</p>
            <p>Cleaner emitters and filters; steadier flow.</p>
            <p>Potential reduction in fertilizer use depending on baseline losses.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How E-SOFT Helps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Signal-based conditioning alters Ca/Mg crystal habit so they remain dispersed, reducing precipitation with nutrients.</p>
            <p>Zero chemical dosing; safe for organic farming contexts.</p>
            <p>Non-invasive install on mainlines or submains; minimal pressure drop impact.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>Drip irrigation, pivots, greenhouses, fertigation systems.</p>
            <p>Works with existing filtration and fertigation—does not replace filtration.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Request Field Evaluation</h3>
            <p className="text-sm text-white/70">Share source water hardness/TDS, acreage, flow/ha, and fertigation details.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Speak with Agri Specialist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/80">
              <p>We provide placement guidance, monitoring checklist, and expected ranges (depends on water/soil).</p>
              <Button asChild>
                <Link href="https://wa.me/919999999999?text=Agriculture%20E-SOFT%20evaluation">WhatsApp Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
