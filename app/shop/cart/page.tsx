"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Shop Cart"
        title="Cart and Checkout"
        subtitle="Your cart flow is connected. Full checkout and payment gateway integration can be enabled in the next build phase."
        imageSrc="/digigostore-assets/product-2048.png"
      />

      <section className="py-16">
        <div className="section-shell max-w-3xl text-center">
          <div className="luxury-panel p-10">
            <ShoppingCart className="mx-auto h-14 w-14 text-blue-700" />
            <h1 className="mt-4 text-3xl font-bold text-slate-900">Cart Ready for Scale-Up</h1>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              For now, most customers continue via assisted quote-based conversion. Direct checkout can be activated with payment integration.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/shop">Back to Shop</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/get-quote">Get Quote Instead</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
