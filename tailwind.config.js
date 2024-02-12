/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000", // #ff0000
      },
      backgroundImage: {
        "red-gradient": `linear-gradient(315deg, hsla(0, 83%, 42%, 1) 0%, hsla(8, 87%, 32%, 1) 100%)`,
        "green-gradient": `linear-gradient(315deg, hsla(125, 83%, 42%, 1) 0%, hsla(143, 87%, 32%, 1) 98%)`,
      },
    },
  },
  plugins: [require("daisyui")],
};
