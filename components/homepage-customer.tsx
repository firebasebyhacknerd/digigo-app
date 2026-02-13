import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Check,
  Factory,
  Home,
  Shield,
  Sprout,
  Star,
  Wrench,
  Droplets,
  Coins,
  Zap,
  BatteryWarning,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { clientLogos } from "@/content/client-logos";

const customerTypes = [
  {
    icon: Home,
    label: "Homeowner",
    href: "/for-homes",
    iconClass: "text-blue-700",
    bgClass: "bg-blue-100",
    borderClass: "hover:border-blue-500",
  },
  {
    icon: Building2,
    label: "Business",
    href: "/for-businesses",
    iconClass: "text-cyan-burst",
    bgClass: "bg-cyan-burst/15",
    borderClass: "hover:border-cyan-burst",
  },
  {
    icon: Factory,
    label: "Factory",
    href: "/for-factories",
    iconClass: "text-indigo-700",
    bgClass: "bg-indigo-100",
    borderClass: "hover:border-indigo-500",
  },
  {
    icon: Sprout,
    label: "Farm",
    href: "/for-farms",
    iconClass: "text-green-700",
    bgClass: "bg-green-100",
    borderClass: "hover:border-green-500",
  },
];

const problems = [
  {
    title: "White Scale Everywhere",
    desc: "Stains on taps, tiles, and glass that are difficult to clean.",
    icon: Droplets,
  },
  {
    title: "Dry and Itchy Skin",
    desc: "Hard water often leaves skin and hair feeling rough after showering.",
    icon: BatteryWarning,
  },
  {
    title: "Appliance Damage",
    desc: "Scale can reduce geyser and washing machine life.",
    icon: Wrench,
  },
  {
    title: "Monthly Salt Cost",
    desc: "Traditional softeners need recurring purchases and handling.",
    icon: Coins,
  },
  {
    title: "Water Waste",
    desc: "Backwash cycles waste useful water.",
    icon: Droplets,
  },
  {
    title: "Higher Energy Bills",
    desc: "Scale buildup lowers heating efficiency.",
    icon: Zap,
  },
];

const timelines = [
  { label: "Week 1", result: "Less spotting on glass and tiles" },
  { label: "Week 4", result: "Softer feel on skin and hair" },
  { label: "Month 3", result: "Older deposits may begin loosening" },
  { label: "Month 6", result: "Lower appliance trouble in many cases" },
  { label: "Year 1", result: "System continues with zero consumables" },
];

const testimonials = [
  {
    name: "Rajesh Sharma",
    meta: "Homeowner, Ahmedabad",
    quote:
      "No more salt bags and fewer hard-water stains. The result is noticeable.",
  },
  {
    name: "Dr. Mehta",
    meta: "Hospital Administrator",
    quote:
      "Maintenance calls dropped and the team saw better reliability in water systems.",
  },
  {
    name: "Patel Industries",
    meta: "Manufacturing Unit",
    quote:
      "Scale-related downtime reduced and utility costs became more predictable.",
  },
];

