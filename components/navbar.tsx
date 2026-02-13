"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/shop" },
  { label: "Technology", href: "/technology" },
  { label: "Testimonials", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="luxury-nav sticky top-0 z-50 border-b border-[#1a2340]/10 shadow-[0_10px_30px_rgba(17,22,37,0.08)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:py-5">
        <Link href="/" className="group flex items-center gap-3">
          <Image src="/logo.svg" alt="E-Soft by DIGIGO" width={132} height={42} className="h-9 w-auto" priority />
          <div className="hidden md:block">
            <p className="font-display text-[12px] uppercase tracking-[0.18em] text-[#9f7c23]">E-Soft by DIGIGO</p>
            <p className="text-[11px] tracking-[0.08em] text-slate-500">Where Science Meets Sophistication</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-[#1a2340]/7 text-[#1a2340]"
                  : "text-slate-600 hover:bg-[#1a2340]/5 hover:text-[#1a2340]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-[#1a2340]/20 bg-white px-3 py-1.5 text-xs font-medium text-[#1a2340]"
            aria-label="Language selector"
          >
            <Globe2 className="h-3.5 w-3.5" />
            EN | HI
          </button>

          <Button asChild className="rounded-full bg-gradient-to-r from-[#1a2340] to-[#2b3861] px-6 text-white">
            <Link href="/get-quote">Book Consultation</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1a2340]/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium",
                  isActive(item.href)
                    ? "bg-[#1a2340]/7 text-[#1a2340]"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4">
              <Button asChild className="w-full rounded-full bg-gradient-to-r from-[#1a2340] to-[#2b3861] text-white">
                <Link href="/get-quote">Book Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
