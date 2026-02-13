"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "E-Soft brought a visible quality upgrade to our luxury residential inventory. The no-salt model fits premium living expectations.",
    name: "R. Sharma",
    role: "Villa Owner, Ahmedabad",
    image: "/digigostore-assets/home-lifestyle.jpg",
  },
  {
    quote:
      "For guest-facing assets, water experience is part of brand perception. E-Soft helped us reduce recurring hard-water complaints.",
    name: "A. Desai",
    role: "Operations Head, Luxury Hotel",
    image: "/digigostore-assets/domestic-grade.jpeg",
  },
  {
    quote:
      "The team approach felt curated, from assessment to commissioning. The system aligned with our premium service standards.",
    name: "K. Mehta",
    role: "Director, Premium Hospitality Group",
    image: "/digigostore-assets/industrial-grade.jpeg",
  },
  {
    quote:
      "E-Soft gave us a lower-handling water treatment model without adding chemical or salt complexity.",
    name: "N. Patel",
    role: "Facility Head, Healthcare Campus",
    image: "/digigostore-assets/product-2048.png",
  },
  {
    quote:
      "This is the only water-treatment decision that improved both comfort perception and operational discipline for us.",
    name: "S. Vyas",
    role: "Estate Manager, Luxury Community",
    image: "/digigostore-assets/children-water.png",
  },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [total]);

  const current = testimonials[index];

  const bullets = useMemo(() => testimonials.map((_, idx) => idx), []);

  return (
    <div className="rounded-3xl border border-[#1a2340]/15 bg-white p-5 shadow-[0_20px_60px_rgba(17,22,37,0.10)] lg:p-7">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-100 lg:h-80">
          <Image
            src={current.image}
            alt={`${current.name} testimonial`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2340]/60 to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            Premium Customer Voice
          </div>
        </div>

        <div className="space-y-4">
          <Quote className="h-8 w-8 text-[#d4af37]" />
          <p className="font-display text-2xl leading-relaxed text-[#1a2340] lg:text-3xl">
            {current.quote}
          </p>
          <div>
            <p className="text-base font-semibold text-slate-900">{current.name}</p>
            <p className="text-sm text-slate-600">{current.role}</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              {bullets.map((dot) => (
                <button
                  key={dot}
                  onClick={() => setIndex(dot)}
                  aria-label={`Go to testimonial ${dot + 1}`}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-all",
                    dot === index ? "w-7 bg-[#d4af37]" : "bg-slate-300"
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2340]/20 text-[#1a2340] transition hover:bg-[#1a2340]/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIndex((prev) => (prev + 1) % total)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1a2340]/20 text-[#1a2340] transition hover:bg-[#1a2340]/5"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
