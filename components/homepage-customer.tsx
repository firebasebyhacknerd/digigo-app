import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Droplets,
  Factory,
  HandCoins,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Sprout,
  Wrench,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { Explainer3D } from "@/components/explainer-3d";
import { clientLogos } from "@/content/client-logos";

const heroHighlights = [
  "No salt consumables",
  "No backwash wastewater",
  "30+ year design-life platform",
  "Made in India engineering",
];

const solutionTracks = [
  {
    icon: Building2,
    title: "Homes and Residential",
    text: "For apartments, villas, and societies that need cleaner fixtures and lower appliance scaling.",
    href: "/for-homes",
  },
  {
    icon: Factory,
    title: "Commercial and Industrial",
    text: "For hotels, hospitals, and plants that need reliable line performance with lower maintenance burden.",
    href: "/for-factories",
  },
  {
    icon: Sprout,
    title: "Agriculture and Irrigation",
    text: "For farms and irrigation networks where hard-water deposits affect flow consistency.",
    href: "/for-farms",
  },
];

const impactCards = [
  {
    icon: Zap,
    value: "Up to 20-30%",
    label: "Potential Heat-Efficiency Penalty",
    note: "Scale on hot surfaces can reduce heat-transfer efficiency.",
  },
  {
    icon: Wrench,
    value: "Recurring",
    label: "Maintenance Pressure",
    note: "Hard-water deposits can increase service and cleaning intervals.",
  },
  {
    icon: BadgeIndianRupee,
    value: "Monthly",
    label: "Salt OPEX Cycle",
    note: "Traditional systems typically require recurring consumables.",
  },
  {
    icon: ShieldCheck,
    value: "30+ Years",
    label: "Platform Design Life",
    note: "Long-horizon electronic system approach for operations.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Coil Installed on Existing Pipe",
    text: "The induction coil is mounted on the target line without heavy civil changes.",
  },
  {
    step: "02",
    title: "Controller Applies Programmed Signals",
    text: "Electronic patterns are delivered to influence mineral behavior in flow.",
  },
  {
    step: "03",
    title: "Lower Adhesion Tendency",
    text: "Mineral sticking tendency is reduced to support cleaner operating surfaces.",
  },
  {
    step: "04",
    title: "Improved Operational Profile",
    text: "Teams target lower handling overhead and more predictable utility maintenance.",
  },
];

const expectedOutcomes = [
  {
    title: "Weeks 1-4",
    text: "Teams monitor spotting trend, fixture behavior, and immediate maintenance observations.",
  },
  {
    title: "30-90 Days",
    text: "Site owners review cleaning frequency, line condition, and recurring intervention patterns.",
  },
  {
    title: "Long Term",
    text: "Value is driven by reduced recurring management and stable utility operations.",
  },
];

const comparisonRows = [
  {
    factor: "Consumables",
    classic: "Salt refill cycle required",
    esoft: "No salt consumable routine",
  },
  {
    factor: "Water Waste",
    classic: "Backwash discharge process",
    esoft: "No regular backwash cycle",
  },
  {
    factor: "Maintenance Rhythm",
    classic: "Frequent manual handling and servicing",
    esoft: "Lower routine handling model",
  },
  {
    factor: "Lifecycle Profile",
    classic: "Recurring OPEX heavy profile",
    esoft: "One-time platform-led profile",
  },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "No Salt Consumables",
    text: "No recurring salt purchase, storage, and refill cycles.",
  },
  {
    icon: Droplets,
    title: "No Backwash Waste",
    text: "No regular backwash discharge process in normal operation.",
  },
  {
    icon: HandCoins,
    title: "Lower Handling Overhead",
    text: "Built for low-maintenance operation with fewer routine interventions.",
  },
  {
    icon: Leaf,
    title: "Made in India",
    text: "Engineered, manufactured, and supported in India.",
  },
];

const proofStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial and Industrial Sites" },
  { value: "99%", label: "Retention" },
];

const faqSnippets = [
  {
    q: "Will this reduce TDS?",
    a: "No. E-SOFT is positioned for scale-impact control, not TDS reduction.",
  },
  {
    q: "Is it only for homes?",
    a: "No. Deployments span residential, commercial, industrial, and agriculture segments.",
  },
  {
    q: "What is the recurring maintenance model?",
    a: "The platform is designed around low routine handling without salt refills.",
  },
];

