import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Terms of Use | DIGIGO Technology",
  description: "Terms of use for DIGIGO Technology website and information.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        kicker="Legal"
        title="Terms of Use"
        subtitle="Website and information usage terms for DIGIGO Technology and E-SOFT technical content."
        imageSrc="/digigostore-assets/hero-machine.png"
      />

      <section className="py-14">
        <div className="section-shell max-w-4xl space-y-4 text-slate-700">
          <div className="luxury-panel p-6">
            <p>
              Information on this site is provided for technical and commercial evaluation of DIGIGO E-SOFT systems.
              Specifications may change through continuous product improvement.
            </p>
          </div>
          <div className="luxury-panel p-6">
            <p>
              No warranties are expressed or implied. Performance outcomes depend on water chemistry, flow conditions,
              operating duty, and installation quality.
            </p>
          </div>
          <div className="luxury-panel p-6">
            <p>
              For binding commercial terms, request a formal quotation and technical datasheet.
              Trademarks and references remain property of their respective owners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
