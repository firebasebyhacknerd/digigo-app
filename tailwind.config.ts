import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import animate from "tailwindcss-animate";

const brandBlue = {
  50: "#F6F4FF",
  100: "#E9E5FF",
  200: "#D3CCFF",
  300: "#B2A8FF",
  400: "#8C7EF6",
  500: "#695BE0",
  600: "#5045B5",
  700: "#3B388E",
  800: "#2F2B6E",
  900: "#231F53",
  950: "#171437",
};

const brandCyan = {
  50: "#FFF8ED",
  100: "#FFECD2",
  200: "#FFD7A6",
  300: "#FFB76A",
  400: "#F5C518",
  500: "#F36B2A",
  600: "#E0521C",
  700: "#B73E16",
  800: "#8E3118",
  900: "#6E2817",
  950: "#3C130A",
};

const brandSlate = {
  50: "#FFFBF7",
  100: "#FFF5EC",
  200: "#F1E4D8",
  300: "#D8C5B7",
  400: "#B69E8D",
  500: "#8B776A",
  600: "#6B5A50",
  700: "#4C3F38",
  800: "#332A26",
  900: "#221B17",
  950: "#130E0B",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      blue: brandBlue,
      cyan: brandCyan,
      slate: brandSlate,
    },
    extend: {
      colors: {
        surface: "#FFF8F3",
        "surface-2": "#FFFFFF",
        "surface-3": "#FFF1E8",
        "surface-4": "#F9E8DA",
        ink: "#221826",
        "ink-secondary": "#392E3C",
        muted: "#6E6373",
        accent: "#E86A2A",
        primary: "#3B388E",
        "primary-dark": "#2F2B6E",
        neon: "#3B388E",
        "neon-bright": "#F36B2A",
        "neon-ice": "#F5C518",
        "neon-purple": "#6A3A8A",
        "neon-pink": "#D9576A",
        border: "rgba(34,24,40,0.12)",
        "border-light": "rgba(34,24,40,0.08)",
        glass: "rgba(255,255,255,0.75)",
      },
      boxShadow: {
        glow: "0 30px 90px rgba(33,24,40,0.12)",
        "soft-glow": "0 20px 50px rgba(59,56,142,0.18)",
        "neon-glow": "0 0 40px rgba(59,56,142,0.25)",
        "accent-glow": "0 0 30px rgba(232,106,42,0.25)",
        "card-glow": "0 12px 30px rgba(33,24,40,0.08)",
        "hover-glow": "0 16px 40px rgba(59,56,142,0.2)",
      },
      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
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
