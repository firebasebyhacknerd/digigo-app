import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

type Props = {
  title: string;
  subtitle: string;
  kicker?: string;
  actions?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
};

const visualByContext: Record<string, string> = {
  technology: "/digigostore-assets/product-2048.png",
  pricing: "/digigostore-assets/domestic-grade.jpeg",
  warranty: "/digigostore-assets/industrial-grade.jpeg",
  comparison: "/digigostore-assets/hero-machine.png",
  installation: "/digigostore-assets/hero-machine.png",
  projects: "/digigostore-assets/industrial-grade.jpeg",
  clients: "/digigostore-assets/home-lifestyle.jpg",
  contact: "/digigostore-assets/home-lifestyle.jpg",
  applications: "/digigostore-assets/industrial-grade.jpeg",
  about: "/digigostore-assets/home-lifestyle.jpg",
};

function resolveHeroVisual(kicker?: string, title?: string, imageSrc?: string) {
  if (imageSrc) return imageSrc;
  const key = `${kicker || ""} ${title || ""}`.toLowerCase();
  for (const [hint, src] of Object.entries(visualByContext)) {
    if (key.includes(hint)) return src;
  }
  return "/digigostore-assets/hero-machine.png";
}

export function PageHero({ title, subtitle, kicker, actions, imageSrc, imageAlt }: Props) {
  const heroImage = resolveHeroVisual(kicker, title, imageSrc);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-blue-50 via-white to-cyan-50 py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-8 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          {kicker && <Badge>{kicker}</Badge>}
          <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">{title}</h1>
          <p className="max-w-3xl text-base text-slate-600 md:text-lg">{subtitle}</p>

          {actions ?? (
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild>
                <Link href="/get-quote">
                  Book Premium Water Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Talk to Expert</Link>
              </Button>
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <span className="rounded-full border border-blue-100 bg-white px-3 py-1 font-medium text-slate-700">
              No Salt Consumables
            </span>
            <span className="rounded-full border border-blue-100 bg-white px-3 py-1 font-medium text-slate-700">
              No Backwash Waste
            </span>
            <span className="rounded-full border border-blue-100 bg-white px-3 py-1 font-medium text-slate-700">
              Luxury Water Standard
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-white p-4 shadow-xl">
          <div className="relative h-56 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 md:h-72">
            <Image
              src={heroImage}
              alt={imageAlt || `${title} visual`}
              fill
              className="object-contain p-4"
            />
            <span className="absolute left-3 top-3 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
              DIGIGO E-SOFT
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
            <span>Premium performance. Essential utility layer.</span>
            <Image src="/made-in-india-logo.jpg" alt="Made in India" width={62} height={28} className="h-7 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
