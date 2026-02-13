import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeIndianRupee,
  BatteryCharging,
  Building2,
  Check,
  CheckCircle2,
  Clock3,
  Coins,
  Droplets,
  Factory,
  Home,
  Scale,
  Shield,
  Sparkles,
  Sprout,
  Star,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { clientLogos } from "@/content/client-logos";

const segmentCards = [
  {
    icon: Home,
    label: "For Homes",
    desc: "Protect skin, fittings, geysers, and washing machines.",
    href: "/for-homes",
  },
  {
    icon: Building2,
    label: "For Businesses",
    desc: "Reduce complaints, cleaning effort, and service calls.",
    href: "/for-businesses",
  },
  {
    icon: Factory,
    label: "For Factories",
    desc: "Control scale impact in utilities and process lines.",
    href: "/for-factories",
  },
  {
    icon: Sprout,
    label: "For Farms",
    desc: "Support cleaner irrigation flow and equipment reliability.",
    href: "/for-farms",
  },
];

const brandPillars = [
  {
    icon: Shield,
    title: "Made in India Engineering",
    desc: "Built by DIGIGO Technology with local support and on-ground service.",
  },
  {
    icon: Clock3,
    title: "30+ Year Design Life",
    desc: "Durable electronics platform designed for long operating cycles.",
  },
  {
    icon: Coins,
    title: "Zero Consumables",
    desc: "No salt bags, no resin replacement, no recurring consumable dependency.",
  },
  {
    icon: Sparkles,
    title: "Visible Scale-Reduction Impact",
    desc: "Designed to reduce sticking behavior and improve system cleanliness.",
  },
];

const impactMetrics = [
  {
    value: "0",
    unit: "Salt Refills",
    desc: "No monthly salt handling cycle.",
    icon: Coins,
  },
  {
    value: "0",
    unit: "Backwash Waste",
    desc: "No regular backwash discharge.",
    icon: Droplets,
  },
  {
    value: "30+",
    unit: "Year Life",
    desc: "Long design life for sustained value.",
    icon: Shield,
  },
  {
    value: "~2",
    unit: "Hour Install",
    desc: "Typical standard installation window.",
    icon: Clock3,
  },
];

const problemCards = [
  {
    title: "Scale on Taps, Tiles, and Glass",
    desc: "Daily cleaning load increases and finish quality drops.",
    icon: Droplets,
  },
  {
    title: "Higher Appliance Service Cost",
    desc: "Scale impact can reduce equipment efficiency and life.",
    icon: Wrench,
  },
  {
    title: "Salt and Maintenance Dependency",
    desc: "Recurring purchases and operating overhead keep growing.",
    icon: BatteryCharging,
  },
];

const howSteps = [
  {
    step: "1",
    title: "Coil Around Existing Pipe",
    desc: "Installed on the line without frequent invasive rework.",
  },
  {
    step: "2",
    title: "Controller Sends Programmed Signals",
    desc: "Signals interact with mineral behavior in flowing water.",
  },
  {
    step: "3",
    title: "Less Adhesive Mineral Behavior",
    desc: "Minerals are less likely to stick and form persistent scale layers.",
  },
];

const comparisonRows = [
  {
    label: "Recurring Consumables",
    saltSoftener: "Salt and periodic refills required",
    esoft: "No salt consumables",
  },
  {
    label: "Water Waste",
    saltSoftener: "Backwash cycle consumes water",
    esoft: "No backwash waste cycle",
  },
  {
    label: "Maintenance Effort",
    saltSoftener: "Ongoing handling and service dependence",
    esoft: "Low-operating maintenance model",
  },
  {
    label: "Lifecycle Positioning",
    saltSoftener: "Higher recurring ops overhead",
    esoft: "One-time system-led approach",
  },
];

const proofStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial Properties" },
  { value: "99%", label: "Retention" },
];

const testimonials = [
  {
    name: "Residential Client",
    meta: "Ahmedabad",
    quote:
      "The hard-water marks reduced and maintenance became easier to manage.",
  },
  {
    name: "Hospital Operations Team",
    meta: "Healthcare Segment",
    quote:
      "We saw better stability in water-side equipment operations over time.",
  },
  {
    name: "Manufacturing Unit",
    meta: "Industrial Segment",
    quote:
      "Scale-related interruptions became less frequent and costs were more predictable.",
  },
];

