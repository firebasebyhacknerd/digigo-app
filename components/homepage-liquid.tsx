"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Coins,
  Droplets,
  Factory,
  Home,
  Building,
  Leaf,
  Shield,
  Wrench,
  Wheat,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const problemCards = [
  {
    icon: Coins,
    title: "Expensive and Wasteful",
    desc: "Salt systems waste water during regeneration and require ongoing salt purchases.",
  },
  {
    icon: Wrench,
    title: "High Maintenance",
    desc: "Frequent refills, periodic service, and avoidable downtime increase operating burden.",
  },
  {
    icon: Droplets,
    title: "Mineral Removal",
    desc: "Conventional ion exchange removes naturally present minerals many users want to retain.",
  },
];

type FeatureTone = "laser" | "volt" | "electric" | "cyan";
type FeatureCard = {
  icon: typeof Leaf;
  title: string;
  desc: string;
  tone: FeatureTone;
};

const featureCards: FeatureCard[] = [
  {
    icon: Leaf,
    title: "Zero Salt and Chemicals",
    desc: "No consumables and no backwash discharge. Minerals remain in water.",
    tone: "laser",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    desc: "Cleaner heat-transfer surfaces can reduce avoidable energy losses.",
    tone: "volt",
  },
  {
    icon: Shield,
    title: "Zero Consumable Maintenance",
    desc: "Solid-state electronics with no resin replacement or salt handling.",
    tone: "electric",
  },
  {
    icon: Droplets,
    title: "Minerals Preserved",
    desc: "Changes crystal behavior to reduce scale adhesion without ion exchange.",
    tone: "cyan",
  },
];

const toneClasses = {
  laser: {
    icon: "text-laser-green",
    iconBg: "bg-laser-green/20",
    border: "hover:border-laser-green/60",
  },
  volt: {
    icon: "text-volt-yellow",
    iconBg: "bg-volt-yellow/20",
    border: "hover:border-volt-yellow/60",
  },
  electric: {
    icon: "text-electric-blue",
    iconBg: "bg-electric-blue/20",
    border: "hover:border-electric-blue/60",
  },
  cyan: {
    icon: "text-cyan-burst",
    iconBg: "bg-cyan-burst/20",
    border: "hover:border-cyan-burst/60",
  },
} as const;

const applications = [
  { icon: Home, title: "Residential", href: "/applications/residential" },
  { icon: Building, title: "Commercial", href: "/applications/commercial" },
  { icon: Factory, title: "Industrial", href: "/applications/industrial" },
  { icon: Wheat, title: "Agriculture", href: "/applications/agriculture" },
];

