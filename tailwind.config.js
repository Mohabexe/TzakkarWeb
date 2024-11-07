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
      },
      animation: {
        scroll: "scroll 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
