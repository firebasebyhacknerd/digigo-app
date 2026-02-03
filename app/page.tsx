import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowUpRight, Shield, Droplets, Factory, Sprout } from "lucide-react";
import Link from "next/link";

const trust = [
  "10,000+ happy customers",
  "150+ commercial & hospitality sites",
  "50+ government & institutional projects",
  "Up to 30 years designed product life",
];

const pillars = [
  {
    title: "Savings",
    desc: "Reduce descaling shutdowns, detergent use, and energy penalty from scale.",
  },
  {
    title: "Sustainability",
    desc: "Zero water waste, zero salt discharge. Keeps healthy minerals intact.",
  },
  {
    title: "Soft Water Comfort",
    desc: "Gentle on skin & hair; protects fittings, glass, tiles, and appliances.",
  },
];

const applications = [
  { title: "Residential", desc: "Protect showers, geysers, RO, taps, tiles.", icon: Droplets, href: "/applications/residential" },
  { title: "Commercial", desc: "Hotels, hospitals, malls, campuses—hygiene-first water.", icon: Shield, href: "/applications/commercial" },
  { title: "Industrial", desc: "Boilers, chillers, heat exchangers—preserve heat transfer.", icon: Factory, href: "/applications/industrial" },
  { title: "Agriculture", desc: "Improve irrigation behavior and nutrient availability.", icon: Sprout, href: "/applications/agriculture" },
];