const tickerLogos = [...clientLogos, ...clientLogos];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-24 -top-10 h-80 w-80 animate-float rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-12 h-96 w-96 animate-float rounded-full bg-blue-200/35 blur-3xl [animation-delay:0.4s]" />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-slide-in-left">
            <Badge className="border border-blue-200 bg-white text-blue-700">
              Industrial-Grade Electronic Water Conditioning
            </Badge>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Stop Hard Water Scale
              <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                Without Salt or Wastewater
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-slate-700 lg:text-xl">
              DIGIGO E-SOFT helps homes, businesses, and industry control hard-water
              impact with a modern, low-handling operating model.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <p
                  key={item}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-700" />
                  {item}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
                <Link href="/get-quote">
                  Get Free Site Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/technology">See 3D Working</Link>
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 font-medium text-slate-700">
                <PhoneCall className="h-4 w-4 text-blue-700" />
                Talk to Expert: +91 63563 11101
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700">
                <Clock3 className="h-4 w-4 text-slate-500" />
                Fast Quote Response
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right space-y-5">
            <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-4 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50">
                <Image
                  src="/machine-hero.webp"
                  alt="DIGIGO E-SOFT machine"
                  width={820}
                  height={460}
                  className="h-56 w-full object-contain p-4 lg:h-64"
                  priority
                />
                <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                  DIGIGO E-SOFT
                </span>
                <span className="absolute bottom-3 right-3 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Salt-Free System
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm font-semibold text-slate-800">Indian Product, Industrial Positioning</p>
                <Image
                  src="/made-in-india-logo.jpg"
                  alt="Made in India"
                  width={80}
                  height={42}
                  className="h-9 w-auto"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-xl">
              <Explainer3D />
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <p className="text-sm font-semibold text-blue-900">3D Signal-Flow Product Explanation</p>
                <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700">
                  <Clock3 className="h-3.5 w-3.5" />
                  Animated
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center"
              >
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Industry Impact Dashboard
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Water softener decisions are made on maintenance burden, energy impact, and recurring costs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <item.icon className="mb-3 h-7 w-7 text-blue-700" />
                <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-base font-semibold text-slate-800">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Badge className="border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
              Product Explanation
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
              3D Working with Step-by-Step Logic
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Teams can understand how the system is installed, how signals are applied,
              and where operations value is expected.
            </p>

            <div className="mt-6 rounded-3xl border border-slate-700 bg-slate-900/80 p-4">
              <Explainer3D />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-bold tracking-wide text-cyan-200">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid gap-3 sm:grid-cols-3">
              {expectedOutcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4"
                >
                  <p className="text-sm font-semibold text-cyan-200">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              DIGIGO E-SOFT vs Traditional Salt Softener
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.05fr_1fr_1fr] bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
              <p>Decision Factor</p>
              <p>Salt Softener</p>
              <p>DIGIGO E-SOFT</p>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.factor}
                className="grid grid-cols-[1.05fr_1fr_1fr] border-t border-slate-200 px-5 py-4 text-sm text-slate-700"
              >
                <p className="font-semibold text-slate-900">{row.factor}</p>
                <p>{row.classic}</p>
                <p className="font-semibold text-blue-800">{row.esoft}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Choose Your Solution Track
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Choose the right solution path based on your segment and water usage.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {solutionTracks.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-6"
              >
                <track.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{track.title}</h3>
                <p className="mt-2 text-slate-600">{track.text}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  Explore Track
                  <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Proof of Deployments
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Customer logos create real proof for operations and procurement teams.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4">
            <div className="flex w-max animate-ticker gap-3">
              {tickerLogos.map((client, idx) => (
                <div
                  key={`${client.file}-${idx}`}
                  className="flex h-24 w-44 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3"
                >
                  <Image
                    src={`/client-logos/${client.file}`}
                    alt={`${client.name} logo`}
                    width={150}
                    height={60}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <Badge className="border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
              Why Teams Choose DIGIGO E-SOFT
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">Operational Trust Pillars</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5"
              >
                <pillar.icon className="mb-3 h-7 w-7 text-cyan-300" />
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Common Buyer Questions
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {faqSnippets.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <CircleHelp className="h-5 w-5 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.q}</h3>
                <p className="mt-2 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
          <h2 className="text-4xl font-bold lg:text-5xl">
                Get a Site-Specific Water Treatment Plan
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-white/90">
                Share your hard-water challenges and line details. Our team will recommend the right E-SOFT setup for your site.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/35 bg-white/10 px-4 py-3">
                <Image
                  src="/made-in-india-logo.jpg"
                  alt="Made in India"
                  width={84}
                  height={42}
                  className="h-10 w-auto rounded"
                />
                <p className="text-sm text-white/90">
                  Built in India for Indian water conditions.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/30 bg-slate-900/30 p-7 backdrop-blur">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
