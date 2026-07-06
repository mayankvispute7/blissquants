/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#95D600",
        green: {
          light: "#B8F03D",
          DEFAULT: "#95D600",
          dark: "#7BC043",
          accent: "#A3C957"
        },
        dark: "#0B0B0B",
        light: "#FFFFFF",
        grey: {
          DEFAULT: "#F5F5F5"
        },
        text: "#1A1A1A"
      },
      fontFamily: {
        heading: ['"Archivo Black"', 'sans-serif'], // Renamed to heading to avoid Tailwind conflicts
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        numbers: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(149, 214, 0, 0.05)',
        'premium': '0 20px 40px -10px rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}