export function HomePageLiquid() {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-deep-ocean">
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center"
      >
        <div
          className="absolute inset-0 animate-gradient-flow bg-gradient-mesh opacity-40"
          style={{ backgroundSize: "200% 200%" }}
          aria-hidden
        />

        <div
          className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-electric-blue/30 blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          aria-hidden
        />
        <div
          className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-burst/20 blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          aria-hidden
        />
        <div
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-glow/20 blur-3xl"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)` }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <Badge className="w-fit animate-fade-in-up border-0 bg-gradient-hydro px-6 py-2 text-sm text-white shadow-glow-blue">
              <Droplets className="mr-2 h-4 w-4" />
              6th Generation Water Conditioning Technology
            </Badge>

            <div className="space-y-4">
              <h1 className="font-display text-5xl font-extrabold leading-none text-steel-50 sm:text-6xl lg:text-8xl">
                <span className="block animate-fade-in-up [animation-delay:0.1s]">
                  Hard Water,
                </span>
                <span className="block animate-fade-in-up bg-gradient-hydro bg-clip-text text-transparent [animation-delay:0.2s]">
                  Zero Scale.
                </span>
                <span className="mt-4 block animate-fade-in-up text-3xl font-normal text-steel-200 [animation-delay:0.3s] lg:text-5xl">
                  Zero Salt. Zero Chemicals. Zero Waste.
                </span>
              </h1>
            </div>

            <p className="max-w-2xl animate-fade-in-up text-lg leading-relaxed text-steel-200 [animation-delay:0.4s] lg:text-xl">
              E-SOFT uses programmed electronic signals to keep minerals from
              sticking to pipes and equipment. No salt bags, no resin, no
              backwash, just clean and efficient water flow for 30+ years.
            </p>

            <div className="flex animate-fade-in-up flex-col gap-4 [animation-delay:0.5s] sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group border-0 bg-gradient-hydro px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:shadow-glow-cyan"
              >
                <Link href="/get-quote" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-steel-600 bg-steel-900/50 px-8 py-6 text-lg text-steel-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-burst hover:bg-steel-800"
              >
                <Link href="/technology">How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { label: "10,000+", sub: "Installations" },
                { label: "30+ Years", sub: "Lifespan" },
                { label: "Zero", sub: "Consumables" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="h-12 w-1 rounded-full bg-gradient-hydro" />
                  <div>
                    <div className="font-display text-2xl font-bold text-steel-50">
                      {stat.label}
                    </div>
                    <div className="text-sm text-steel-400">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up [animation-delay:0.3s]">
            <div className="relative rounded-3xl border border-steel-700/50 bg-steel-800/30 p-8 shadow-glass backdrop-blur-xl">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-hydro opacity-20 blur-2xl"
                aria-hidden
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-steel-700/50 bg-gradient-to-br from-steel-800 to-steel-900">
                <div className="absolute inset-0 opacity-20" aria-hidden>
                  <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_12%,rgba(46,94,255,0.2)_12.5%,rgba(46,94,255,0.2)_14%,transparent_14%,transparent_62%,rgba(46,94,255,0.2)_62.5%,rgba(46,94,255,0.2)_64%,transparent_64%)] bg-[length:80px_80px]" />
                </div>
                <Image
                  src="/machine-hero.webp"
                  alt="E-SOFT controller and coil"
                  fill
                  priority
                  className="object-contain p-8"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "30+ Year Lifespan" },
                  { icon: Zap, label: "Up to 30% Energy Savings" },
                  { icon: Leaf, label: "Zero Waste Discharge" },
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 rounded-full border border-steel-700/50 bg-steel-900/50 px-4 py-2 text-sm text-steel-200 backdrop-blur-sm"
                  >
                    <feature.icon className="h-4 w-4 text-cyan-burst" />
                    {feature.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-steel-600 p-2">
            <div className="h-3 w-1 animate-pulse rounded-full bg-cyan-burst" />
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-deep-ocean to-midnight-blue py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 space-y-6 text-center">
            <Badge className="border border-solar-orange/30 bg-solar-orange/20 text-solar-orange">
              The Challenge
            </Badge>
            <h2 className="font-display text-4xl font-bold text-steel-50 lg:text-6xl">
              Traditional Softeners Are{" "}
              <span className="text-solar-orange">Broken</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problemCards.map((problem) => (
              <div
                key={problem.title}
                className="group relative rounded-2xl border border-steel-700/50 bg-steel-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-solar-orange/50"
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-energy opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                  aria-hidden
                />
                <div className="relative space-y-4">
                  <problem.icon className="h-12 w-12 text-solar-orange" />
                  <h3 className="font-display text-2xl font-bold text-steel-50">
                    {problem.title}
                  </h3>
                  <p className="text-steel-300">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 rounded-full bg-gradient-hydro px-8 py-4 text-lg font-semibold text-white shadow-glow-blue">
              <CheckCircle2 className="h-6 w-6" />
              E-SOFT Solves This Without Salt or Waste
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-midnight-blue py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 space-y-6 text-center">
            <Badge className="border border-cyan-burst/30 bg-cyan-burst/20 text-cyan-burst">
              Technology
            </Badge>
            <h2 className="font-display text-4xl font-bold text-steel-50 lg:text-6xl">
              The{" "}
              <span className="bg-gradient-hydro bg-clip-text text-transparent">
                E-SOFT
              </span>{" "}
              Difference
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-steel-300">
              Electronic water conditioning engineered for reliability and scale
              control across applications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => {
              const tone = toneClasses[feature.tone];
              return (
                <div
                  key={feature.title}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-steel-700/50 bg-steel-800/30 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2",
                    tone.border
                  )}
                >
                  <div
                    className="absolute inset-0 bg-gradient-hydro opacity-0 transition-opacity duration-500 group-hover:opacity-10"
                    aria-hidden
                  />
                  <div className="relative space-y-4">
                    <div
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl shadow-glow-soft",
                        tone.iconBg
                      )}
                    >
                      <feature.icon className={cn("h-8 w-8", tone.icon)} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-steel-50 transition-colors group-hover:text-cyan-burst">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-steel-300">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-midnight-blue to-deep-ocean py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 space-y-6 text-center">
            <Badge className="border border-plasma-pink/30 bg-plasma-pink/20 text-plasma-pink">
              Applications
            </Badge>
            <h2 className="font-display text-4xl font-bold text-steel-50 lg:text-6xl">
              Engineered for Every Industry
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <Link
                key={application.title}
                href={application.href}
                className="group relative rounded-2xl border-2 border-steel-700/50 bg-steel-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-burst hover:shadow-glow-cyan"
              >
                <div className="space-y-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-hydro shadow-glow-blue transition-transform duration-300 group-hover:scale-110">
                    <application.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-steel-50 transition-colors group-hover:text-cyan-burst">
                    {application.title}
                  </h3>
                  <div className="flex items-center gap-2 text-steel-400 transition-colors group-hover:text-cyan-burst">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-hydro py-28">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute inset-0 animate-gradient-flow bg-[linear-gradient(30deg,transparent_12%,rgba(255,255,255,0.2)_12.5%,rgba(255,255,255,0.2)_14%,transparent_14%,transparent_62%,rgba(255,255,255,0.2)_62.5%,rgba(255,255,255,0.2)_64%,transparent_64%)] bg-[length:80px_80px]" />
        </div>
        <div className="relative mx-auto max-w-5xl space-y-8 px-4 text-center">
          <h2 className="font-display text-5xl font-extrabold leading-tight text-white lg:text-7xl">
            Ready to Stop Scale?
          </h2>
          <p className="mx-auto max-w-3xl text-2xl text-white/90">
            Get a tailored quote based on your water profile, pipe size, and
            application.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-10 py-7 text-xl font-bold text-electric-blue shadow-xl hover:bg-steel-50"
            >
              <Link href="/get-quote">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent px-10 py-7 text-xl text-white backdrop-blur-sm hover:bg-white/10"
            >
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
