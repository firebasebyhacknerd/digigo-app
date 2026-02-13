import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  CheckCircle2,
  Clock3,
  Droplets,
  Factory,
  Leaf,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Explainer3D } from "@/components/explainer-3d";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { clientLogos } from "@/content/client-logos";

const heroStats = [
  { value: "10,000+", label: "Installations" },
  { value: "50+", label: "Government Projects" },
  { value: "150+", label: "Commercial & Industrial Sites" },
  { value: "99%", label: "Customer Retention" },
];

const comparisonRows = [
  { label: "Salt Required", traditional: "Yes", esoft: "No" },
  { label: "Backwash Wastewater", traditional: "Yes", esoft: "No" },
  { label: "Minerals Removed", traditional: "Yes", esoft: "No" },
  { label: "Consumable Maintenance", traditional: "High", esoft: "Minimal" },
  { label: "Installation Approach", traditional: "Plumbing changes", esoft: "Non-invasive" },
];

const craftsmanship = [
  {
    icon: Zap,
    title: "Precision Electronics",
    text: "Programmed low-frequency signal control for stable conditioning behavior.",
  },
  {
    icon: Droplets,
    title: "Digital Water Intelligence",
    text: "Profiles tuned to pipe size, flow pattern, and hardness range.",
  },
  {
    icon: Leaf,
    title: "Eco-Luxury Design",
    text: "No salt handling cycle and no regeneration wastewater burden.",
  },
  {
    icon: Wrench,
    title: "Long-Life Build",
    text: "Engineered for reliable duty in homes, hospitality, and industry.",
  },
];

const products = [
  {
    name: "E-Soft Residence",
    tag: "Luxury homes",
    image: "/digigostore-assets/home-lifestyle.jpg",
    href: "/for-homes",
  },
  {
    name: "E-Soft Estate",
    tag: "Large residences",
    image: "/digigostore-assets/domestic-grade.jpeg",
    href: "/for-businesses",
  },
  {
    name: "E-Soft Commercial",
    tag: "Hotels and hospitals",
    image: "/digigostore-assets/product-2048.png",
    href: "/for-factories",
  },
  {
    name: "E-Soft Industrial",
    tag: "Process utilities",
    image: "/digigostore-assets/industrial-grade.jpeg",
    href: "/applications/industrial",
  },
];

const scienceSteps = [
  "Water line and usage profile review",
  "Digital signal optimization",
  "Mineral behavior conditioning",
  "Cleaner utility performance over time",
];

const investmentTiers = [
  {
    name: "Essential",
    subtitle: "Standard luxury homes",
    points: ["Core installation", "Concierge onboarding", "Technical support"],
  },
  {
    name: "Premium",
    subtitle: "Villas and estates",
    points: ["Higher-duty profile", "Priority support", "Recommended tier"],
    featured: true,
  },
  {
    name: "Exclusive",
    subtitle: "Hospitality and enterprise",
    points: ["Site assessment", "Phased deployment", "Service integration"],
  },
];

const faqItems = [
  {
    q: "Does E-Soft reduce TDS?",
    a: "No. E-Soft does not remove minerals. It conditions hardness behavior to reduce scale adhesion tendency.",
  },
  {
    q: "Is this safe for drinking and cooking?",
    a: "Yes. The system does not add chemicals and keeps essential minerals in water.",
  },
  {
    q: "How is this different from a salt softener?",
    a: "E-Soft is electronic conditioning without salt or backwash regeneration cycles.",
  },
  {
    q: "Can it work with existing RO/UV systems?",
    a: "Yes. It can be used as a complementary utility-level treatment layer.",
  },
  {
    q: "How is model sizing done?",
    a: "Sizing is based on pipe size, flow profile, and water hardness/TDS context.",
  },
];

const tickerLogos = [...clientLogos, ...clientLogos];

