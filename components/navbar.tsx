"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const applications = [
  { name: "Agriculture", href: "/applications/agriculture" },
  { name: "Residential", href: "/applications/residential" },
  { name: "Commercial", href: "/applications/commercial" },
  { name: "Industrial", href: "/applications/industrial" },
  { name: "Hospitals", href: "/applications/hospitals" },
];

const resources = [
  { name: "Government Projects", href: "/government-projects" },
  { name: "Impact & Savings", href: "/impact" },
  { name: "FAQ", href: "/faq" },
  { name: "Knowledge Base", href: "/knowledge" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const appsMenuRef = useRef<HTMLDivElement>(null);
  const resourcesMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Close mobile drawer when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setAppsOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (appsMenuRef.current && !appsMenuRef.current.contains(target)) {
        setAppsOpen(false);
      }
      if (resourcesMenuRef.current && !resourcesMenuRef.current.contains(target)) {
        setResourcesOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAppsOpen(false);
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href: string) => pathname === href;
  const isGroupActive = (links: { href: string }[]) =>
    links.some((link) => pathname === link.href || pathname.startsWith(`${link.href}/`));

  return (
    <header className="sticky top-0 z-50 border-b border-steel-800 bg-steel-950/90 backdrop-blur-xl">
      <div className="border-b border-steel-800 bg-steel-900/80 text-xs text-steel-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4 sm:gap-6">
            <span>Call: <Link className="text-cyan-burst transition-colors hover:text-aqua-glow" href="tel:+916356311101">+91 63563 11101</Link></span>
            <span className="hidden sm:inline">Email: <Link className="text-cyan-burst transition-colors hover:text-aqua-glow" href="mailto:info.digigo@gmail.com">info.digigo@gmail.com</Link></span>
          </div>
          <Link className="font-medium text-cyan-burst transition-colors hover:text-aqua-glow" href="/pricing">Pricing</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-burst/20 blur-xl" />
            <Image
              src="/logo.svg"
              alt="DIGIGO Technology"
              width={170}
              height={48}
              className="relative z-10 h-10 w-auto"
              priority
            />
          </div>
          <div className="hidden text-xs leading-tight text-steel-300 sm:block">
            Technology Pvt. Ltd.
            <div className="text-[11px] text-cyan-burst uppercase tracking-[0.16em] font-semibold">
              E-SOFT Electro Hydro Enhancer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-steel-300 md:flex">
          <Link className={cn("transition-colors hover:text-cyan-burst", isActive("/") && "text-steel-50 font-medium")} href="/">Home</Link>
          <Link className={cn("transition-colors hover:text-cyan-burst", pathname.startsWith("/technology") && "text-steel-50 font-medium")} href="/technology">Technology</Link>
          <div className="relative" ref={appsMenuRef}>
            <button
              type="button"
              onClick={() => {
                setAppsOpen((v) => !v);
                setResourcesOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 rounded-full border border-steel-700 px-4 py-2 text-steel-300 transition-all hover:border-cyan-burst/50 hover:text-cyan-burst",
                pathname.startsWith("/applications") && "border-cyan-burst/40 text-steel-50 font-medium"
              )}
              aria-expanded={appsOpen}
              aria-haspopup="menu"
            >
              Applications <ChevronDown className={cn("h-4 w-4 transition-transform", appsOpen && "rotate-180")} />
            </button>
            {appsOpen && (
              <div className="absolute right-0 mt-2 min-w-[240px] rounded-2xl border border-steel-700 bg-steel-900 p-2 shadow-glass animate-fade-in" role="menu">
                {applications.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm text-steel-300 transition-all hover:bg-steel-800 hover:text-cyan-burst",
                      isActive(item.href) && "bg-steel-800 text-steel-50 font-medium"
                    )}
                    onClick={() => setAppsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className={cn("transition-colors hover:text-cyan-burst", pathname.startsWith("/projects") && "text-steel-50 font-medium")} href="/projects">Projects</Link>
          <Link className={cn("transition-colors hover:text-cyan-burst", pathname.startsWith("/clients") && "text-steel-50 font-medium")} href="/clients">Clients</Link>
          <div className="relative" ref={resourcesMenuRef}>
            <button
              type="button"
              onClick={() => {
                setResourcesOpen((v) => !v);
                setAppsOpen(false);
              }}
              className={cn(
                "flex items-center gap-2 rounded-full border border-steel-700 px-4 py-2 text-steel-300 transition-all hover:border-cyan-burst/50 hover:text-cyan-burst",
                isGroupActive(resources) && "border-cyan-burst/40 text-steel-50 font-medium"
              )}
              aria-expanded={resourcesOpen}
              aria-haspopup="menu"
            >
              Resources <ChevronDown className={cn("h-4 w-4 transition-transform", resourcesOpen && "rotate-180")} />
            </button>
            {resourcesOpen && (
              <div className="absolute right-0 mt-2 min-w-[240px] rounded-2xl border border-steel-700 bg-steel-900 p-2 shadow-glass animate-fade-in" role="menu">
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm text-steel-300 transition-all hover:bg-steel-800 hover:text-cyan-burst",
                      isActive(item.href) && "bg-steel-800 text-steel-50 font-medium"
                    )}
                    onClick={() => setResourcesOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link className={cn("transition-colors hover:text-cyan-burst", pathname.startsWith("/contact") && "text-steel-50 font-medium")} href="/contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild size="sm" variant="outline" className="border-steel-600 bg-steel-900/60 text-steel-100 hover:border-cyan-burst hover:bg-steel-800">
            <Link href="/get-quote">Get Quote</Link>
          </Button>
          <Button asChild size="sm" className="bg-gradient-hydro text-white shadow-glow-blue hover:shadow-glow-cyan">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-2xl border border-steel-700 p-3 text-steel-300 transition-all hover:border-cyan-burst/50 hover:text-cyan-burst md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-steel-800 bg-steel-950 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-4 py-4 text-steel-300">
            <Link href="/" className="transition-colors hover:text-cyan-burst">Home</Link>
            <Link href="/technology" className="transition-colors hover:text-cyan-burst">Technology</Link>
            <div>
              <div className="mb-2 text-steel-500">Applications</div>
              <div className="mt-2 flex flex-col gap-2">
                {applications.map((item) => (
                  <Link key={item.href} href={item.href} className="transition-colors hover:text-cyan-burst">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" className="transition-colors hover:text-cyan-burst">Projects</Link>
            <Link href="/clients" className="transition-colors hover:text-cyan-burst">Clients</Link>
            <div>
              <div className="mb-2 text-steel-500">Resources</div>
              <div className="mt-2 flex flex-col gap-2">
                {resources.map((item) => (
                  <Link key={item.href} href={item.href} className="transition-colors hover:text-cyan-burst">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="transition-colors hover:text-cyan-burst">Contact</Link>
            <Button asChild className="w-full bg-gradient-hydro text-white shadow-glow-blue">
              <Link href="/get-quote">Get Quote</Link>
            </Button>
            <Button asChild className="w-full border-steel-600 bg-steel-900/60 text-steel-100 hover:border-cyan-burst hover:bg-steel-800" variant="outline">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
