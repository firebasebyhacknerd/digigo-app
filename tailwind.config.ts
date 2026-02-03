import type { Config } from "tailwindcss";

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
        surface: "#05070C",
        "surface-2": "#0B1018",
        "surface-3": "#101827",
        ink: "#E8F1FF",
        muted: "#8EA0C2",
        neon: "#3BF7A6",
        "neon-ice": "#7DF2FF",
        accent: "#1DE5C0",
        border: "rgba(255,255,255,0.08)",
      },
      boxShadow: {
        glow: "0 25px 80px rgba(0,0,0,0.45)",
        "soft-glow": "0 20px 70px rgba(61,252,177,0.16)",
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
      },
      animation: {
        pulseLine: "pulseLine 3s ease-in-out infinite",
        ticker: "ticker 16s linear infinite",
        float: "float 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
