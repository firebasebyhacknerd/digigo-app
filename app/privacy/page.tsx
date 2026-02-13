import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Privacy Policy | DIGIGO Technology",
  description: "Privacy policy for DIGIGO Technology Pvt. Ltd. lead capture and site usage.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Legal"
        title="Privacy Policy"
        subtitle="How DIGIGO collects, stores, and uses customer information for lead response and support workflows."
        imageSrc="/digigostore-assets/home-lifestyle.jpg"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl space-y-4 text-slate-700">
          <div className="luxury-panel p-6">
            <p>
              We collect contact details such as name, phone, email, city, sector, pipe size, and message only to respond to enquiries,
              provide sizing, and issue quotations. Data is stored in Odoo CRM for sales and support follow-up.
            </p>
          </div>
          <div className="luxury-panel p-6">
            <p>
              We do not sell personal data to third parties. Analytics tools such as Google Analytics or Tag Manager may be used to measure site performance.
              Cookies may be used for session and analytics purposes.
            </p>
          </div>
          <div className="luxury-panel p-6">
            <p>
              You may request data deletion by emailing <span className="font-semibold">connect@digigo.in</span>.
              This policy applies to all visitors and customers interacting with DIGIGO digital properties.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
