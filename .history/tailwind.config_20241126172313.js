/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ["'Caveat'", "cursive"],
      },
      animation: {
        fireworks: "fireworks 1.5s ease-out forwards",
        "bingo-fade": "bingo-fade 2s ease-out forwards",
        "bingo-shake": "bingo-shake 0.5s ease-in-out infinite",
      },
      keyframes: {
        fireworks: {
          "0%": {
            transform: "scale(0) translate(0, 0)",
            opacity: 1,
          },
          "50%": {
            transform: "scale(1) translate(var(--x), var(--y))",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2) translate(var(--x), var(--y))",
            opacity: 0,
          },
        },
        "bingo-fade": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "bingo-shake": {
          "0%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(5deg)" },
          "50%": { transform: "rotate(0)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0)" },
        },
      },
    },
  },
  plugins: [],
}

