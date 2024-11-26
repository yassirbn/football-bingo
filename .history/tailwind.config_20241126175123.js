/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ["'Caveat'", "cursive"],
      },
      keyframes: {
        explode: {
          "0%": { transform: "scale(0)", opacity: 1 },
          "50%": { transform: "scale(1.2)", opacity: 0.8 },
          "100%": { transform: "scale(0)", opacity: 0 },
        },
      },
      animation: {
        explode: "explode 1.5s ease-out forwards", // Apply animation once
      },
    },
  },
  plugins: [],
}


