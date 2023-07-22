/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        loading: "url('../../public/hero-home.png')",
        smoke: "url('../../public/bg-smoke.png')",
        snacks: "url('/snacks-bg.jpeg')",
        shisha: "url('/shisha-bg-small.png')",
        drinks: "url('/drinks-bg.jpg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
