import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title =
  "E-Soft by DIGIGO | Premium Electronic Water Treatment";
const description =
  "E-Soft by DIGIGO delivers premium electronic water treatment for luxury residences, estates, hotels, and high-performance facilities.";
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
