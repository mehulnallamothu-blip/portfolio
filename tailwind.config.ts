import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#0b0b0b",
          soft: "#121212"
        }
      },
      boxShadow: {
        glow: "0 0 120px rgba(128, 255, 219, .15)"
      }
    },
  },
  plugins: [],
} satisfies Config;
