import type { Metadata } from "next";
import Link from "next/link";
import { Cable, CheckCircle2, Power, Wrench } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Installation Guide | DIGIGO E-SOFT",
  description:
    "Simple E-SOFT installation overview with key prerequisites and expected onsite sequence.",
};

export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Installation Guide"
        title="Fast, Non-Invasive Installation Workflow"
        subtitle="Installation is typically completed quickly by trained technicians with minimal interruption to your site operations."
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-16">
        <div className="section-shell max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">Typical Sequence</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Wrench,
                title: "1. Mount Controller",
                desc: "Controller is wall mounted at the selected point.",
              },
              {
                icon: Cable,
                title: "2. Wrap Coil",
                desc: "Induction coil is wrapped externally on the target pipe.",
              },
              {
                icon: Power,
                title: "3. Power and Validate",
                desc: "Power on and verify commissioning checklist indicators.",
              },
            ].map((step) => (
              <div key={step.title} className="luxury-panel p-6">
                <step.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="section-shell max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">Before Technician Visit</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "Ensure access to the main water line section",
              "Confirm nearby power point availability",
              "Share pipe size and layout details in advance",
              "Keep installation point clear for quick work",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell max-w-5xl">
          <div className="luxury-band rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold">Book Installation Planning Support</h2>
            <p className="mt-3 text-lg text-white/90">
              Share site details and we will confirm readiness before dispatch.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Request Installation Plan</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="tel:+916356311101">Call Installation Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
