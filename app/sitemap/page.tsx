"use client";

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
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Sitemap</h1>
      <ul className="grid gap-2 sm:grid-cols-2 text-sm text-slate-600">
        {links.map((href) => (
          <li key={href}>
            <a className="text-neon" href={href}>{href}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
