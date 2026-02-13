import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-steel-800 bg-steel-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-6">
          <div className="relative w-fit">
            <div className="absolute -inset-4 rounded-full bg-cyan-burst/10 blur-2xl" />
            <Image
              src="/logo.svg"
              alt="DIGIGO Technology"
              width={170}
              height={48}
              className="relative z-10 h-10 w-auto"
            />
          </div>
          <p className="leading-relaxed text-steel-300">
            Leading provider of advanced hard water treatment solutions with E-SOFT technology. Designed and manufactured in India for Indian water conditions.
          </p>
          <div className="space-y-2 text-sm text-steel-300">
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-burst" />
              Basil Skyline, S.P. Ring Road, Ahmedabad, Gujarat, India
            </p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-burst" />
              Phone: <Link className="text-cyan-burst transition-colors hover:text-aqua-glow" href="tel:+916356311101">+91 63563 11101</Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-burst" />
              Email: <Link className="text-cyan-burst transition-colors hover:text-aqua-glow" href="mailto:info.digigo@gmail.com">info.digigo@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-steel-300 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-base font-semibold text-steel-100">Company</div>
            <div className="space-y-3">
              <Link href="/about" className="block transition-colors hover:text-cyan-burst">About Us</Link>
              <Link href="/how-it-works" className="block transition-colors hover:text-cyan-burst">How It Works</Link>
              <Link href="/why-not-salt-softener" className="block transition-colors hover:text-cyan-burst">Why E-SOFT</Link>
              <Link href="/pricing" className="block transition-colors hover:text-cyan-burst">Pricing</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-semibold text-steel-100">For You</div>
            <div className="space-y-3">
              <Link href="/for-homes" className="block transition-colors hover:text-cyan-burst">For Homes</Link>
              <Link href="/for-businesses" className="block transition-colors hover:text-cyan-burst">For Businesses</Link>
              <Link href="/for-factories" className="block transition-colors hover:text-cyan-burst">For Factories</Link>
              <Link href="/for-farms" className="block transition-colors hover:text-cyan-burst">For Farms</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-semibold text-steel-100">Support</div>
            <div className="space-y-3">
              <Link href="/installation" className="block transition-colors hover:text-cyan-burst">Installation Guide</Link>
              <Link href="/faq" className="block transition-colors hover:text-cyan-burst">FAQ</Link>
              <Link href="/case-studies" className="block transition-colors hover:text-cyan-burst">Customer Stories</Link>
              <Link href="/contact" className="block transition-colors hover:text-cyan-burst">Contact</Link>
              <Link href="/privacy" className="block transition-colors hover:text-cyan-burst">Privacy Policy</Link>
              <Link href="/terms" className="block transition-colors hover:text-cyan-burst">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-steel-800 bg-steel-900 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-steel-400 md:flex-row md:justify-between md:text-left">
          <p>(c) {year} DIGIGO Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <Link href="/privacy" className="transition-colors hover:text-cyan-burst">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-cyan-burst">Terms</Link>
            <Link href="/sitemap" className="transition-colors hover:text-cyan-burst">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
