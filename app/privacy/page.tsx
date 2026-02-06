export const metadata = {
  title: "Privacy Policy | DIGIGO Technology",
  description: "Privacy policy for DIGIGO Technology Pvt. Ltd. lead capture and site usage.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="text-slate-600">
        We collect contact details (name, phone, email, city, sector, pipe size, message) solely to respond to your enquiry and
        provide sizing / quotations. Data is stored in Firebase in a preferred region. We do not sell or share personal data with
        third parties.
      </p>
      <p className="text-slate-600">
        Analytics: Google Analytics / Tag Manager may be used to measure site performance. Cookies may be used for session management.
      </p>
      <p className="text-slate-600">
        You may request deletion of your data by emailing connect@digigo.in. This policy applies to all visitors and customers.
      </p>
    </main>
  );
}
