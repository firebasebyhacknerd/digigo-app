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
  Gauge,
  HandCoins,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Sparkles,
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
  "Luxury water experience",
  "No salt consumables",
  "No backwash wastewater",
  "30+ year design-life platform",
];

const trustStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial and Industrial Sites" },
  { value: "99%", label: "Customer Retention" },
];

const luxuryPositioning = [
  {
    icon: Sparkles,
    title: "Luxury Living Signal",
    text: "Premium properties now treat water quality as part of comfort and lifestyle experience.",
  },
  {
    icon: ShieldCheck,
    title: "Asset Protection Essential",
    text: "Scale control supports cleaner fixtures, utility lines, and hot-water equipment.",
  },
  {
    icon: Building2,
    title: "Default for Modern Projects",
    text: "Many serious developers and operators now treat scale control as a baseline utility layer.",
  },
  {
    icon: HandCoins,
    title: "Premium Feel, Lower Burden",
    text: "No salt logistics and no backwash routine support a cleaner operations model.",
  },
];

const luxuryVisuals = [
  {
    title: "Premium Home Lifestyle",
    image: "/digigostore-assets/home-lifestyle.jpg",
  },
  {
    title: "Domestic Grade E-SOFT",
    image: "/digigostore-assets/domestic-grade.jpeg",
  },
  {
    title: "Industrial Grade E-SOFT",
    image: "/digigostore-assets/industrial-grade.jpeg",
  },
];

const painCards = [
  {
    icon: Zap,
    title: "Heat Transfer Penalty",
    value: "Up to 20-30%",
    text: "Scale formation on hot surfaces can reduce energy efficiency in utilities.",
  },
  {
    icon: Wrench,
    title: "Service Burden",
    value: "Recurring",
    text: "Hard-water deposits can increase maintenance interventions and cleaning cycles.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Salt OPEX",
    value: "Monthly",
    text: "Conventional softeners add recurring salt purchase, handling, and storage cost.",
  },
  {
    icon: Gauge,
    title: "Operational Stability",
    value: "Critical",
    text: "Utility reliability is influenced by scale behavior across water lines and equipment.",
  },
];

const signalFlowSteps = [
  {
    step: "01",
    title: "Wrap Coil on Existing Pipe",
    text: "Non-invasive installation around the line segment. No major plumbing changes.",
  },
  {
    step: "02",
    title: "Controller Sends Programmed Signal",
    text: "Low-frequency modulation is applied through the induction coil field.",
  },
  {
    step: "03",
    title: "Mineral Adhesion Tendency Reduces",
    text: "Calcium and magnesium crystallization behavior shifts toward lower adhesion.",
  },
  {
    step: "04",
    title: "Lower Handling Over Time",
    text: "Teams target cleaner lines, fewer interventions, and better utility performance.",
  },
];

const explanationFrames = [
  {
    title: "Controller + Coil Assembly",
    text: "Electronic controller and induction coil installed as one system.",
    image: "/digigostore-assets/hero-machine.png",
  },
  {
    title: "Signal Coupling on Pipe",
    text: "Signal is coupled externally through the wrapped coil.",
    image: "/digigostore-assets/product-2048.png",
  },
  {
    title: "Minerals Stay in Water",
    text: "E-SOFT conditions scale behavior without removing essential minerals.",
    image: "/digigostore-assets/domestic-grade.jpeg",
  },
  {
    title: "Built for Indian Conditions",
    text: "Made in India product with support for local operating conditions.",
    image: "/digigostore-assets/industrial-grade.jpeg",
  },
];

const technologyCards = [
  {
    icon: Zap,
    title: "Controller",
    text: "Generates programmed low-frequency signal patterns for conditioning.",
  },
  {
    icon: Droplets,
    title: "Induction Coil",
    text: "Wraps existing pipe and couples the signal without water contact.",
  },
  {
    icon: ShieldCheck,
    title: "Power and Safety",
    text: "Requires nearby power point and is designed for safe operation.",
  },
  {
    icon: Wrench,
    title: "Sizing Inputs",
    text: "Pipe size, flow profile, hardness/TDS range, and application duty.",
  },
];

const technologyBullets = [
  "Zero salt, zero chemicals, zero wastewater",
  "Keeps essential minerals in water",
  "Non-invasive installation on existing line",
  "Zero consumable maintenance",
  "Works with existing RO/UV systems",
  "Safe for drinking and cooking",
];

