"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const applications = [
  { name: "Agriculture", href: "/applications/agriculture" },
  { name: "Residential", href: "/applications/residential" },
  { name: "Commercial", href: "/applications/commercial" },
  { name: "Industrial", href: "/applications/industrial" },
  { name: "Hospitals", href: "/applications/hospitals" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);

  useEffect(() => {
    // Close mobile drawer when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-xl">
      <div className="bg-surface-3/80 text-xs text-muted border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex gap-6">
            <span>Call: <Link className="text-neon hover:text-neon-bright transition-colors" href="tel:+916356311101">+91 63563 11101</Link></span>
            <span>Email: <Link className="text-neon hover:text-neon-bright transition-colors" href="mailto:info.digigo@gmail.com">info.digigo@gmail.com</Link></span>
          </div>
          <Link className="text-neon hover:text-neon-bright transition-colors font-medium" href="/pricing">Pricing</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.svg"
            alt="DIGIGO Technology"
            width={170}
            height={48}
            className="h-10 w-auto"
            priority
          />
          <div className="hidden sm:block text-xs text-muted leading-tight">
            Technology Pvt. Ltd.
            <div className="text-[11px] text-neon uppercase tracking-[0.16em] font-semibold">
              E-SOFT Electro Hydro Enhancer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          <Link className={cn("hover:text-ink transition-colors", isActive("/"))} href="/">Home</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/technology") && "text-ink")} href="/technology">Technology</Link>
          <div className="relative">
            <button
              onClick={() => setAppsOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-muted hover:border-neon/50 hover:text-ink transition-all"
            >
              Applications <ChevronDown className="h-4 w-4" />
            </button>
            {appsOpen && (
              <div className="absolute right-0 mt-2 min-w-[240px] rounded-2xl border border-border bg-surface-2 p-2 shadow-card-glow animate-fade-in">
                {applications.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm text-muted hover:bg-surface-3 hover:text-ink transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/projects") && "text-ink")} href="/projects">Projects</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/government-projects") && "text-ink")} href="/government-projects">Government Projects</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/clients") && "text-ink")} href="/clients">Clients</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/impact") || pathname.startsWith("/impact-savings") ? "text-ink" : "")} href="/impact">Impact & Savings</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/faq") && "text-ink")} href="/faq">FAQ</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/contact") && "text-ink")} href="/contact">Contact</Link>
          <Link className={cn("hover:text-ink transition-colors", pathname.startsWith("/get-quote") && "text-ink")} href="/get-quote">Get Quote</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild size="sm" variant="outline" className="border-neon/30 text-neon hover:bg-neon/10">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
          <Button asChild size="sm" className="btn-primary">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-2xl border border-border p-3 text-muted hover:text-ink hover:border-neon/50 transition-all md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-surface px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-4 py-4 text-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <Link href="/technology" className="hover:text-ink transition-colors">Technology</Link>
            <div>
              <div className="text-muted/60 mb-2">Applications</div>
              <div className="mt-2 flex flex-col gap-2">
                {applications.map((item) => (
                  <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" className="hover:text-ink transition-colors">Projects</Link>
            <Link href="/government-projects" className="hover:text-ink transition-colors">Government Projects</Link>
            <Link href="/clients" className="hover:text-ink transition-colors">Clients</Link>
            <Link href="/impact" className="hover:text-ink transition-colors">Impact & Savings</Link>
            <Link href="/faq" className="hover:text-ink transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-ink transition-colors">Contact</Link>
            <Button asChild className="w-full btn-primary">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
