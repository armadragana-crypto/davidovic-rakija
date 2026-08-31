/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1410',
          lighter: '#2a2218',
        },
        gold: {
          DEFAULT: '#D4A05F',
          light: '#E0B570',
        },
        cream: '#F5EFE7',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
