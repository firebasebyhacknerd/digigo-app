import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Building2, Factory, Sprout, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop Products | DIGIGO E-SOFT",
  description:
    "Browse E-SOFT product categories and choose direct purchase or quote-based consultation by segment.",
};

export default function ShopPage() {
  const products = [
    {
      title: "Home Basic",
      subtitle: "2-4 people",
      price: "INR 35,000",
      cta: "Buy Now",
      href: "/get-quote",
      icon: Home,
    },
    {
      title: "Business Standard",
      subtitle: "50-100 users",
      price: "From INR 1.2L",
      cta: "Request Quote",
      href: "/for-businesses",
      icon: Building2,
    },
    {
      title: "Industrial System",
      subtitle: "Factory deployment",
      price: "From INR 3L",
      cta: "Request Technical Call",
      href: "/for-factories",
      icon: Factory,
    },
    {
      title: "Farm System",
      subtitle: "Irrigation use",
      price: "From INR 80,000",
      cta: "Request Farm Quote",
      href: "/for-farms",
      icon: Sprout,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Shop
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 lg:text-6xl">
            Browse E-SOFT Product Options
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-600">
            Residential units can be started directly, while commercial and
            industrial setups are consultation-based for correct sizing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {products.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7"
            >
              <item.icon className="mb-4 h-10 w-10 text-blue-700" />
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-1 text-slate-600">{item.subtitle}</p>
              <p className="mt-3 text-2xl font-bold text-blue-700">{item.price}</p>
              <Button asChild className="mt-5">
                <Link href={item.href}>
                  {item.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
