import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Wrench, Cable, Power } from "lucide-react";

export const metadata: Metadata = {
  title: "Installation Guide | DIGIGO E-SOFT",
  description:
    "Simple E-SOFT installation overview with key prerequisites and expected onsite sequence.",
};

export default function InstallationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-slate-100 via-white to-blue-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Installation Guide
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Installation Is Fast and Non-Invasive
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            Standard installation is completed quickly by trained technicians
            with minimal interruption.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Typical Sequence
          </h2>
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
                desc: "System power-on and commissioning checklist verification.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <step.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Before Technician Visit
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              "Ensure access to the main water line section",
              "Confirm nearby power point availability",
              "Share pipe size and layout details in advance",
              "Keep installation point clear for quick work",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Book Installation Planning Support</h2>
            <p className="mt-3 text-lg text-white/90">
              Share your site details and we will confirm installation readiness
              before dispatch.
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
