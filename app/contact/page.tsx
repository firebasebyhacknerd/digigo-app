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

      <section className="mx-auto max-w-6xl grid gap-6 px-4 py-12 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Quick Lead Form</h3>
          <p className="text-sm text-white/70">We respond with sizing and next steps.</p>
          <div className="mt-4">
            <LeadForm />
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Direct Contacts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-white/80">
            <p><strong>Address:</strong> Basil Skyline, S.P. Ring Road, Ahmedabad, Gujarat, India</p>
            <p><strong>Phone:</strong> <a href="tel:+919999999999" className="text-neon">+91 99999 99999</a></p>
            <p><strong>Email:</strong> <a href="mailto:connect@digigo.in" className="text-neon">connect@digigo.in</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/919999999999" className="text-neon">Message now</a></p>
            <Button asChild variant="outline" className="w-full">
              <Link href="https://maps.google.com/?q=Basil+Skyline+Ahmedabad">Open in Google Maps</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <iframe
            title="DIGIGO Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d72.5!3d23.0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sBasil%20Skyline!5e0!3m2!1sen!2sin!4v0000000000"
            className="h-full w-full"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
