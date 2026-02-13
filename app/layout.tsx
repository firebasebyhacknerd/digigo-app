import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

const display = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title =
  "DIGIGO Technology | E-SOFT Electro Hydro Enhancer - Industrial-Grade Electronic Water Conditioning";
const description =
  "DIGIGO Technology Pvt. Ltd. (founded 2012, HQ Ahmedabad) builds E-SOFT, a 6th-generation electronic water conditioning system: salt-free, chemical-free, zero water waste, 30+ year design life.";
const url = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "DIGIGO Technology",
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: "DIGIGO Technology",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-surface text-ink antialiased">
        <Navbar />
        {children}
        <FloatingCTA />
        <Footer />
        {/* Google Analytics / GTM placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `// Insert GA4 / GTM snippet here`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DIGIGO Technology Pvt. Ltd.",
              url,
              logo: `${url}/logo.svg`,
              description: description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Basil Skyline, S.P. Ring Road",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                addressCountry: "IN",
              },
              foundingDate: "2012-01-01",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-63563-11101",
                  contactType: "sales",
                  areaServed: "IN",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
