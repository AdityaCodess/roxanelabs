import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Standardized Clinical B2B Pharma Palette
        pharma: {
          light: "#F8FAFC",          // <-- Restored to fix globals.css build error!
          navy: "#0B1D3A",           // Main Banners & Hero Backgrounds
          "navy-light": "#12294C",   // Secondary Tickers, Cards & Badges
          "navy-border": "#162D50",  // Subtle Dividers & Borders on Navy
          emerald: "#059669",        // Primary Actions & Buttons
          "emerald-light": "#10B981",// Hover States & Icons
        },
      },
    },
  },
  plugins: [],
};

export default config;