export const metadata = {
  title: "DIGIGO | India’s Most Advanced Electronic Water Conditioning System",
  description:
    "E-SOFT Electro Hydro Enhancer by DIGIGO: salt-free, chemical-free, zero water waste, zero maintenance, 30-year design life. Residential, commercial, industrial, agriculture.",
  openGraph: {
    title: "DIGIGO | India’s Most Advanced Electronic Water Conditioning System",
    description:
      "Experience soft-water behavior without salt, chemicals, or maintenance. DIGIGO E-SOFT protects homes, industries, farms, and campuses across India.",
    url: "https://www.digigo.example.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen space-y-16 pb-16">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#05070c] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div className="space-y-6">
            <Badge>Hard Water, Tough Life. Soft Water, Comfortable Lifestyle.</Badge>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.16em] text-neon">6th-Generation Electronic Water Conditioning</p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                India’s Most Advanced Electronic Water Conditioning System
              </h1>
              <p className="text-lg text-white/70">
                Experience soft-water behavior without salt, chemicals, or maintenance. E-SOFT (Electro Hydro Enhancer) is engineered for Indian water conditions—residential to heavy industry.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="shadow-soft-glow">
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://wa.me/919999999999?text=Hi%20DIGIGO%2C%20I%20need%20a%20site%20evaluation">WhatsApp Us</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/technology">
                  See how it works <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/80 sm:grid-cols-4">
              {trust.map((t) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  {t}
                </div>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden">
            <CardHeader>
              <CardTitle>How E-SOFT Works</CardTitle>
              <p className="text-sm text-white/70">
                Computerized, low-frequency modulated signals are induced via an external antenna coil—no pipe cutting, no chemicals.
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="rounded-xl border border-dashed border-white/12 bg-white/5 p-6 text-white/80">
                <ul className="space-y-2 text-sm">
                  <li>• Digitally programmed controller drives an induction coil wrapped on the pipe.</li>
                  <li>• Signals alter crystallization behavior of calcium & magnesium (no mineral removal).</li>
                  <li>• Scale can no longer adhere; existing deposits loosen gradually.</li>
                  <li>• Zero salt, zero resin, zero water waste, zero consumables.</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white/60">
                <span className="rounded-full border border-white/10 px-3 py-1">Non-invasive install</span>
                <span className="rounded-full border border-white/10 px-3 py-1">TDS unchanged</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Keeps healthy minerals</span>
                <span className="rounded-full border border-white/10 px-3 py-1">30+ year design life</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Three Pillars of Value</h2>
            <p className="text-white/70">Savings • Sustainability • Soft Water Comfort</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/pricing">See sizing & pricing logic</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <p className="text-white/70 text-sm">{p.desc}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-white">Applications</h2>
          <p className="text-white/70">
            Engineered for villas, hospitals, hotels, factories, campuses, food & beverage, dairy, agro-irrigation.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {applications.map(({ title, desc, icon: Icon, href }) => (
            <Card key={title} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                    <Icon className="h-5 w-5 text-neon" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </div>
                <p className="text-sm text-white/70">{desc}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" size="sm">
                  <Link href={href}>Explore {title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-8">
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-3xl font-semibold text-white">3D Explainer: How E‑SOFT Works</h2>
            <p className="text-white/70">
              A non-invasive antenna coil wraps around the pipe. A programmed controller drives low-frequency, modulated signals that alter how
              calcium and magnesium crystals form—so they stay suspended instead of sticking.
            </p>
            <ol className="space-y-2 text-sm text-white/80 list-decimal list-inside">
              <li>Controller computes waveform f(t) tuned to flow and hardness.</li>
              <li>Induction coil couples the signal into the moving water—no pipe cutting.</li>
              <li>Crystal habit shifts to rounded ~0.5 μm particles with low adhesion.</li>
              <li>Existing scale loosens gradually; new scale can’t anchor to surfaces.</li>
            </ol>
            <div className="flex gap-3 pt-2">
              <Button asChild>
                <Link href="/technology">Deep dive: Technology</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/technology#comparison">See comparisons</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative overflow-hidden rounded-2xl border border-neon/25 bg-gradient-to-br from-[#0a1120] via-[#0d182c] to-[#08101c] p-6 shadow-soft-glow">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-neon/15 blur-3xl" aria-hidden />
              <div className="absolute -right-12 -bottom-16 h-48 w-48 rounded-full bg-neon-ice/12 blur-3xl" aria-hidden />
              <div className="space-y-3">
                <div className="text-sm uppercase tracking-[0.12em] text-neon">Interactive 3D Placeholder</div>
                <div className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-black/40 flex items-center justify-center text-white/60 text-center p-6">
                  Future-ready slot for a lightweight 3D model / WebGL canvas showing coil, pipe, signal pulses, and crystal transformation.
                </div>
                <p className="text-xs text-white/60">
                  Until the 3D asset is uploaded, this frame explains the signal path visually. Replace with your GLB/three.js scene when ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Key Benefits</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                "Prevents new scale buildup",
                "Loosens old deposits gradually",
                "Improves heat transfer efficiency",
                "Reduces detergent & soap consumption",
                "Extends appliance and pipeline life",
                "Improves flow, reduces pressure drop",
                "Cuts maintenance downtime and cost",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-[3px] h-4 w-4 text-neon" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/12 bg-[#0b111d] p-6 shadow-glow">
            <h3 className="text-xl font-semibold text-white">Request a Site Evaluation</h3>
            <p className="text-sm text-white/70">Technical team responds with sizing and expected outcomes.</p>
            <LeadForm compact />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-white">Social Proof</h2>
          <p className="text-white/70">Recent government & institutional deployments.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {["Rajbhavan Gandhinagar", "Civil Hospital Ahmedabad", "Swarnim Sankul"].map((site) => (
            <Card key={site}>
              <CardHeader>
                <CardTitle>{site}</CardTitle>
                <p className="text-sm text-white/70">E-SOFT installed • zero backwash • maintenance-light.</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {trust.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-4 px-4">
        <div className="rounded-2xl border border-neon/30 bg-gradient-to-r from-neon/10 to-neon-ice/10 p-6 shadow-soft-glow">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-neon">Next Step</p>
              <h3 className="text-2xl font-semibold text-white">Talk to a Technical Expert</h3>
              <p className="text-white/70">
                Share your water source, flow profile, and application. We propose configuration, installation notes, and ROI logic.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://wa.me/919999999999?text=Need%20E-SOFT%20evaluation">WhatsApp Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
