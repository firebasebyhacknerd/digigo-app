import type { Metadata } from "next";
import { HomePageCustomer } from "@/components/homepage-customer";

export const metadata: Metadata = {
  title: "E-Soft by DIGIGO | Premium Electronic Water Treatment",
  description:
    "Luxury-positioned electronic water treatment by DIGIGO for residences, hospitality, and high-performance facilities. No salt, no chemicals, and no backwash wastewater.",
  openGraph: {
    title: "E-Soft by DIGIGO | Premium Electronic Water Treatment",
    description:
      "Elevate your water experience with premium electronic conditioning engineered for comfort, asset protection, and sustainability.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageCustomer />;
}
