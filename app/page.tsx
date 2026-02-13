import type { Metadata } from "next";
import { HomePageLiquid } from "@/components/homepage-liquid";

export const metadata: Metadata = {
  title: "DIGIGO | Electronic Water Conditioning for Hard Water and Scale Control",
  description:
    "E-SOFT Electro Hydro Enhancer by DIGIGO: salt-free, chemical-free, zero-waste electronic water conditioning for residential, commercial, industrial, and agricultural applications.",
  openGraph: {
    title: "DIGIGO | Electronic Water Conditioning for Hard Water and Scale Control",
    description:
      "Experience scale control without salt, resin, or backwash. DIGIGO E-SOFT keeps pipelines and equipment cleaner while retaining minerals.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageLiquid />;
}
