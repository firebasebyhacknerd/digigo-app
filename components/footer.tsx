import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const links = {
  company: [
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Testimonials", href: "/clients" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "E-Soft Residence", href: "/for-homes" },
    { label: "E-Soft Estate", href: "/for-businesses" },
    { label: "E-Soft Commercial", href: "/for-factories" },
    { label: "E-Soft Industrial", href: "/for-factories" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a2340]/10 bg-[#11182d] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-10 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-r from-[#1a2340] to-[#232f56] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-display text-sm uppercase tracking-[0.2em] text-[#d4af37]">Where Science Meets Sophistication</p>
            <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">Book Your Private Consultation</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200">Premium water treatment assessment with curated recommendation for your property.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link href="/get-quote" className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#1a2340] transition hover:bg-[#e1bf5b]">Book Consultation</Link>
            <Link href="https://wa.me/916356311101" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Concierge WhatsApp</Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Image src="/logo.svg" alt="E-Soft by DIGIGO" width={158} height={44} className="h-10 w-auto" />
            <p className="max-w-sm text-sm text-slate-300">E-Soft by DIGIGO is a premium electronic water treatment solution for discerning homeowners, hospitality leaders, and high-performance facilities.</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37]">Join the E-Soft Collective</p>
            <div className="flex max-w-sm items-center gap-2">
              <input type="email" placeholder="Your email" className="h-11 w-full rounded-full border border-white/20 bg-white/5 px-4 text-sm text-white placeholder:text-slate-400 focus:border-[#d4af37] focus:outline-none" />
              <button className="h-11 rounded-full bg-[#d4af37] px-5 text-sm font-semibold text-[#1a2340] transition hover:bg-[#e1bf5b]">Join</button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Company</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {links.company.map((item) => (
                <Link key={item.href} href={item.href} className="block transition hover:text-white">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Collection</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {links.products.map((item) => (
                <Link key={item.href} href={item.href} className="block transition hover:text-white">{item.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37]">Concierge</h3>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              <p className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[#d4af37]" /><Link href="tel:+916356311101" className="transition hover:text-white">+91 63563 11101</Link></p>
              <p className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[#d4af37]" /><Link href="mailto:concierge@digigostore.com" className="transition hover:text-white">concierge@digigostore.com</Link></p>
              <p className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-[#d4af37]" /><Link href="https://wa.me/916356311101" className="transition hover:text-white">Premium support line</Link></p>
              <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[#d4af37]" />Basil Skyline, S.P. Ring Road, Ahmedabad</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <Link key={idx} href="#" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-[#d4af37] hover:text-[#d4af37]"><Icon className="h-4 w-4" /></Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>(c) {year} DIGIGO Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            {links.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
