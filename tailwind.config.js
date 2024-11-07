const { transform } = require("sucrase")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Lalezar: ["Lalezar"],
        Poppins: ["Poppins"],
      },
      keyframes: {
        scroll: {
          "0%": { top: "0" },
          "25%": { top: "-1.2em" },
          "50%": { top: "-2.4em" },
          "75%": { top: "-3.6em" },
          "100%": { top: "0" },
        },
        left: {
          "0%": { transform: "translateX(-300%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        right: {
          "0%": { transform: "translateX(30%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        scroll: "scroll 7s infinite",
        left: "left 0.5s ease-in-out",
        right: "right 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
