"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-10">
          <ShoppingCart className="mx-auto h-14 w-14 text-blue-700" />
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Cart Ready for Next Phase
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            The storefront and cart flow are now connected in navigation. Complete
            checkout and payment integration can be added in the next phase.
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
    </main>
  );
}
