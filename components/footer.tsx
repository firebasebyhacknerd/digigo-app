import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070c]/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="text-lg font-black tracking-[0.14em] text-white">
            DIGIGO
          </div>
          <p className="text-sm text-white/70">
            DIGIGO Technology Pvt. Ltd. (founded 2012, Ahmedabad) builds E-SOFT
            Electro Hydro Enhancer systems: salt-free, chemical-free, zero water
            waste, 30+ year design life.
          </p>
          <p className="text-xs text-white/60">
            Basil Skyline, S.P. Ring Road, Ahmedabad, Gujarat, India
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm text-white/70 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-white font-semibold">Company</div>
            <Link href="/about">About</Link>
            <Link href="/proof">Proof</Link>
            <Link href="/knowledge">Knowledge Hub</Link>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Solutions</div>
            <Link href="/solutions/residential">Residential</Link>
            <Link href="/solutions/agriculture">Agriculture</Link>
            <Link href="/solutions/commercial">Commercial</Link>
            <Link href="/solutions/industrial">Industrial</Link>
          </div>
          <div className="space-y-2">
            <div className="text-white font-semibold">Legal</div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#04060b] py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} DIGIGO Technology Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
