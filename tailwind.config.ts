import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#0a0b0f",
        "surface-2": "#141521",
        "surface-3": "#1a1d2e",
        "surface-4": "#222538",
        ink: "#f8fafc",
        "ink-secondary": "#e2e8f0",
        muted: "#94a3b8",
        accent: "#22d3ee",
        primary: "#06b6d4",
        "primary-dark": "#0891b2",
        neon: "#10b981",
        "neon-bright": "#34d399",
        "neon-ice": "#7dd3fc",
        "neon-purple": "#a78bfa",
        "neon-pink": "#f472b6",
        border: "rgba(255,255,255,0.06)",
        "border-light": "rgba(255,255,255,0.1)",
        glass: "rgba(255,255,255,0.03)",
      },
      boxShadow: {
        glow: "0 25px 80px rgba(0,0,0,0.45)",
        "soft-glow": "0 20px 70px rgba(16,185,129,0.12)",
        "neon-glow": "0 0 40px rgba(16,185,129,0.3)",
        "accent-glow": "0 0 30px rgba(34,211,238,0.25)",
        "card-glow": "0 8px 32px rgba(0,0,0,0.3)",
        "hover-glow": "0 12px 48px rgba(16,185,129,0.2)",
      },
      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      fontFamily: {
        display: ["var(--font-space)", "Inter", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        pulseLine: {
          "0%": { transform: "translateX(-30%)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "neon-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(16,185,129,0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(16,185,129,0.8)" },
        },
      },
      animation: {
        pulseLine: "pulseLine 3s ease-in-out infinite",
        ticker: "ticker 16s linear infinite",
        float: "float 2.6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [animate],
};

export default config;
