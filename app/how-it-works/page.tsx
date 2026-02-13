import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bolt, CircleDot, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | DIGIGO E-SOFT",
  description:
    "Simple explanation of E-SOFT electronic water conditioning and why it helps reduce scale adhesion without salt.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            How It Works
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Simple Science, Practical Result
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            E-SOFT conditions water electronically so minerals are less likely to
            form hard deposits on surfaces.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-3">
          {[
            {
              icon: Waves,
              title: "Step 1: Hard Water Enters",
              desc: "Water carries calcium and magnesium that can create scale.",
            },
            {
              icon: Bolt,
              title: "Step 2: Signal Conditioning",
              desc: "The controller sends programmed signals via an external coil.",
            },
            {
              icon: CircleDot,
              title: "Step 3: Reduced Adhesion",
              desc: "Mineral behavior changes so adhesion tendency can be reduced.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <item.icon className="mb-3 h-8 w-8 text-blue-700" />
              <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900 lg:text-4xl">
            Common Questions
          </h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "Will water taste change?",
                a: "No major taste change is expected. Minerals are retained.",
              },
              {
                q: "Is this safe for drinking water lines?",
                a: "Yes, it is a non-chemical approach and retains minerals.",
              },
              {
                q: "Does it need electricity?",
                a: "Yes, a standard power source is needed for the controller.",
              },
              {
                q: "How long does installation take?",
                a: "Typical on-site installation is short and usually non-invasive.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-blue-100 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-3xl font-bold">Need a Site-Specific Explanation?</h2>
            <p className="mt-3 text-lg text-white/90">
              Share your pipe size, flow profile, and water challenge. We will
              explain expected behavior for your exact setup.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                <Link href="/get-quote">Request Expert Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/why-not-salt-softener">Compare with Salt Softener</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