const pricing = [
  {
    icon: Home,
    title: "Home",
    size: "2-4 people",
    range: "INR 35K - 50K",
  },
  {
    icon: Building2,
    title: "Business",
    size: "50-100 people",
    range: "INR 1.2L - 2.5L",
  },
  {
    icon: Factory,
    title: "Factory",
    size: "Industrial",
    range: "INR 3L - 10L+",
  },
  {
    icon: Sprout,
    title: "Farm",
    size: "Per acre",
    range: "INR 80K - 1.5L",
  },
];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-8 text-center">
            <Badge className="border border-blue-200 bg-white text-blue-700">
              Customer-First Water Treatment
            </Badge>
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-slate-600 lg:text-3xl">
                Tired of Scale, Spotting, and Dry Skin?
              </h2>
              <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
                E-SOFT Stops
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Hard Water Problems
                </span>
              </h1>
              <p className="text-2xl font-medium text-slate-700 lg:text-3xl">
                Without Salt. Without Chemicals. Without Water Waste.
              </p>
            </div>

            <div className="pt-6">
              <p className="mb-6 text-lg text-slate-600">
                Which describes you best?
              </p>
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
                {customerTypes.map((type) => (
                  <Link
                    key={type.label}
                    href={type.href}
                    className={`group rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl ${type.borderClass}`}
                  >
                    <div className="space-y-3 text-center">
                      <div
                        className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${type.bgClass}`}
                      >
                        <type.icon className={`h-7 w-7 ${type.iconClass}`} />
                      </div>
                      <p className="font-semibold text-slate-900">{type.label}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <Link href="/get-quote">
                  Get Free Quote in 2 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-slate-600">
              {[
                "10,000+ Happy Customers",
                "15+ Years Experience",
                "30-Year Design Life",
                "Made in India",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Do You Face These Problems?
            </h2>
            <p className="text-xl text-slate-600">
              Hard water causes real daily damage and extra costs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-red-100 bg-white p-7 shadow-sm"
              >
                <item.icon className="mb-4 h-8 w-8 text-red-500" />
                <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              How E-SOFT Solves It
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              A simple 3-step process that changes mineral behavior so scale is
              less likely to stick.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Wrap Coil Around Pipe",
                desc: "No pipe cutting required for standard installations.",
              },
              {
                step: "2",
                title: "Controller Sends Signals",
                desc: "Programmed signals are applied through the coil.",
              },
              {
                step: "3",
                title: "Minerals Flow Through",
                desc: "Mineral behavior changes to reduce hard adhesion.",
              },
            ].map((item) => (
              <div key={item.step} className="space-y-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="lg">
              <Link href="/how-it-works">
                See Simple Explanation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-14 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Why Not a Salt Softener?
            </h2>
            <p className="text-xl text-slate-600">
              Side-by-side comparison over daily use and long-term cost.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-red-900">
                Salt Softener
              </h3>
              <div className="space-y-3 text-slate-700">
                {[
                  "Recurring salt purchases",
                  "Backwash water waste",
                  "Regular maintenance dependency",
                  "Typical 10-15 year replacement cycle",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-red-100 p-4">
                <p className="font-semibold text-red-900">5-Year Example Cost</p>
                <p className="text-3xl font-bold text-red-900">INR 55,000+</p>
              </div>
            </div>

            <div className="relative rounded-2xl border-2 border-green-500 bg-green-50 p-8">
              <span className="absolute -right-3 -top-3 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                BETTER CHOICE
              </span>
              <h3 className="mb-6 text-center text-2xl font-bold text-green-900">
                E-SOFT System
              </h3>
              <div className="space-y-3 text-slate-700">
                {[
                  "No salt consumables",
                  "Zero backwash waste",
                  "Low-operating maintenance model",
                  "30+ year design life",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl bg-green-100 p-4">
                <p className="font-semibold text-green-900">5-Year Example Cost</p>
                <p className="text-3xl font-bold text-green-900">INR 40,000</p>
                <p className="mt-1 font-semibold text-green-800">
                  Estimated savings: INR 15,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              10,000+ Customers Trust E-SOFT
            </h2>
            <p className="text-xl text-slate-600">
              Homes, businesses, plants, and farms across India.
            </p>
          </div>

          <div className="mb-14 grid gap-6 md:grid-cols-4">
            {[
              { value: "10,000+", label: "Happy Customers" },
              { value: "150+", label: "Commercial Buildings" },
              { value: "50+", label: "Government Projects" },
              { value: "99%", label: "Customer Retention" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-7 text-center"
              >
                <p className="text-4xl font-bold text-blue-700">{item.value}</p>
                <p className="mt-2 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-14">
            <h3 className="mb-5 text-center text-2xl font-bold text-slate-900">
              Client Logos from Live Installations
            </h3>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {clientLogos.map((client) => (
                <div
                  key={client.file}
                  className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2"
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

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border-2 border-slate-200 bg-white p-7 transition-all hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-4 flex gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <p className="mb-5 italic text-slate-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="font-bold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              What to Expect After Installation
            </h2>
            <p className="text-xl text-slate-600">
              A practical timeline for most installations.
            </p>
          </div>
          <div className="space-y-4">
            {timelines.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  {item.label}
                </span>
                <p className="pt-1 text-slate-700">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600">
              One-time system cost based on application and size.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricing.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-7 text-center transition-all hover:border-blue-500 hover:shadow-xl"
              >
                <item.icon className="mx-auto mb-4 h-10 w-10 text-blue-700" />
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mb-3 text-slate-600">{item.size}</p>
                <p className="text-2xl font-bold text-blue-700">{item.range}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Ready to Stop Hard Water Problems?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-white/90">
            Share your details and get a tailored recommendation.
          </p>

          <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-white/10 p-7 backdrop-blur-sm">
            <QuickQuoteForm />
          </div>

          <div className="mt-8">
            <p className="text-lg text-white/90">Or call directly:</p>
            <a className="text-3xl font-bold hover:underline" href="tel:+916356311101">
              +91 63563 11101
            </a>
          </div>
        </div>
      </section>

      <section className="border-t-4 border-green-500 bg-green-50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <Shield className="h-9 w-9 text-green-600" />
            <h3 className="text-3xl font-bold text-slate-900">
              30-Day Money-Back Commitment
            </h3>
          </div>
          <p className="text-lg text-slate-700">
            If you do not see meaningful improvement in early operation, our team
            will review and support a fair resolution.
          </p>
        </div>
      </section>
    </main>
  );
}
