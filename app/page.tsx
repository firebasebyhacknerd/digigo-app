import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Leaf, Factory, Home, Building, Wheat, ArrowRight, CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "DIGIGO | Electronic Water Conditioning for Hard Water & Scale Control",
  description:
    "E-SOFT Electro Hydro Enhancer by DIGIGO: the water softener alternative that is salt-free, chemical-free, zero reject water, zero maintenance. Built for residential, commercial, industrial, and agricultural hard water control.",
  openGraph: {
    title: "DIGIGO | Electronic Water Conditioning for Hard Water & Scale Control",
    description:
      "Experience soft-water behavior without salt, resin, or backwash. DIGIGO E-SOFT keeps pipelines, heat exchangers, and bathrooms scale-free while retaining minerals.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    type: "website",
  },
};

const highlights = [
  { title: "Zero Salt & Chemicals", desc: "No salt bags, no resin, no wastewater. Essential minerals stay in water.", icon: Leaf },
  { title: "Energy Efficient", desc: "Up to 30% energy savings by keeping heat transfer surfaces clean.", icon: Zap },
  { title: "Zero Maintenance", desc: "Set-and-forget electronics. No consumables or backwash cycles.", icon: Shield },
  { title: "Fast ROI", desc: "Payback in 12-18 months via soap, energy, and repair savings.", icon: TrendingUp },
];

const trust = [
  { label: "500+ Happy Clients", icon: Users },
  { label: "15+ Years Experience", icon: Award },
  { label: "50+ Government Projects", icon: Building },
  { label: "99% Retention Rate", icon: TrendingUp },
];

const applications = [
  { title: "Residential", href: "/applications/residential", icon: Home, desc: "Villas, apartments, and homes" },
  { title: "Commercial", href: "/applications/commercial", icon: Building, desc: "Hotels, malls, offices" },
  { title: "Industrial", href: "/applications/industrial", icon: Factory, desc: "Boilers, chillers, RO pre-treatment" },
  { title: "Agriculture", href: "/applications/agriculture", icon: Wheat, desc: "Irrigation, greenhouses, livestock" },
];

const benefits = [
  "Prevents new scale adhesion on pipes and equipment",
  "Gradually loosens existing scale deposits",
  "Maintains essential minerals in water",
  "Zero water waste - no backwash or regeneration",
  "Reduces soap and detergent usage",
  "Extends equipment lifespan",
  "Lowers energy consumption",
  "Safe for drinking and cooking",
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-neon/20 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-neon-bright/18 blur-3xl" />
        <div className="absolute top-12 right-1/3 h-64 w-64 rounded-full bg-neon-ice/20 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <Badge className="w-fit bg-gradient-to-r from-blue-700 to-cyan-500 text-white border-0 shadow-lg">
                Salt-Free - Chemical-Free - Zero Water Waste
              </Badge>
              <h1 className="text-5xl font-bold tracking-tight text-ink lg:text-6xl">
                Hard Water,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Zero Scale.
                </span>
                <span className="block text-2xl font-normal text-slate-700 lg:text-3xl">
                  Zero Salt. Zero Chemicals.
                </span>
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed max-w-2xl">
                DIGIGO E-SOFT uses programmed electronic signals to keep minerals from sticking to pipes and equipment. 
                No salt bags, no resin, no backwash. Just clean, efficient water flow.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/get-quote" className="flex items-center gap-2">
                    Get Free Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/technology">How It Works</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl bg-surface-2 p-8 shadow-2xl border border-border">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/60 to-transparent" />
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/machine-hero.webp"
                    alt="DIGIGO E-SOFT Electro Hydro Enhancer controller and induction coil installed on pipeline"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 backdrop-blur p-3 shadow-lg border border-slate-200">
                  <p className="text-xs font-medium text-slate-700">E-SOFT System: Controller + Induction Coil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => (
              <div key={item.label} className="text-center space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                  {React.createElement(item.icon, { className: "h-8 w-8" })}
                </div>
                <p className="text-lg font-semibold text-slate-900">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-surface-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Why E-SOFT Wins</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Superior performance without the environmental and maintenance costs of traditional softeners
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ title, desc, icon: Icon }) => (
              <Card key={title} className="border-0 bg-surface-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-slate-900">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Built for Every Application</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              One platform, tuned by pipe size and duty: the same science serves villas, hotels, hospitals, factories, and farms
            </p>
          </div>
          
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {applications.map(({ title, href, icon: Icon, desc }) => (
              <Card key={title} className="border-0 bg-gradient-to-br from-surface-3 to-surface-2 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="text-slate-900">{title}</CardTitle>
                      <p className="text-sm text-slate-600">{desc}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={href}>Explore {title}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20 bg-gradient-to-br from-surface-3 to-surface-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Complete Benefits</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need for scale-free water without the drawbacks of traditional systems
            </p>
          </div>
          
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-2xl bg-surface-2 p-4 shadow-lg">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-neon" />
                <p className="text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-2">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-12 text-center shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Salt-Free?</h2>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto">
              Talk to our technical team for a free consultation, sizing, and ROI analysis
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
                <Link href="/get-quote" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Talk to Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl bg-slate-900/80 p-8 border border-slate-700">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-100">Talk to Us</h3>
                <div className="space-y-2 text-slate-300">
                  <p>Email: <Link href="mailto:info.digigo@gmail.com" className="text-neon-ice hover:text-white">info.digigo@gmail.com</Link></p>
                  <p>Phone: <Link href="tel:+916356311101" className="text-neon-ice hover:text-white">+91 63563 11101</Link></p>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-800 hover:to-cyan-600 text-white shadow-xl">
                  <Link href="/get-quote">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
