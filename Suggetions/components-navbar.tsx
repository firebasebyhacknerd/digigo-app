"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Load cart count
    const cart = localStorage.getItem('cart');
    if (cart) {
      const items = JSON.parse(cart);
      setCartCount(items.length);
    }
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar - Contact Info */}
      <div className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:+916356311101" 
                className="flex items-center gap-2 hover:text-blue-100 transition-colors"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium">+91 63563 11101</span>
              </a>
              <a 
                href="mailto:info.digigo@gmail.com" 
                className="hidden sm:inline hover:text-blue-100 transition-colors"
              >
                info.digigo@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-blue-100">✓ 30-Day Guarantee</span>
              <span className="text-blue-100">✓ Free Installation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="DIGIGO E-SOFT"
              width={140}
              height={40}
              className="h-8 w-auto sm:h-10"
              priority
            />
            <div className="hidden lg:block">
              <div className="text-[10px] text-slate-600 leading-tight">
                DIGIGO Technology
              </div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                E-SOFT Water Treatment
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
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
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
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
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
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
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/for-")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Solutions
            </Link>

            <Link
              href="/pricing"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
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
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/contact")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Cart Icon */}
            <Link
              href="/shop/cart"
              className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Button asChild size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              <Link href="tel:+916356311101">Call Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            <Link
              href="/"
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                isActive("/")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Home
            </Link>

            <Link
              href="/shop"
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/shop")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Shop Products
            </Link>

            <Link
              href="/how-it-works"
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/how-it-works")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              How It Works
            </Link>

            {/* Solutions Submenu */}
            <div className="space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Solutions
              </div>
              <Link
                href="/for-homes"
                className="block px-4 py-2 pl-8 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                🏠 For Homes
              </Link>
              <Link
                href="/for-businesses"
                className="block px-4 py-2 pl-8 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                🏢 For Businesses
              </Link>
              <Link
                href="/for-factories"
                className="block px-4 py-2 pl-8 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                🏭 For Factories
              </Link>
              <Link
                href="/for-farms"
                className="block px-4 py-2 pl-8 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
              >
                🌾 For Farms
              </Link>
            </div>

            <Link
              href="/pricing"
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/pricing")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/contact")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              Contact
            </Link>

            {/* Mobile CTAs */}
            <div className="pt-4 space-y-2">
              <Link
                href="/shop/cart"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart {cartCount > 0 && `(${cartCount})`}
              </Link>

              <Button asChild size="lg" variant="outline" className="w-full border-blue-600 text-blue-600">
                <Link href="/get-quote">Get Free Quote</Link>
              </Button>

              <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                <Link href="tel:+916356311101">
                  <Phone className="w-4 h-4 mr-2" />
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
