import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
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
        'comic-black': '#1A1A1A',
        'comic-white': '#FFFFFF',
        'comic-red': '#FF4B4B',
        'comic-blue': '#4B9FFF',
        'comic-yellow': '#FFD54B',
        'comic-green': '#4BFF4B',
        'comic-purple': '#9F4BFF',
        'comic-background': '#E8F3FF',
      },
      fontFamily: {
        bangers: ['var(--font-bangers)'],
        comic: ['var(--font-comic)'],
      },
      backgroundImage: {
        'halftone-dots': 'radial-gradient(circle, #000 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-sm': '10px 10px',
        'dots-md': '15px 15px',
        'dots-lg': '20px 20px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;