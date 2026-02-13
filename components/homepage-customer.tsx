import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeIndianRupee,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Clock3,
  Coins,
  Droplets,
  Factory,
  Hospital,
  Hotel,
  Leaf,
  Shield,
  Sprout,
  Wrench,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { clientLogos } from "@/content/client-logos";

const operationAlerts = [
  "Scale deposition in heat-transfer systems",
  "Recurring salt and consumable dependency",
  "Backwash-related water and utility waste",
  "Maintenance shutdown pressure in critical lines",
];

const industryImpactCards = [
  {
    icon: Factory,
    title: "Manufacturing Plants",
    impact: "Reduce scale-related fouling pressure in utility lines.",
  },
  {
    icon: Hospital,
    title: "Hospitals",
    impact: "Improve reliability for laundry, hot-water, and utility pipelines.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    impact: "Lower hard-water spotting and equipment service frequency.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    impact: "Improve operational consistency and maintenance planning.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    impact: "Support cleaner flow behavior in irrigation infrastructure.",
  },
  {
    icon: Building2,
    title: "Institutions & Government",
    impact: "Scale-impact control without monthly consumable logistics.",
  },
];

const impactMetrics = [
  {
    icon: Zap,
    value: "Up to 20-30%",
    label: "Heat-Efficiency Penalty",
    note: "Scaled heat surfaces can increase energy burden significantly.",
  },
  {
    icon: Coins,
    value: "Recurring",
    label: "Consumable Cost Cycle",
    note: "Salt systems add monthly OPEX through refills and handling.",
  },
  {
    icon: Droplets,
    value: "0",
    label: "Backwash Waste",
    note: "E-SOFT model avoids regular backwash water discharge cycles.",
  },
  {
    icon: Shield,
    value: "30+ Years",
    label: "Design Life",
    note: "Long-life electronics architecture for sustained deployments.",
  },
];

const processFlow = [
  {
    step: "01",
    title: "Coil on Existing Line",
    desc: "Installed on target line segment without consumable tank dependency.",
  },
  {
    step: "02",
    title: "Programmed Signal Control",
    desc: "Controller applies tuned electronic behavior through the coil assembly.",
  },
  {
    step: "03",
    title: "Lower Adhesion Mineral Behavior",
    desc: "Designed to reduce sticking tendency and support cleaner downstream operation.",
  },
  {
    step: "04",
    title: "Operations-Focused Impact",
    desc: "Positioned to reduce maintenance overhead and improve utility consistency.",
  },
];

const comparisonRows = [
  {
    factor: "Monthly Operating Dependency",
    saltSoftener: "Recurring salt procurement and refill process",
    esoft: "No salt consumable cycle",
  },
  {
    factor: "Water Waste Profile",
    saltSoftener: "Backwash discharge required",
    esoft: "No regular backwash cycle",
  },
  {
    factor: "Maintenance Burden",
    saltSoftener: "Frequent handling and service activity",
    esoft: "Lower routine handling model",
  },
  {
    factor: "Plant-Wide Scalability",
    saltSoftener: "Higher infra and consumable management complexity",
    esoft: "Signal-led deployment across multiple segments",
  },
];

const proofStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial and Industrial Sites" },
  { value: "99%", label: "Retention" },
];

