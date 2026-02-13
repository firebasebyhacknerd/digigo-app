'use client';

import { PageHero } from "@/components/page-hero";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        subtitle="Summary of customer data handling for enquiries, quotations, and support communication."
        imageSrc="/digigostore-assets/home-lifestyle.jpg"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl space-y-4 text-slate-700">
          <div className="luxury-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>Data collected: name, phone, email, city, sector, pipe size, message.</li>
              <li>Purpose: respond to enquiries, provide quotes, schedule consultations.</li>
              <li>Storage: secured systems with restricted access.</li>
              <li>Retention: only for business and compliance need.</li>
              <li>Cookies: session and analytics cookies; no third-party ad tracking by default.</li>
            </ul>
          </div>
          <div className="luxury-panel p-6">
            <p className="text-sm">
              For questions or deletion requests, email <span className="font-semibold">info.digigo@gmail.com</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