const comparisonRows = [
  {
    label: "Salt Required",
    classic: "Yes",
    esoft: "No",
  },
  {
    label: "Wastewater Generation",
    classic: "Yes (backwash)",
    esoft: "No",
  },
  {
    label: "Minerals Removed",
    classic: "Yes",
    esoft: "No",
  },
  {
    label: "Maintenance",
    classic: "Regular refill and service",
    esoft: "Zero consumables",
  },
  {
    label: "Installation",
    classic: "Plumbing changes",
    esoft: "Non-invasive",
  },
  {
    label: "Power Consumption",
    classic: "Medium",
    esoft: "Low",
  },
];

const solutionTracks = [
  {
    icon: Building2,
    title: "Homes and Residential",
    text: "For apartments, villas, and societies that want premium water comfort and cleaner fixtures.",
    href: "/for-homes",
  },
  {
    icon: Factory,
    title: "Commercial and Industrial",
    text: "For hotels, hospitals, plants, and utilities where reliable operations are non-negotiable.",
    href: "/for-factories",
  },
  {
    icon: Sprout,
    title: "Agriculture and Irrigation",
    text: "For farms and irrigation lines where consistent flow and lower deposit stress matter.",
    href: "/for-farms",
  },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "No Salt Consumables",
    text: "No recurring salt top-up, handling, and storage cycle.",
  },
  {
    icon: Droplets,
    title: "No Backwash Waste",
    text: "No regular backwash wastewater discharge process.",
  },
  {
    icon: HandCoins,
    title: "Lower OPEX Pressure",
    text: "Designed for lower recurring operating overhead.",
  },
  {
    icon: Leaf,
    title: "Made in India",
    text: "Engineered and supported in India for local water conditions.",
  },
];

const caseStudies = [
  {
    title: "Civil Hospital Case Study",
    text: "Healthcare deployment focused on hard-water impact in utility lines.",
    href: "/case-study-civil-hospital.pdf",
    tag: "Healthcare",
  },
  {
    title: "Hospitality Case Study",
    text: "Guest-use and operations-focused deployment in hospitality segment.",
    href: "/case-study-hospitality.pdf",
    tag: "Hospitality",
  },
  {
    title: "Raj Bhavan Case Study",
    text: "Institutional deployment with focus on practical operation outcomes.",
    href: "/case-study-rajbhavan.pdf",
    tag: "Institutional",
  },
];

const faqSnippets = [
  {
    q: "Does E-SOFT reduce TDS?",
    a: "No. E-SOFT does not remove minerals. It changes crystallization behavior to reduce scale adhesion.",
  },
  {
    q: "Is it safe for drinking water?",
    a: "Yes. No chemicals are added and essential minerals remain in the water.",
  },
  {
    q: "How is it different from a salt softener?",
    a: "Salt softeners add sodium and discharge backwash. E-SOFT uses signal-based conditioning with no salt and no backwash.",
  },
  {
    q: "How do we size the system?",
    a: "Sizing is based on pipe size, flow rate, and hardness/TDS range. Share site details for model confirmation.",
  },
];

