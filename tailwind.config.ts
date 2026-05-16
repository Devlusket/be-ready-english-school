import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          dark:  "#0F2560",
          DEFAULT: "#1A3A8F",
          mid:   "#1D4ED8",
          light: "#2563EB",
        },
        red:   { DEFAULT: "#C0392B" },
        gold:  { DEFAULT: "#D4A843" },
        offwhite: "#F8F7F4",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        script:  ["var(--font-dancing)", "cursive"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;