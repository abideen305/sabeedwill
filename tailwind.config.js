/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-green': '#1A5D1A',
        'gold': '#FFD700',
        'cream': '#FFFDD0',
        'charcoal': '#333333',
        'sky-blue': '#87CEEB',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'lato': ['Lato', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};