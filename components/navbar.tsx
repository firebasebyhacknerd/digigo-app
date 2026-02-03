"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const solutions = [
  { name: "Residential", href: "/applications/residential" },
  { name: "Agriculture", href: "/applications/agriculture" },
  { name: "Commercial", href: "/applications/commercial" },
  { name: "Industrial", href: "/applications/industrial" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    // Close mobile drawer when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070c]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-lg bg-gradient-to-br from-neon/30 to-neon-ice/20 px-3 py-2 text-xs font-black tracking-[0.18em] text-white">
            DIGIGO
          </div>
          <div className="text-sm text-white/70 leading-tight">
            Technology Pvt. Ltd.
            <div className="text-[11px] text-neon uppercase tracking-[0.16em]">
              E-SOFT Electro Hydro Enhancer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link className={cn("hover:text-white", isActive("/") && "text-white")} href="/">
            Home
          </Link>
          <Link
            className={cn("hover:text-white", isActive("/technology") && "text-white")}
            href="/technology"
          >
            Technology
          </Link>
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-white/80 hover:border-neon/50 hover:text-white"
            >
              Applications <ChevronDown className="h-4 w-4" />
            </button>
            {solutionsOpen && (
              <div className="absolute right-0 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-[#0b111d] p-2 shadow-glow">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className={cn("hover:text-white", pathname.startsWith("/pricing") && "text-white")} href="/pricing">
            Pricing
          </Link>
          <Link className={cn("hover:text-white", pathname.startsWith("/case-studies") && "text-white")} href="/case-studies">
            Case Studies
          </Link>
          <Link className={cn("hover:text-white", pathname.startsWith("/about") && "text-white")} href="/about">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href="/contact">Request Consultation</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/technology">Download Tech Brief</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#05070c] px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 py-3 text-white/80">
            <Link href="/">Home</Link>
            <Link href="/technology">Technology</Link>
            <div>
              <div className="text-white/60">Applications</div>
              <div className="mt-2 flex flex-col gap-2">
                {solutions.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/pricing">Pricing</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/about">About</Link>
            <Button asChild className="w-full">
              <Link href="/contact">Request Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
