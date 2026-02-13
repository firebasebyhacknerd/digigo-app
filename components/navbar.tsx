"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function readCartCount() {
  if (typeof window === "undefined") return 0;
  try {
    const cart = window.localStorage.getItem("cart");
    if (!cart) return 0;
    const items = JSON.parse(cart);
    return Array.isArray(items) ? items.length : 0;
  } catch {
    return 0;
  }
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState<number>(readCartCount);

  useEffect(() => {
    const onStorage = () => setCartCount(readCartCount());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isSolutionsActive = pathname.startsWith("/for-");
  const closeMobile = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:+916356311101"
                className="flex items-center gap-2 transition-colors hover:text-blue-100"
              >
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium">+91 63563 11101</span>
              </a>
              <a
                href="mailto:info.digigo@gmail.com"
                className="hidden transition-colors hover:text-blue-100 sm:inline"
              >
                info.digigo@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden text-blue-100 sm:inline">30-day guarantee</span>
              <span className="text-blue-100">Free installation support</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-3" onClick={closeMobile}>
            <Image
              src="/logo.svg"
              alt="DIGIGO E-SOFT"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
            <div className="hidden lg:block">
              <div className="text-[10px] leading-tight text-slate-600">
                DIGIGO Technology
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
                E-SOFT Water Treatment
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Home
            </Link>

            <Link
              href="/shop"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/shop")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Shop Products
            </Link>

            <Link
              href="/how-it-works"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/how-it-works")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              How It Works
            </Link>

            <Link
              href="/for-homes"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                isSolutionsActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/pricing")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname.startsWith("/contact")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/shop/cart"
              className="relative rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-50"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Link href="/get-quote">Get Quote</Link>
            </Button>

            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Link href="tel:+916356311101">Call Now</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            <Link
              href="/"
              onClick={closeMobile}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={closeMobile}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/shop")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Shop Products
            </Link>

            <Link
              href="/how-it-works"
              onClick={closeMobile}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/how-it-works")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              How It Works
            </Link>

            <div className="space-y-1">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Solutions
              </div>
              <Link
                href="/for-homes"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50"
              >
                For Homes
              </Link>
              <Link
                href="/for-businesses"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50"
              >
                For Businesses
              </Link>
              <Link
                href="/for-factories"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50"
              >
                For Factories
              </Link>
              <Link
                href="/for-farms"
                onClick={closeMobile}
                className="block rounded-lg px-4 py-2 pl-8 text-sm text-slate-700 hover:bg-slate-50"
              >
                For Farms
              </Link>
            </div>

            <Link
              href="/pricing"
              onClick={closeMobile}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/pricing")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              onClick={closeMobile}
              className={cn(
                "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/contact")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Contact
            </Link>

            <div className="space-y-2 pt-4">
              <Link
                href="/shop/cart"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-slate-200 px-4 py-3 font-medium text-slate-700 transition-colors hover:border-blue-600 hover:text-blue-600"
              >
                <ShoppingCart className="h-5 w-5" />
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-blue-600 text-blue-600"
              >
                <Link href="/get-quote" onClick={closeMobile}>
                  Get Free Quote
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600"
              >
                <Link href="tel:+916356311101" onClick={closeMobile}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
