'use client';

import { PageHero } from "@/components/page-hero";

const links = [
  "/",
  "/for-homes",
  "/for-businesses",
  "/for-factories",
  "/for-farms",
  "/how-it-works",
  "/why-not-salt-softener",
  "/installation",
  "/shop",
  "/shop/cart",
  "/warranty",
  "/technology",
  "/applications",
  "/applications/agriculture",
  "/applications/residential",
  "/applications/commercial",
  "/applications/industrial",
  "/applications/hospitals",
  "/projects",
  "/government-projects",
  "/clients",
  "/impact",
  "/impact-savings",
  "/faq",
  "/contact",
  "/get-quote",
  "/privacy-policy",
  "/terms-of-service",
];

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Utility"
        title="Sitemap"
        subtitle="Quick route index for customer pages, applications, and utility links."
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl">
          <div className="luxury-panel p-6">
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {links.map((href) => (
                <li key={href}>
                  <a className="font-medium text-blue-700 hover:underline" href={href}>
                    {href}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
