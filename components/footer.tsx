import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-16 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-6">
          <div className="text-2xl font-black tracking-[0.14em] gradient-text">DIGIGO</div>
          <p className="text-muted leading-relaxed">
            Leading provider of advanced hard water treatment solutions with E-SOFT technology. Designed and manufactured in India for Indian water conditions.
          </p>
          <div className="space-y-2 text-sm text-muted">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Basil Skyline, S.P. Ring Road, Ahmedabad, Gujarat, India
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Phone: <Link className="text-neon hover:text-neon-bright transition-colors" href="tel:+916356311101">+91 63563 11101</Link>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon"></span>
              Email: <Link className="text-neon hover:text-neon-bright transition-colors" href="mailto:info.digigo@gmail.com">info.digigo@gmail.com</Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-muted md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="text-ink font-semibold text-base">Company</div>
            <div className="space-y-3">
              <Link href="/about" className="block hover:text-neon transition-colors">About Us</Link>
              <Link href="/technology" className="block hover:text-neon transition-colors">Technology</Link>
              <Link href="/projects" className="block hover:text-neon transition-colors">Projects</Link>
              <Link href="/clients" className="block hover:text-neon transition-colors">Clients</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-ink font-semibold text-base">Applications</div>
            <div className="space-y-3">
              <Link href="/applications/agriculture" className="block hover:text-neon transition-colors">Agriculture</Link>
              <Link href="/applications/residential" className="block hover:text-neon transition-colors">Residential</Link>
              <Link href="/applications/commercial" className="block hover:text-neon transition-colors">Commercial</Link>
              <Link href="/applications/industrial" className="block hover:text-neon transition-colors">Industrial</Link>
              <Link href="/applications/hospitals" className="block hover:text-neon transition-colors">Hospitals</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-ink font-semibold text-base">Resources</div>
            <div className="space-y-3">
              <Link href="/government-projects" className="block hover:text-neon transition-colors">Government Projects</Link>
              <Link href="/impact" className="block hover:text-neon transition-colors">Impact & Savings</Link>
              <Link href="/faq" className="block hover:text-neon transition-colors">FAQ</Link>
              <Link href="/knowledge" className="block hover:text-neon transition-colors">Knowledge Base</Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-ink font-semibold text-base">Legal & Support</div>
            <div className="space-y-3">
              <Link href="/privacy" className="block hover:text-neon transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block hover:text-neon transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="block hover:text-neon transition-colors">Sitemap</Link>
              <Link href="/contact" className="block hover:text-neon transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border bg-surface-2 py-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-center text-sm text-muted md:flex-row md:justify-between md:text-left">
          <p>© {year} DIGIGO Technology Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <Link href="/privacy" className="hover:text-neon transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-neon transition-colors">Terms</Link>
            <Link href="/sitemap" className="hover:text-neon transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
