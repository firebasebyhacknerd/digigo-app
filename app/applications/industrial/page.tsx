import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Industrial Application | DIGIGO E-SOFT",
  description:
    "Electronic conditioning for boilers, chillers, heat exchangers, RO pre-treatment. Reduce scale, protect heat transfer, lower fuel and kWh penalties.",
};

export default function IndustrialPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Industrial"
        title="Protect Heat Transfer Assets and Process Reliability"
        subtitle="Boilers, condensers, cooling towers, RO pre-treatment—scale-free operation without salt, chemicals, or backwash."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Problem → Why it happens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p><strong>Problem:</strong> Scale on heat-transfer surfaces increases approach temperature, fuel/kWh per output, and forces shutdowns for cleaning.</p>
            <p><strong>Why:</strong> Ca/Mg precipitate as hard, adherent crystals on hot surfaces and RO membranes; traditional softeners add sodium and require backwash water & salt logistics.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expected Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>Lower approach temperature drift; stable ΔT.</p>
            <p>Reduced descaling shutdowns.</p>
            <p>Energy savings modeled at 2–6% depending on baseline scale thickness.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How E-SOFT Helps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Modulates crystal habit so Ca/Mg remain as suspended, rounded particles; adhesion to metal and membranes drops sharply.</p>
            <p>Zero backwash water; zero chemical dosing; TDS unchanged.</p>
            <p>Integrates upstream of boilers, chillers, cooling towers, RO, humidifiers.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Energy Savings Model (Placeholder)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>For every 1 mm of carbonate scale, boilers can lose 2–4% efficiency. If E-SOFT keeps deposition near zero, modeled savings often fall in the 2–6% range, depending on load and water chemistry.</p>
            <div className="rounded-xl border border-dashed border-white/12 bg-white/5 p-4 text-xs text-white/70">
              Calculator placeholder: Enter fuel rate, baseline approach temperature, and cleaning frequency to model payback.
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Request Site Evaluation</h3>
            <p className="text-sm text-white/70">Share pipe size, flow, hardness range, make-up water volume, and critical assets.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Get Engineering Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/80">
              <p>We provide P&ID markups, installation notes, and monitoring checklist (ΔP, approach temp, fuel per output).</p>
              <Button asChild>
                <Link href="https://wa.me/919999999999?text=Industrial%20E-SOFT%20evaluation">WhatsApp Projects Desk</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
