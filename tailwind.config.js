/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Basis_Grotesque_Pro_Bold: ["Basis_Grotesque_Pro_Bold"],
      },
      textColors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
    },
    screens: {
      md: { max: "1200px" },
      sm: { max: "768px" },
    },
  },
  plugins: [],
};
