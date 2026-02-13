import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const solutionLinks = [
  { label: "For Homes", href: "/for-homes" },
  { label: "For Businesses", href: "/for-businesses" },
  { label: "For Factories", href: "/for-factories" },
  { label: "For Farms", href: "/for-farms" },
];

const resourceLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Technology", href: "/technology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Warranty", href: "/warranty" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
              DIGIGO E-SOFT
            </p>
            <h2 className="mt-1 text-2xl font-bold lg:text-3xl">
              Need a Site-Specific Water Treatment Plan?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-200">
              Share your hard-water challenge and get a clear recommendation for your site.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-blue-900 transition-colors hover:bg-slate-100"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/916356311101"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp Expert
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.35fr_1fr_1fr_1.3fr]">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="DIGIGO Technology"
              width={172}
              height={48}
              className="h-10 w-auto"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-600">
              Industrial-grade electronic water conditioning platform for homes,
              commercial assets, plants, and agriculture.
            </p>
            <div className="space-y-2 text-sm text-slate-700">
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-700" />
                No salt consumables
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-700" />
                No backwash wastewater
              </p>
              <p className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-700" />
                30+ year design-life platform
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <Image
                src="/made-in-india-logo.jpg"
                alt="Made in India"
                width={78}
                height={38}
                className="h-8 w-auto"
              />
              <span className="text-xs font-medium text-slate-600">
                Built for Indian water conditions
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-slate-900">Solutions</p>
            <div className="space-y-2 text-sm">
              {solutionLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-600 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-slate-900">Resources</p>
            <div className="space-y-2 text-sm">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-600 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-slate-900">Contact</p>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-blue-700" />
                <Link href="tel:+916356311101" className="transition-colors hover:text-blue-700">
                  +91 63563 11101
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 text-blue-700" />
                <Link href="https://wa.me/916356311101" className="transition-colors hover:text-blue-700">
                  WhatsApp Chat
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-blue-700" />
                <Link href="mailto:info.digigo@gmail.com" className="transition-colors hover:text-blue-700">
                  info.digigo@gmail.com
                </Link>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-700" />
                Basil Skyline, S.P. Ring Road, Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 py-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>(c) {year} DIGIGO Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex justify-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-blue-700">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-blue-700">
              Terms
            </Link>
            <Link href="/sitemap" className="transition-colors hover:text-blue-700">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
