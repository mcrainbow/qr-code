/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#D5E1EF",
      },
      boxShadow: {
        "3xl": "0px 25px 25px rgba(0, 0, 0, 0.0476518)",
      },
      borderRadius: {
        "1Border": "20px",
      },
      fontSize: {
        titled: ["22px", "28px"],
        small: ["15px", "19px"],
      },
    },
  },
  plugins: [],
};