const pricing = [
  {
    icon: Home,
    title: "Home",
    range: "INR 35K - 50K",
    sub: "2-4 people",
  },
  {
    icon: Building2,
    title: "Business",
    range: "INR 1.2L - 2.5L",
    sub: "50-100 users",
  },
  {
    icon: Factory,
    title: "Factory",
    range: "INR 3L - 10L+",
    sub: "Industrial sizing",
  },
  {
    icon: Sprout,
    title: "Farm",
    range: "INR 80K - 1.5L",
    sub: "Per-acre estimation",
  },
];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-white">
      <section className="signal-wave-bg relative overflow-hidden py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Badge className="border border-blue-300 bg-white text-blue-800">
              DIGIGO E-SOFT Product Branding
            </Badge>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Stop Hard Water Damage
              <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-orange-500 bg-clip-text text-transparent">
                Without Salt, Chemicals, or Waste
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-slate-700">
              DIGIGO E-SOFT is a Made in India electronic water conditioning product
              engineered for scale-impact control across homes, businesses, factories,
              and farms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
                <Link href="/get-quote">
                  Get Technical Fit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">View Working Principle</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                "10,000+ Installations",
                "30+ Year Design Life",
                "Zero Consumables",
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  <Check className="h-4 w-4 text-green-600" />
                  {chip}
                </span>
              ))}
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                <Image
                  src="/made-in-india-logo.jpg"
                  alt="Made in India"
                  width={40}
                  height={40}
                  className="h-7 w-7 rounded-full object-cover"
                />
                Made in India
              </span>
            </div>
          </div>

          <div className="brand-ring rounded-3xl border border-blue-200 bg-white/90 p-7">
            <div className="overflow-hidden rounded-2xl border border-blue-100 bg-slate-50 p-6">
              <Image
                src="/machine-hero.webp"
                alt="DIGIGO E-SOFT machine and controller"
                width={900}
                height={700}
                priority
                className="mx-auto h-auto w-full max-w-md object-contain"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-900">
                Product Positioning
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Premium, no-consumable, long-life scale-impact control platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Core Brand Pillars
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Every page and sales message should reinforce these four product truths.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {brandPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <pillar.icon className="mb-4 h-9 w-9 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-slate-600">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <Badge className="border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              Product Impact
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
              Clear Value Story for Every Buyer
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              The product promise is operational clarity: no consumables, no backwash waste,
              and long-term deployment confidence.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.unit}
                className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5"
              >
                <metric.icon className="mb-3 h-6 w-6 text-cyan-300" />
                <p className="text-3xl font-bold text-cyan-300">
                  {metric.value}
                  <span className="ml-1 text-base font-semibold text-cyan-100">
                    {metric.unit}
                  </span>
                </p>
                <p className="mt-1 text-sm text-slate-300">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Hard Water Problem Statement
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Keep the problem visible. Buyers convert faster when the pain is clear.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 md:grid-cols-3">
              {problemCards.map((problem) => (
                <div
                  key={problem.title}
                  className="rounded-2xl border border-red-100 bg-white p-6"
                >
                  <problem.icon className="mb-3 h-7 w-7 text-red-500" />
                  <h3 className="text-lg font-bold text-slate-900">{problem.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{problem.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-blue-200 bg-white p-7">
              <h3 className="text-2xl font-bold text-slate-900">
                DIGIGO E-SOFT Brand Message
              </h3>
              <p className="mt-3 text-slate-700">
                We don&apos;t sell a generic softener. We position E-SOFT as an engineered
                solution that improves operating consistency without monthly maintenance habits.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {[
                  "One product identity across all customer segments",
                  "One promise language across hero, ads, and forms",
                  "One proof model: impact metrics + logo wall + project references",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              How the Product Works
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Keep this explanation simple and visual in every channel.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {howSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 to-cyan-600 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Proof of Work
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Brand trust grows when numbers and names are visible on the homepage.
            </p>
          </div>
          <div className="mb-12 grid gap-4 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center"
              >
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mb-12">
            <h3 className="mb-4 text-center text-2xl font-bold text-slate-900">
              Client Logo Wall
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <div
                  key={client.file}
                  className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3"
                  title={client.name}
                >
                  <Image
                    src={`/client-logos/${client.file}`}
                    alt={`${client.name} logo`}
                    width={160}
                    height={64}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-3 flex gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="italic text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              E-SOFT vs Salt Softener
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Keep this comparison visual and plain-language to speed up buying decisions.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
              <p>Decision Factor</p>
              <p>Salt Softener</p>
              <p>DIGIGO E-SOFT</p>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-slate-200 px-5 py-4 text-sm text-slate-700"
              >
                <p className="font-semibold text-slate-900">{row.label}</p>
                <p>{row.saltSoftener}</p>
                <p className="font-semibold text-blue-800">{row.esoft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Pricing Anchors by Segment
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Keep pricing transparent and positioned as one-time system investment.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <item.icon className="mx-auto mb-3 h-9 w-9 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.sub}</p>
                <p className="mt-3 text-2xl font-bold text-blue-700">{item.range}</p>
                <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs text-slate-600">
                  <BadgeIndianRupee className="h-3.5 w-3.5" />
                  Indicative range
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Ready to Position the Right E-SOFT Model?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-white/90">
            Share your site details and we will map a technical fit for your water line,
            usage profile, and application type.
          </p>
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/10 p-7 backdrop-blur-sm">
            <QuickQuoteForm />
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
              <Link href="/technology">
                Technical Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Talk to Product Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-green-600 bg-green-50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <Scale className="h-8 w-8 text-green-700" />
            <h3 className="text-3xl font-bold text-slate-900">
              30-Day Confidence Commitment
            </h3>
          </div>
          <p className="text-lg text-slate-700">
            If early operation does not align with expected site conditions, our team
            performs technical review and guided resolution.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900">Choose Your Application</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {segmentCards.map((segment) => (
              <Link
                key={segment.label}
                href={segment.href}
                className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <segment.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h4 className="text-xl font-bold text-slate-900">{segment.label}</h4>
                <p className="mt-2 text-sm text-slate-600">{segment.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild variant="ghost" className="text-blue-700 hover:bg-blue-50">
              <Link href="/clients">
                View More Client Proof
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
