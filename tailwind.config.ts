import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import animate from "tailwindcss-animate";

const deprecatedColorAliases = new Set([
  "lightBlue",
  "warmGray",
  "trueGray",
  "coolGray",
  "blueGray",
]);
const tailwindColors = Object.fromEntries(
  Object.entries(colors).filter(([colorName]) => !deprecatedColorAliases.has(colorName))
) as typeof colors;

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
      ...tailwindColors,
      blue: brandBlue,
      cyan: brandCyan,
      slate: brandSlate,
    },
    extend: {
      colors: {
        "deep-ocean": "#0A1128",
        "midnight-blue": "#1E3A5F",
        "electric-blue": "#2E5EFF",
        "cyan-burst": "#00D9FF",
        "aqua-glow": "#00FFF5",
        "solar-orange": "#FF6B35",
        "plasma-pink": "#FF2E97",
        "laser-green": "#00FF94",
        "volt-yellow": "#FFE500",
        steel: {
          50: "#F8F9FA",
          100: "#E8EAED",
          200: "#D1D5DB",
          400: "#8B9099",
          600: "#52585F",
          700: "#3A3F47",
          800: "#2A3038",
          900: "#1A1F26",
          950: "#0F1419",
        },
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
        "glow-blue": "0 0 30px rgba(46,94,255,0.5)",
        "glow-cyan": "0 0 30px rgba(0,217,255,0.5)",
        "glow-orange": "0 0 30px rgba(255,107,53,0.5)",
        "glow-soft": "0 10px 40px rgba(46,94,255,0.3)",
        lift: "0 20px 60px rgba(0,0,0,0.4)",
        glass: "0 8px 32px 0 rgba(31,38,135,0.2)",
      },
      borderRadius: {
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      backgroundImage: {
        "gradient-hydro":
          "linear-gradient(135deg, #2E5EFF 0%, #00D9FF 50%, #00FFF5 100%)",
        "gradient-energy": "linear-gradient(135deg, #FF6B35 0%, #FF2E97 100%)",
        "gradient-dark": "linear-gradient(180deg, #0A1128 0%, #1E3A5F 100%)",
        "gradient-mesh":
          "radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(188, 100%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 52% 99%, hsla(169, 100%, 50%, 0.3) 0px, transparent 50%), radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.3) 0px, transparent 50%)",
      },
      keyframes: {
        "gradient-flow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
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
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(46,94,255,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(46,94,255,0.8)" },
        },
        ripple: {
          "0%": {
            transform: "scale(0)",
            opacity: "0.6",
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0",
          },
        },
      },
      animation: {
        "gradient-flow": "gradient-flow 8s ease infinite",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) backwards",
        pulseLine: "pulseLine 3s ease-in-out infinite",
        ticker: "ticker 16s linear infinite",
        float: "float 2.6s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [animate],
};

export default config;
