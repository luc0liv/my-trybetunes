/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#111716ff',
        darkPurple: '#321650',
        pink: '#9e768fff',
        blue: '#9fa4c4ff',
        teaGreen: '#c7f0bdff',
      },
    },
  },
  plugins: [],
};
