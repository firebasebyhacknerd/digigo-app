import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Factory, Home, Sprout } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

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
      image: "/digigostore-assets/domestic-grade.jpeg",
    },
    {
      title: "Business Standard",
      subtitle: "50-100 users",
      price: "From INR 1.2L",
      cta: "Request Quote",
      href: "/for-businesses",
      icon: Building2,
      image: "/digigostore-assets/home-lifestyle.jpg",
    },
    {
      title: "Industrial System",
      subtitle: "Factory deployment",
      price: "From INR 3L",
      cta: "Request Technical Call",
      href: "/for-factories",
      icon: Factory,
      image: "/digigostore-assets/industrial-grade.jpeg",
    },
    {
      title: "Farm System",
      subtitle: "Irrigation use",
      price: "From INR 80,000",
      cta: "Request Farm Quote",
      href: "/for-farms",
      icon: Sprout,
      image: "/digigostore-assets/children-water.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Shop"
        title="Choose the Right E-SOFT Configuration"
        subtitle="Residential purchases can start directly. Commercial and industrial setups are consultation-led for correct sizing."
        imageSrc="/digigostore-assets/product-2048.png"
      />

      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {products.map((item) => (
            <div key={item.title} className="luxury-panel overflow-hidden">
              <div className="relative h-44 border-b border-slate-200 bg-slate-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <item.icon className="mb-4 h-10 w-10 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                <p className="mt-1 text-slate-600">{item.subtitle}</p>
                <p className="mt-3 text-2xl font-bold text-blue-700">{item.price}</p>
                <Button asChild className="mt-5">
                  <Link href={item.href}>
                    {item.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
