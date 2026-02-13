import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Need Help Choosing?
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                Talk to a Water Treatment Expert
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:+916356311101"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <Link
                href="https://wa.me/916356311101"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-5 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div className="space-y-4">
            <Image
              src="/logo.svg"
              alt="DIGIGO Technology"
              width={170}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-sm leading-relaxed text-slate-600">
              Customer-first hard water treatment solutions for homes, businesses,
              factories, and farms.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-slate-900">Company</p>
            <div className="space-y-2 text-sm">
              <Link href="/about" className="block text-slate-600 transition-colors hover:text-blue-700">
                About Us
              </Link>
              <Link href="/why-not-salt-softener" className="block text-slate-600 transition-colors hover:text-blue-700">
                Why Choose Us
              </Link>
              <Link href="/warranty" className="block text-slate-600 transition-colors hover:text-blue-700">
                Warranty
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold text-slate-900">Support</p>
            <div className="space-y-2 text-sm">
              <Link href="/installation" className="block text-slate-600 transition-colors hover:text-blue-700">
                Installation Guide
              </Link>
              <Link href="/faq" className="block text-slate-600 transition-colors hover:text-blue-700">
                FAQ
              </Link>
              <Link href="/case-studies" className="block text-slate-600 transition-colors hover:text-blue-700">
                Customer Stories
              </Link>
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
