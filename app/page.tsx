import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Leaf, Sparkles, Droplets, Factory, Home, Building, Wheat } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "DIGIGO | Electronic Water Conditioning for Hard Water & Scale Control",
  description:
    "E-SOFT Electro Hydro Enhancer by DIGIGO: the water softener alternative that is salt-free, chemical-free, zero reject water, zero maintenance. Built for residential, commercial, industrial, and agri hard water control.",
  openGraph: {
    title: "DIGIGO | Electronic Water Conditioning for Hard Water & Scale Control",
    description:
      "Experience soft-water behavior without salt, resin, or backwash. DIGIGO E-SOFT keeps pipelines, heat exchangers, and bathrooms scale-free while retaining minerals.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    type: "website",
  },
};

const highlights = [
  { title: "Chemical-Free", desc: "Zero salt, zero resin, zero reject water. Minerals stay in.", icon: Leaf },
  { title: "Energy Efficient", desc: "Up to 30% energy reduction by keeping heat transfer surfaces clean.", icon: Zap },
  { title: "Zero Maintenance", desc: "No consumables or backwash; set-and-forget electronics.", icon: Shield },
  { title: "ROI in 12–18 Months", desc: "Savings in soap, energy, and repairs recover the cost fast.", icon: Sparkles },
];

const trust = ["500+ happy clients", "15+ years experience", "50+ government projects", "99% retention"];

const applications = [
  { title: "Residential", href: "/applications/residential", icon: Home },
  { title: "Commercial", href: "/applications/commercial", icon: Building },
  { title: "Industrial", href: "/applications/industrial", icon: Factory },
  { title: "Agriculture", href: "/applications/agriculture", icon: Wheat },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface-2 py-20">
        <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
        <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-neon/10 blur-3xl animate-pulse" aria-hidden />
        <div className="absolute -right-40 -bottom-32 h-80 w-80 rounded-full bg-neon-ice/8 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <Badge className="border-neon/20 bg-neon/10 text-neon">Salt-Free • Chemical-Free • Zero Water Waste</Badge>
              <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
                Hard Water, No Scale.
                <br />
                <span className="text-neon">Zero Salt, Zero Chemicals.</span>
              </h1>
              <p className="text-lg text-muted">
                DIGIGO E‑SOFT uses programmable electronic signals to keep minerals from sticking to pipes and equipment.
                <br />
                No salt bags, no resin, no backwash. Just clean water flow.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-primary">
                  <Link href="/get-quote">Get Quote</Link>
                </Button>
                <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                  <Link href="/technology">How It Works</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-3 shadow-card-glow neon-border">
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-surface to-surface-3">
                <Image
                  src="/esoft-machine.webp"
                  alt="DIGIGO E-SOFT Electro Hydro Enhancer controller and induction coil installed on pipeline"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center gap-2 rounded-full bg-surface-2/80 backdrop-blur px-4 py-2 text-xs text-neon border border-neon/20">
                  <Droplets className="h-3 w-3" /> Live System Footage
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-muted">E-SOFT in action: no chemicals, no salt, no maintenance.</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-muted">Non-invasive coil</span>
                    <span className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-muted">3K–33K modulation</span>
                    <span className="rounded-full border border-border bg-surface-2/60 px-3 py-1 text-muted">Zero brine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why E-SOFT */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-ink">Why E‑SOFT Wins Over Salt Softeners</h2>
          <p className="text-muted max-w-2xl mx-auto">
            No salt bags, no wastewater, no chemicals. Keep essential minerals and avoid maintenance. Ideal for homes, hotels, hospitals, factories, and farms.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {highlights.map(({ title, desc, icon: Icon }) => (
            <Card key={title} className="border-border bg-surface-2/40">
              <CardHeader>
                <Icon className="h-8 w-8 text-neon" />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-ink">{title}</CardTitle>
                <p className="text-sm text-muted">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-ink">Built for Every Application</h2>
          <p className="text-muted max-w-2xl mx-auto">One platform, tuned by pipe size and duty: the same science serves villas, hotels, hospitals, factories, and irrigation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {applications.map(({ title, href, icon: Icon }) => (
            <Card key={title} className="border-border bg-surface-2/40 hover:border-neon/30 transition-colors">
              <CardHeader>
                <Icon className="h-8 w-8 text-neon" />
                <CardTitle className="text-ink">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" size="sm" className="border-neon/30 text-neon hover:bg-neon/10">
                  <Link href={href}>Explore {title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-semibold text-ink">Trusted Across India</h2>
          <p className="text-muted max-w-2xl mx-auto">15+ years, 500+ installations, 50+ government projects, 99% retention.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t} className="rounded-2xl border border-border bg-surface-3/50 px-4 py-3 text-center">
              <span className="text-ink font-medium">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl space-y-6 px-4 py-16">
        <div className="rounded-2xl border border-neon/30 bg-gradient-to-r from-neon/10 to-neon-ice/10 p-6 shadow-soft-glow">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-neon">Next Step</p>
              <h3 className="text-2xl font-semibold text-ink">Talk to a Technical Expert</h3>
              <p className="text-muted">
                Share your water source, flow profile, and application. We propose configuration, installation notes, and ROI logic.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="btn-primary">
                <Link href="/get-quote">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
                <Link href="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-7xl space-y-3 px-4 pb-16 text-sm text-muted">
        <div className="rounded-2xl border border-border bg-surface-2/40 p-4 flex flex-wrap gap-4 md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-ink font-semibold">Talk to us</p>
            <p>Email: <Link className="text-neon" href="mailto:info.digigo@gmail.com">info.digigo@gmail.com</Link></p>
            <p>Phone: 6356311101 / 02 / 03 / 04 / 05</p>
          </div>
          <div className="flex gap-2">
            <Button asChild size="sm">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
              <Link href="/projects">See Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
