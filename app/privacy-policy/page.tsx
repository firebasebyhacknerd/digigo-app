"use client";

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Privacy Policy</h1>
      <p className="text-slate-600">We collect contact details to size and quote E-SOFT systems. Data is stored securely and not sold to third parties.</p>
      <ul className="list-disc space-y-2 pl-5 text-slate-600 text-sm">
        <li>Data collected: name, phone, email, city, sector, pipe size, message.</li>
        <li>Purpose: respond to inquiries, provide quotes, schedule consultations.</li>
        <li>Storage: secure databases with restricted access.</li>
        <li>Retention: kept only as long as necessary for service and compliance.</li>
        <li>Cookies: basic analytics and session cookies; no tracking ads.</li>
      </ul>
      <p className="text-sm text-slate-600">For questions or deletion requests, email info.digigo@gmail.com.</p>
    </main>
  );
}
