'use client';

import { PageHero } from "@/components/page-hero";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Legal"
        title="Terms of Service"
        subtitle="Commercial and service expectations for E-SOFT sizing, installation, and support."
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl space-y-4 text-slate-700">
          <div className="luxury-panel p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm">
              <li>E-SOFT systems are sized based on provided flow and hardness/TDS data.</li>
              <li>Warranty and service scope is finalized in the approved quotation.</li>
              <li>Installation requires power near pipe; coil mounting is non-invasive.</li>
              <li>Published content is informational and may change without prior notice.</li>
            </ul>
          </div>
          <div className="luxury-panel p-6">
            <p className="text-sm">
              For detailed commercial terms, request a formal proposal or email <span className="font-semibold">info.digigo@gmail.com</span>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
