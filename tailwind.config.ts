import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: ["bg-ivory"], // 👈 belangrijk
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ivory: "#FFFFF0", // 👈 hier voeg je ivory toe
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
