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
        "lab-black": "#0a0e27",
        "lab-dark": "#1a1f3a",
        "lab-accent": "#00d9ff",
        "lab-accent-dark": "#00a8cc",
        "lab-purple": "#7c3aed",
        "lab-gold": "#d4af37",
        "lab-red": "#ff4d00",
        background: "#0a0e27",
        foreground: "#f0f4f8",
        card: "#1a1f3a",
        "card-foreground": "#f0f4f8",
        border: "#2a2f4a",
        input: "#1a1f3a",
        "muted-foreground": "#4b5563",
        popover: "#1a1f3a",
        "popover-foreground": "#f0f4f8",
        accent: "#00d9ff",
        "accent-foreground": "#0a0e27",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 217, 255, 0.3)",
        "glow-purple": "0 0 20px rgba(124, 58, 237, 0.3)",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