export function HomePageCustomer() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#1a2340]">
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <Image src="/digigostore-assets/home-lifestyle.jpg" alt="Luxury water lifestyle" fill priority className="object-cover" />
        <div className="luxury-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(212,175,55,0.26),transparent_40%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 pb-14 pt-24">
          <Badge className="w-fit border-[#d4af37]/50 bg-[#fff7df]/90 text-[#8f6d19]">
            Premium Electronic Water Treatment
          </Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
            Elevate Your Water.
            <span className="block text-[#f4df95]">Elevate Your Life.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/90 lg:text-xl">
            E-Soft by DIGIGO is designed as the luxury standard for water comfort and scale control.
          </p>

          <div className="mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "No salt consumables",
              "No backwash wastewater",
              "Minerals stay in water",
              "Built for Indian conditions",
            ].map((point) => (
              <p key={point} className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-[#f4df95]" />
                {point}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-[#d4af37] text-[#1a2340] hover:bg-[#e3bf5b]">
              <Link href="/get-quote">
                Book Private Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-white/10 text-white hover:bg-white/15">
              <Link href="/technology">Explore Technology</Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/95">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
              <PhoneCall className="h-4 w-4 text-[#f4df95]" />
              Concierge: +91 63563 11101
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2">
              <Clock3 className="h-4 w-4 text-[#f4df95]" />
              Fast response support
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#1a2340]/10 bg-[#fbfaf5] p-6 text-center">
                <p className="font-display text-4xl text-[#1a2340]">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f3] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <Badge>Where Science Meets Sophistication</Badge>
          <h2 className="mt-5 font-display text-4xl text-[#1a2340] md:text-5xl">
            Luxury Feeling. Essential Infrastructure.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            E-Soft is positioned as an exclusive water-treatment experience and a practical utility decision.
          </p>
        </div>
      </section>

      <section id="technology" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl text-[#1a2340] md:text-5xl">The E-Soft Difference</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-display text-3xl text-slate-700">Traditional Softeners</h3>
              <div className="mt-5 space-y-3">
                {comparisonRows.map((row) => (
                  <div key={`old-${row.label}`} className="flex items-center justify-between border-b border-slate-200 pb-3 text-sm">
                    <p className="text-slate-600">{row.label}</p>
                    <p className="inline-flex items-center gap-2 text-slate-500">
                      <X className="h-4 w-4 text-slate-400" />
                      {row.traditional}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[#d4af37]/45 bg-gradient-to-b from-[#fff8e8] to-white p-6 shadow-[0_16px_45px_rgba(17,22,37,0.12)]">
              <h3 className="font-display text-3xl text-[#1a2340]">E-Soft by DIGIGO</h3>
              <div className="mt-5 space-y-3">
                {comparisonRows.map((row) => (
                  <div key={`new-${row.label}`} className="flex items-center justify-between border-b border-[#d9c490]/45 pb-3 text-sm">
                    <p className="font-medium text-[#2e3b61]">{row.label}</p>
                    <p className="inline-flex items-center gap-2 font-semibold text-[#1a2340]">
                      <CheckCircle2 className="h-4 w-4 text-[#9f7c23]" />
                      {row.esoft}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11182d] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <Badge className="border-[#d4af37]/45 bg-[#d4af37]/10 text-[#f4df95]">Engineering Excellence</Badge>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Technology and Craftsmanship</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {craftsmanship.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <item.icon className="h-7 w-7 text-[#f4df95]" />
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl text-[#1a2340] md:text-5xl">The E-Soft Collection</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-3xl border border-[#1a2340]/10 bg-white">
                <Image src={product.image} alt={product.name} width={700} height={500} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.13em] text-[#8f6d19]">{product.tag}</p>
                  <h3 className="mt-2 font-display text-2xl text-[#1a2340]">{product.name}</h3>
                  <Button asChild variant="outline" className="mt-4 w-full rounded-full">
                    <Link href={product.href}>
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#f8f7f3] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <Badge>Trusted by Premium and Critical Facilities</Badge>
            <h2 className="mt-5 font-display text-4xl text-[#1a2340] md:text-5xl">Luxury Segment Testimonials</h2>
          </div>
          <TestimonialCarousel />
          <div className="mt-8 rounded-3xl border border-[#1a2340]/12 bg-white p-4">
            <div className="flex w-max animate-ticker gap-3">
              {tickerLogos.map((client, idx) => (
                <div key={`${client.file}-${idx}`} className="flex h-20 w-40 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <Image src={`/client-logos/${client.file}`} alt={`${client.name} logo`} width={130} height={50} className="max-h-11 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11182d] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr]">
          <div>
            <Badge className="border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f4df95]">Technology Without Compromise</Badge>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">The Science Behind Luxury</h2>
            <p className="mt-4 text-lg text-slate-300">Visual product explanation with molecular-level behavior mapping.</p>
            <div className="mt-6 rounded-3xl border border-white/15 bg-[#1a2340]/55 p-4">
              <Explainer3D />
            </div>
          </div>
          <div className="space-y-4">
            {scienceSteps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.13em] text-[#f4df95]">Step {(idx + 1).toString().padStart(2, "0")}</p>
                <p className="mt-2 text-base text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl text-[#1a2340] md:text-5xl">Investment Tiers</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {investmentTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl border p-6 ${
                  tier.featured ? "border-[#d4af37]/55 bg-[#fff8e8]" : "border-[#1a2340]/12 bg-[#f9f8f4]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl text-[#1a2340]">{tier.name}</h3>
                  {tier.featured && <Star className="h-5 w-5 text-[#9f7c23]" />}
                </div>
                <p className="mt-1 text-sm text-slate-600">{tier.subtitle}</p>
                <div className="mt-4 space-y-2">
                  {tier.points.map((point) => (
                    <p key={point} className="inline-flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#9f7c23]" />
                      {point}
                    </p>
                  ))}
                </div>
                <Button asChild className="mt-5 w-full rounded-full">
                  <Link href="/get-quote">Request Exclusive Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#f8f7f3] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl text-[#1a2340] md:text-5xl">Premium Q&A</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, idx) => (
              <AccordionItem key={faq.q} value={`faq-${idx}`} className="border-[#1a2340]/10 bg-[#fbfaf6]">
                <AccordionTrigger className="text-base text-[#1a2340] hover:text-[#9f7c23]">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1a2340] via-[#242f56] to-[#121a33] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Badge className="border-[#d4af37]/45 bg-[#d4af37]/10 text-[#f4df95]">Book Your Private Consultation</Badge>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">Own the Premium Water Standard</h2>
            <p className="mt-4 max-w-xl text-lg text-slate-200">
              White-glove support from consultation to installation, with product fit aligned to your property.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-slate-200">
              <p className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#f4df95]" />Luxury positioning + utility performance</p>
              <p className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#f4df95]" />No salt and no backwash cycle</p>
              <p className="inline-flex items-center gap-2"><BadgeIndianRupee className="h-4 w-4 text-[#f4df95]" />Lower recurring handling burden</p>
              <p className="inline-flex items-center gap-2"><Factory className="h-4 w-4 text-[#f4df95]" />Made in India engineering</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-[#d4af37] text-[#1a2340] hover:bg-[#e3bf5b]">
                <Link href="/get-quote">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/35 bg-white/10 text-white hover:bg-white/15">
                <Link href="/tech-brief.pdf" target="_blank">Download Brochure</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white p-7 text-[#1a2340]">
            <h3 className="font-display text-3xl">Request a Callback</h3>
            <p className="mt-2 text-sm text-slate-600">Concierge team responds quickly during business hours.</p>
            <div className="mt-5">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
