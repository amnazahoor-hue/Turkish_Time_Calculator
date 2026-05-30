import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",
        "primary-dark": "var(--c-primary-dark)",
        "primary-light": "var(--c-primary-light)",
        accent: "var(--c-accent)",
        "accent-dark": "var(--c-accent-dark)",
        "accent-light": "var(--c-accent-light)",
        heading: "var(--c-text-primary)",
        body: "var(--c-text-body)",
        muted: "var(--c-text-muted)",
        inverse: "var(--c-text-inverse)",
        "on-accent": "var(--c-text-on-accent)",
        border: "var(--c-border)",
        "border-strong": "var(--c-border-strong)",
        "bg-page": "var(--c-bg-page)",
        "bg-card": "var(--c-bg-card-solid)",
        "bg-overlay": "var(--c-bg-overlay)",
        success: "var(--c-success)",
        "success-bg": "var(--c-success-bg)",
        error: "var(--c-error)",
        "error-bg": "var(--c-error-bg)",
        warning: "var(--c-warning)",
        /* legacy aliases — map to ocean teal tokens */
        "text-primary": "var(--c-text-primary)",
        "text-secondary": "var(--c-text-body)",
        "bg-light": "var(--c-bg-overlay)",
        "footer-bg": "var(--c-primary-dark)",
        button: "var(--c-accent)",
        hover: "var(--c-accent-dark)",
        secondary: "var(--c-primary-dark)",
        "on-primary": "var(--c-text-on-accent)",
        "on-dark": "var(--c-text-inverse)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "hero-mobile": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        section: ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "section-mobile": ["1.625rem", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        card: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "card-mobile": ["1.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-mobile": ["0.9375rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.8125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "small-mobile": ["0.75rem", { lineHeight: "1.6", fontWeight: "400" }],
        btn: ["0.9375rem", { lineHeight: "1.4", fontWeight: "500" }],
        "btn-mobile": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
        nav: ["0.9375rem", { lineHeight: "1.4", fontWeight: "500" }],
        "nav-mobile": ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      maxWidth: {
        prose: "680px",
      },
      boxShadow: {
        card: "var(--glass-shadow)",
        "card-hover": "0 12px 40px rgba(14, 116, 144, 0.16)",
      },
      backdropBlur: {
        glass: "18px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
