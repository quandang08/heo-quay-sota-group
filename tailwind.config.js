/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'pig-red': '#261712', 
        'pig-gold': '#D4AF37',
        'pig-gold-light': '#F9E29F',
        'pig-dark': '#0F0A08',
        'pig-gray': '#6B7280',
        'pig-blue': '#2563EB',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}