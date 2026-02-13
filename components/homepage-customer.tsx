import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Factory,
  Flame,
  Hospital,
  Hotel,
  Leaf,
  TrendingDown,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { Explainer3D } from "@/components/explainer-3d";
import { clientLogos } from "@/content/client-logos";

const proofStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial and Industrial Sites" },
  { value: "99%", label: "Retention" },
];

const industryCards = [
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Control scale impact in utility loops, boilers, and processing support lines.",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    text: "Improve reliability in critical water use zones with a low-handling model.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    text: "Reduce spotting and hard-water complaints with a cleaner operations profile.",
  },
  {
    icon: Building2,
    title: "Commercial Assets",
    text: "Support predictable maintenance and lower recurring softener management effort.",
  },
];

const businessImpact = [
  {
    icon: Flame,
    heading: "Heat Transfer Risk",
    point: "Scale on hot surfaces can increase energy penalty and process instability.",
  },
  {
    icon: Wrench,
    heading: "Maintenance Burden",
    point: "Recurring intervention cycles increase downtime pressure and manpower load.",
  },
  {
    icon: CircleDollarSign,
    heading: "Recurring OPEX",
    point: "Salt and consumable logistics create ongoing cost drag month after month.",
  },
];

const workingSteps = [
  {
    step: "01",
    title: "Pipe-Side Coil Integration",
    desc: "The induction coil is installed around the target water line segment.",
  },
  {
    step: "02",
    title: "Programmed Signal Application",
    desc: "Controller sends calibrated electronic patterns through the coil field.",
  },
  {
    step: "03",
    title: "Mineral Adhesion Reduction",
    desc: "Mineral behavior is altered to lower sticking tendency in system surfaces.",
  },
  {
    step: "04",
    title: "Operational Outcome",
    desc: "Reduced scale pressure supports reliability, cleaner lines, and lower handling.",
  },
];

const comparisonRows = [
  {
    factor: "Consumables",
    classic: "Salt refill cycle required",
    esoft: "No salt consumables",
  },
  {
    factor: "Water Waste",
    classic: "Backwash discharge cycle",
    esoft: "No regular backwash waste",
  },
  {
    factor: "Maintenance Rhythm",
    classic: "Frequent handling and service",
    esoft: "Low routine handling model",
  },
  {
    factor: "Lifecycle Position",
    classic: "Higher recurring management",
    esoft: "Long-life electronic platform",
  },
];

const tickerLogos = [...clientLogos, ...clientLogos];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-[#f2f8ff] py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 animate-float rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 animate-float rounded-full bg-blue-200/35 blur-3xl [animation-delay:0.4s]" />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-slide-in-left">
            <Badge className="border border-blue-200 bg-white text-blue-700">
              Professional Water Softener Platform
            </Badge>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
              Hard Water Impact
              <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                Under Operational Control
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-xl text-slate-700">
              DIGIGO E-SOFT is engineered for real-world utility performance: no salt
              consumables, no backwash waste, and a 30+ year design-life approach.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Made in India Engineering",
                "3D Signal-Flow Visualization",
                "Operational ROI Framing",
                "Industrial + Commercial Deployments",
              ].map((point) => (
                <p
                  key={point}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  {point}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
                <Link href="/get-quote">
                  Get Site Impact Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/technology">See Full Technical Page</Link>
              </Button>
            </div>
          </div>

          <div className="animate-slide-in-right rounded-3xl border border-blue-100 bg-white p-5 shadow-xl">
            <div className="rounded-2xl border border-blue-100 bg-slate-50 p-3">
              <Explainer3D />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="text-sm font-semibold text-blue-900">DIGIGO E-SOFT 3D Explanation</p>
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-700">
                <Clock3 className="h-3.5 w-3.5" />
                Live Animated View
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Why the Industry Cares About Hard Water
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              In water softener projects, decisions are made on operations impact, not generic features.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {businessImpact.map((impact) => (
              <div
                key={impact.heading}
                className="animate-fade-in rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <impact.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{impact.heading}</h3>
                <p className="mt-2 text-slate-600">{impact.point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <Badge className="border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
              3D Working Explanation
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
              How DIGIGO E-SOFT Works in the Line
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-300">
              This section gives a professional, easy-to-understand model for technical and non-technical buyers.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-4">
              <Explainer3D />
            </div>
            <div className="space-y-4">
              {workingSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-bold text-cyan-200">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-1 text-slate-300">{step.desc}</p>
                    </div>
                  </div>
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
              Built for High-Impact Sectors
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Deployment strategy differs by use-case, but brand promise remains consistent.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industryCards.map((card) => (
              <div
                key={card.title}
                className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <card.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              E-SOFT vs Traditional Salt Softener
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Professional buyer comparison built around maintenance, waste, and lifecycle.
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
                key={row.factor}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-slate-200 px-5 py-4 text-sm text-slate-700"
              >
                <p className="font-semibold text-slate-900">{row.factor}</p>
                <p>{row.classic}</p>
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
              Proof of Deployment
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Real brand confidence in this category comes from visible field references.
            </p>
          </div>

          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center"
              >
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
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

      <section className="bg-gradient-to-br from-blue-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Get a Professional Impact Plan for Your Site
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-white/90">
            Share your current hard-water pain points. Our team will map a fit based on line profile, usage, and segment.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/30 bg-slate-900/30 p-7 backdrop-blur">
            <QuickQuoteForm />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
              <Link href="/clients">
                View Client Deployments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Talk to Technical Team</Link>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/90">
            <TrendingDown className="h-4 w-4" />
            Focus: lower scale burden, lower maintenance drag, stronger utility reliability
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/90">
            <Leaf className="h-4 w-4" />
            No backwash waste cycle
          </p>
        </div>
      </section>
    </main>
  );
}
