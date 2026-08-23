import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./constants/**/*.{ts,tsx}", "./hooks/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1180px" } },
    extend: {
      colors: { background: "var(--background)", surface: "var(--surface)", "surface-strong": "var(--surface-strong)", foreground: "var(--foreground)", muted: "var(--muted)", border: "var(--border)", "border-strong": "var(--border-strong)", accent: "var(--accent)", "accent-soft": "var(--accent-soft)", gold: "var(--gold)" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"], mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"] },
      letterSpacing: { tightest: "-0.075em" },
      transitionTimingFunction: { smooth: "cubic-bezier(0.22, 1, 0.36, 1)" }
    }
  },
  plugins: [animate]
};

export default config;