const tickerLogos = [...clientLogos, ...clientLogos];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-cyan-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-8 h-80 w-80 animate-float rounded-full bg-cyan-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 animate-float rounded-full bg-blue-200/35 blur-3xl [animation-delay:0.35s]" />

        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-slide-in-left">
            <Badge className="border border-blue-200 bg-white text-blue-700">
              Luxury + Industrial-Grade Water Conditioning
            </Badge>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              The Luxury Water Standard
              <span className="block bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                Every Serious Property Needs
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-slate-700 lg:text-xl">
              DIGIGO E-SOFT positions scale control as a premium utility standard for
              homes, businesses, and industry without salt or backwash.
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
                  Book Premium Water Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                <Link href="/technology">Explore Technology</Link>
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
                  src="/digigostore-assets/hero-machine.png"
                  alt="DIGIGO E-SOFT controller and induction coil"
                  width={860}
                  height={480}
                  className="h-56 w-full object-contain p-4 lg:h-64"
                  priority
                />
                <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
                  DIGIGO E-SOFT
                </span>
                <span className="absolute bottom-3 right-3 rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Premium Water Standard
                </span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <Image
                    src="/digigostore-assets/children-water.png"
                    alt="Healthy water lifestyle"
                    width={80}
                    height={80}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <p className="text-sm font-semibold text-slate-800">
                    Luxury comfort for everyday family use
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                  <p className="text-xs font-semibold text-slate-700">Made in India</p>
                  <Image
                    src="/made-in-india-logo.jpg"
                    alt="Made in India"
                    width={80}
                    height={40}
                    className="h-9 w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-white p-4 shadow-xl">
              <Explainer3D />
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
                <p className="text-sm font-semibold text-blue-900">3D Product Working Explanation</p>
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
            {trustStats.map((stat) => (
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

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Luxury Feeling. Essential Infrastructure.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              E-SOFT is positioned as a default standard for modern properties, not an optional add-on.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {luxuryPositioning.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <item.icon className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {luxuryVisuals.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="relative h-48 bg-slate-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <p className="px-4 py-3 text-sm font-semibold text-slate-800">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Why This Is a Non-Negotiable Utility Decision</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Procurement and operations teams usually evaluate scale impact through maintenance, efficiency, and recurring costs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {painCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <item.icon className="mb-3 h-7 w-7 text-blue-700" />
                <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-base font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0d223a] to-[#123f66] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Badge className="border border-cyan-300/40 bg-cyan-300/10 text-cyan-100">
              3D Product Explanation
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">How E-SOFT Works in Real Flow</h2>
            <p className="mt-3 text-lg text-slate-300">
              The 3D model shows coil placement, signal application, and the intended scale-adhesion outcome.
            </p>

            <div className="mt-6 rounded-3xl border border-blue-900/50 bg-[#0e2742]/80 p-4">
              <Explainer3D />
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {signalFlowSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-blue-900/50 bg-[#0e2742]/75 p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold tracking-wide text-cyan-100">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explanationFrames.map((frame) => (
              <div key={frame.title} className="overflow-hidden rounded-2xl border border-blue-900/50 bg-[#0e2742]/75">
                <div className="relative h-40 border-b border-blue-900/50 bg-gradient-to-br from-[#0e2742] to-[#154a75]">
                  <Image src={frame.image} alt={frame.title} fill className="object-contain p-3" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white">{frame.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{frame.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Technology Snapshot from E-SOFT</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Structured summary from the technology page for faster buying and technical review.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="grid gap-4 md:grid-cols-2">
                {technologyCards.map((card) => (
                  <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <card.icon className="mb-3 h-7 w-7 text-blue-700" />
                    <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{card.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {technologyBullets.map((item) => (
                  <div key={item} className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-700" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image
                  src="/digigostore-assets/product-2048.png"
                  alt="E-SOFT machine installation visual"
                  width={760}
                  height={420}
                  className="h-64 w-full object-contain p-4"
                />
              </div>
              <p className="mt-4 text-sm text-slate-600">
                E-SOFT system: controller + induction coil, designed for non-invasive integration on existing water lines.
              </p>
              <Button asChild className="mt-4 w-full bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
                <Link href="/technology">
                  See Full Technology Page
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Why E-SOFT Is the New Standard</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Practical comparison for teams choosing between old maintenance-heavy systems and modern standardization.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
              <p>Parameter</p>
              <p>Salt Softener</p>
              <p>DIGIGO E-SOFT</p>
            </div>
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-slate-200 px-5 py-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">{row.label}</p>
                <p>{row.classic}</p>
                <p className="font-semibold text-blue-800">{row.esoft}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Exact outcomes depend on water chemistry and operating conditions.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">One Standard Across Every Segment</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              From premium residences to industrial facilities, the core standard stays the same.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {solutionTracks.map((track) => (
              <Link key={track.title} href={track.href} className="card-hover rounded-2xl border border-slate-200 bg-slate-50 p-6">
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

      <section className="bg-gradient-to-b from-[#102f4f] to-[#0d223a] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <Badge className="border border-cyan-300/40 bg-cyan-300/10 text-cyan-100">
              Why Teams Choose DIGIGO E-SOFT
            </Badge>
            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">Luxury Experience with Utility Discipline</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-blue-900/50 bg-[#0e2742]/75 p-5">
                <pillar.icon className="mb-3 h-7 w-7 text-cyan-100" />
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Trusted by Premium and Critical Facilities</h2>
            <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
              Social proof that supports category-level trust and default adoption confidence.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4">
            <div className="flex w-max animate-ticker gap-3">
              {tickerLogos.map((client, idx) => (
                <div key={`${client.file}-${idx}`} className="flex h-24 w-44 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-3">
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  {study.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{study.text}</p>
                <Link href={study.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
                  View Case Study PDF
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqSnippets.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 bg-white p-6">
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

      <section className="bg-gradient-to-br from-[#0d4d91] via-[#1364ab] to-[#00a7c7] py-20 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold lg:text-5xl">Set E-SOFT as Your Property Standard</h2>
              <p className="mt-4 max-w-2xl text-xl text-white/90">
                Make the move from optional treatment to standard luxury utility protection with E-SOFT.
              </p>

              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/35 bg-white/10 px-4 py-3">
                <Image
                  src="/made-in-india-logo.jpg"
                  alt="Made in India"
                  width={84}
                  height={42}
                  className="h-10 w-auto rounded"
                />
                <p className="text-sm text-white/90">Built in India for Indian water conditions.</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-slate-100">
                  <Link href="tel:+916356311101">Call Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="https://wa.me/916356311101">WhatsApp Expert</Link>
                </Button>
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
