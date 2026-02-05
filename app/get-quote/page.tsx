import { PageHero } from "@/components/page-hero";
import { GetQuoteForm } from "@/components/get-quote-form";

export const metadata = {
  title: "Get Quote | DIGIGO E-SOFT",
  description: "Share your pipe size, flow, hardness/TDS, and application. We will size E-SOFT and send a quote.",
};

export default function GetQuote() {
  return (
    <main className="pb-16">
      <PageHero
        kicker="Get Quote"
        title="Request a Quote"
        subtitle="Share pipe size, flow profile, hardness/TDS, and application. We will size E-SOFT and respond with configuration and investment range."
      />

      <GetQuoteForm />
    </main>
  );
}