const roiBlocks = [
  {
    icon: BatteryCharging,
    title: "Energy",
    points: [
      "Lower heat-transfer penalty risk from scale layers",
      "Better utility performance consistency",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance",
    points: [
      "Reduced consumable handling overhead",
      "Lower intervention frequency pressure",
    ],
  },
  {
    icon: BadgeIndianRupee,
    title: "Cost Planning",
    points: [
      "Shift from recurring salt spend to one-time system model",
      "More predictable long-horizon operations planning",
    ],
  },
];

const segmentLinks = [
  {
    icon: Building2,
    title: "For Businesses",
    href: "/for-businesses",
  },
  {
    icon: Factory,
    title: "For Factories",
    href: "/for-factories",
  },
  {
    icon: Hospital,
    title: "For Hospitals",
    href: "/applications/hospitals",
  },
  {
    icon: Sprout,
    title: "For Farms",
    href: "/for-farms",
  },
];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white lg:py-24">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Badge className="border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              Water Softener Industry Impact Design
            </Badge>
            <h1 className="mt-5 text-5xl font-extrabold leading-tight lg:text-7xl">
              Industrial Hard Water Impact
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-200 to-orange-300 bg-clip-text text-transparent">
                Controlled with DIGIGO E-SOFT
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-slate-200">
              Built for plants, hospitals, hotels, and commercial utilities where scale
              control directly affects reliability, cost, and service quality.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {operationAlerts.map((alert) => (
                <p
                  key={alert}
                  className="inline-flex items-start gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-400" />
                  {alert}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                <Link href="/get-quote">
                  Get Site Impact Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-500 text-white hover:bg-slate-900">
                <Link href="/technology">See Technical Working</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              {[
                "Made in India",
                "10,000+ Installations",
                "30+ Year Design Life",
                "Zero Backwash Waste",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/70 px-4 py-2 text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Impact Console
            </p>
            <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-4">
              <Image
                src="/machine-hero.webp"
                alt="DIGIGO E-SOFT product unit"
                width={900}
                height={700}
                priority
                className="mx-auto h-auto w-full max-w-sm object-contain"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { k: "Consumables", v: "None" },
                { k: "Backwash", v: "None" },
                { k: "Deployment", v: "Pipe-Side" },
                { k: "Lifespan", v: "30+ Years" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-3"
                >
                  <p className="text-xs uppercase tracking-wide text-slate-400">{item.k}</p>
                  <p className="mt-1 text-base font-semibold text-white">{item.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-200">
              <Image
                src="/made-in-india-logo.jpg"
                alt="Made in India logo"
                width={32}
                height={32}
                className="h-7 w-7 rounded-full object-cover"
              />
              DIGIGO Technology, India
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Hard Water Impact Across Critical Sectors
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              The design focus is operational impact, not generic lifestyle positioning.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryImpactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <card.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 max-w-3xl">
            <Badge className="border border-cyan-400/40 bg-cyan-400/10 text-cyan-200">
              Operational Impact Dashboard
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
              Industry-Relevant Impact Framing
            </h2>
            <p className="mt-3 text-lg text-slate-300">
              Present measurable operations language to buyers: energy, maintenance,
              water waste, and lifecycle.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5"
              >
                <metric.icon className="mb-3 h-6 w-6 text-cyan-300" />
                <p className="text-3xl font-bold text-cyan-200">{metric.value}</p>
                <p className="mt-1 text-base font-semibold text-white">{metric.label}</p>
                <p className="mt-1 text-sm text-slate-300">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Where E-SOFT Sits in the Water Softener Workflow
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Keep this flow visual on homepage so decision-makers understand placement fast.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {processFlow.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <span className="inline-flex rounded-full bg-blue-700 px-3 py-1 text-xs font-bold tracking-wide text-white">
                  {step.step}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              E-SOFT vs Conventional Salt Softener
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Show this matrix early to position product category difference clearly.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
              <p>Impact Factor</p>
              <p>Salt Softener</p>
              <p>DIGIGO E-SOFT</p>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.factor}
                className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-slate-200 px-5 py-4 text-sm text-slate-700"
              >
                <p className="font-semibold text-slate-900">{row.factor}</p>
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
              Proof of Work
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Buyer confidence in this category depends on live deployments and visible references.
            </p>
          </div>
          <div className="mb-10 grid gap-4 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <h3 className="mb-4 text-center text-2xl font-bold text-slate-900">
              Client Logos from Live Deployments
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
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              ROI Conversation Framework
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Use these three value buckets in calls, proposals, and homepage copy.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {roiBlocks.map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <block.icon className="mb-3 h-8 w-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {segmentLinks.map((segment) => (
              <Link
                key={segment.title}
                href={segment.href}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-blue-900 transition hover:-translate-y-0.5 hover:border-blue-300"
              >
                <segment.icon className="mb-2 h-7 w-7" />
                <p className="text-lg font-bold">{segment.title}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Need an Industry-Focused Water Softener Impact Plan?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-white/90">
            Share your line profile, water quality context, and application details. We
            will map an E-SOFT deployment path aligned to your operations.
          </p>
          <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/10 p-7 backdrop-blur-sm">
            <QuickQuoteForm />
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
              <Link href="/clients">
                See More Deployments
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Talk to Industry Team</Link>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white/90">
            <Clock3 className="h-4 w-4" />
            Typical response window: within 2 business hours
          </p>
        </div>
      </section>

      <section className="border-t-4 border-green-600 bg-green-50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <Leaf className="h-8 w-8 text-green-700" />
            <h3 className="text-3xl font-bold text-slate-900">
              30-Day Confidence Commitment
            </h3>
          </div>
          <p className="text-lg text-slate-700">
            If field performance does not align with expected impact under reviewed site
            conditions, our technical team supports guided corrective action.
          </p>
        </div>
      </section>
    </main>
  );
}
