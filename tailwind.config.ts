import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "#D35400",
          50: "#fdf0e7",
          100: "#fbe1cf",
          200: "#f7c39f",
          300: "#f3a56f",
          400: "#ef873f",
          500: "#E67E22",
          600: "#D35400",
          700: "#a84300",
        },
        navy: {
          DEFAULT: "#002B5B",
          50: "#e6eef5",
          100: "#ccdcea",
          200: "#99b9d5",
          300: "#6697c0",
          400: "#3375aa",
          500: "#004a8f",
          600: "#002B5B",
          700: "#002249",
          800: "#001a37",
          900: "#001125",
        },
        dark: "#333333",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted) / <alpha-value>)",
        },
        border: "var(--color-border)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        premium:
          "0 4px 24px -4px rgba(0, 43, 91, 0.08), 0 8px 48px -8px rgba(0, 43, 91, 0.06)",
        glow: "0 0 40px -8px rgba(211, 84, 0, 0.35)",
        "glow-lg": "0 0 80px -12px rgba(211, 84, 0, 0.4)",
        glass: "0 8px 32px rgba(0, 43, 91, 0.06)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, rgb(0, 43, 91) 0%, rgb(0, 74, 143) 100%)",
        "gradient-accent":
          "linear-gradient(135deg, rgb(211, 84, 0) 0%, rgb(230, 126, 34) 100%)",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-hero":
          "linear-gradient(180deg, rgb(var(--background) / 0) 0%, rgb(var(--background)) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
