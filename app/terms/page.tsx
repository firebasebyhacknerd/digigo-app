export const metadata = {
  title: "Terms of Use | DIGIGO Technology",
  description: "Terms of use for DIGIGO Technology website and information.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-12">
      <h1 className="text-3xl font-semibold text-white">Terms of Use</h1>
      <p className="text-white/70">
        The information on this site is provided for technical and commercial evaluation of DIGIGO E-SOFT systems. Specifications may
        change as part of continuous improvement. Use of the site constitutes acceptance of these terms.
      </p>
      <p className="text-white/70">
        No warranties are expressed or implied. Performance outcomes depend on water chemistry, flow conditions, and installation quality.
      </p>
      <p className="text-white/70">
        For binding proposals, request a formal quotation and technical datasheet. All trademarks belong to their respective owners.
      </p>
    </main>
  );
}
