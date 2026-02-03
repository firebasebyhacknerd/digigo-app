import { PageHero } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Commercial Application | DIGIGO E-SOFT",
  description:
    "Hotels, hospitals, malls, campuses: hygiene-first water conditioning with zero salt and zero water waste. Reduce spotting, protect equipment, stabilize housekeeping.",
};

export default function CommercialPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Commercial"
        title="Hygiene-First Water for Hospitality, Healthcare, and Campuses"
        subtitle="Reduce spotting on glass & linen, protect kitchen/steam equipment, lower housekeeping load with electronic conditioning."
      />

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Problem → Why it happens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p><strong>Problem:</strong> White spots on glass/steel, clogged fixtures, higher detergent use, guest complaints.</p>
            <p><strong>Why:</strong> Hardness minerals deposit on hot and polished surfaces; soaps react with Ca/Mg; backwash-based softeners waste water and demand salt logistics.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expected Outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>Lower spotting and faster housekeeping turnaround.</p>
            <p>Better heat transfer in boilers/steamers; lower fuel use.</p>
            <p>Reduced salt handling and storage space.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl grid gap-6 px-4 pb-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>How E-SOFT Helps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p>Maintains minerals but changes crystal habit so they do not adhere to fixtures or heat surfaces.</p>
            <p>Zero backwash: saves thousands of liters monthly in hotels/hospitals.</p>
            <p>No chemical dosing; safe for kitchens and patient areas.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Use Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-white/80">
            <p>Guest bathrooms, laundries, boilers, dishwashers, sterilizers, cooling towers.</p>
            <p>Integrates with existing RO/UV systems; does not replace RO for drinking.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">Request Technical Evaluation</h3>
            <p className="text-sm text-white/70">Share pipe size, hardness range, daily consumption, and equipment list.</p>
            <div className="mt-4">
              <LeadForm />
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp the Projects Desk</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-white/80">
              <p>We provide a sizing sheet, sample specification text, and ROI logic for procurement.</p>
              <Button asChild>
                <Link href="https://wa.me/919999999999?text=Commercial%20E-SOFT%20evaluation">WhatsApp Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
