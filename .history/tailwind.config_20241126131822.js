/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fireworks: "fireworks 1s ease-out forwards",
        "bingo-fade": "bingo-fade 1s ease-out forwards",
      },
      keyframes: {
        fireworks: {
          "0%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.5)", opacity: 1 },
          "100%": { transform: "scale(2)", opacity: 0 },
        },
        "bingo-fade": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

