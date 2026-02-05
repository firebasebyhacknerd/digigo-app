import { PageHero } from "@/components/page-hero";
import { LeadForm } from "@/components/lead-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Contact | DIGIGO Technology",
  description: "Request consultation, site evaluation, or technical briefing. Reach DIGIGO Technology Pvt. Ltd. in Ahmedabad, India.",
};

export default function ContactPage() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Contact"
        title="Talk to a Technical Expert"
        subtitle="Request consultation, site evaluation, or a detailed technology brief."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-border bg-surface-2/40 p-6">
          <h3 className="text-2xl font-semibold text-ink">Quick Lead Form</h3>
          <p className="text-sm text-muted">We respond with sizing and next steps.</p>
          <div className="mt-4">
            <LeadForm />
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Direct Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted">
            <p><strong className="text-ink">Address:</strong> 101, BASIL SKYLINE, Sardar Patel Ring Rd, nr. Vaishnodevi Underpass, Tragad, Ahmedabad, Gujarat 382421</p>
            <p><strong className="text-ink">Phone:</strong> <a href="tel:+916356311101" className="text-neon">+91 63563 11101</a></p>
            <p><strong className="text-ink">Email:</strong> <a href="mailto:info.digigo@gmail.com" className="text-neon">info.digigo@gmail.com</a></p>
            <p><strong className="text-ink">WhatsApp:</strong> +91 63563 11101</p>
            <Button asChild variant="outline" className="w-full border-neon/30 text-neon hover:bg-neon/10">
              <Link href="/get-quote">Get a Quote</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-2xl border border-border bg-surface-2/40 p-6">
          <h3 className="text-xl font-semibold text-ink">Office Location</h3>
          <p className="mt-2 text-sm text-muted">
            101, BASIL SKYLINE, Sardar Patel Ring Rd, nr. Vaishnodevi Underpass, Tragad, Ahmedabad, Gujarat 382421
          </p>
          <p className="mt-2 text-sm text-muted">
            For directions, call our team and we will guide you to the location.
          </p>
        </div>
      </section>
    </main>
  );
}
