/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Listed in full (not via extend) so `fold` is emitted between `sm` and
    // `md` - appending it would let it override the wider breakpoints.
    // Unfolded book-style phones report a near square viewport around 750px,
    // just under `md`, which otherwise leaves them on the phone layout.
    screens: {
      sm: '640px',
      fold: '700px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
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
