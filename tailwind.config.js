/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        GreyQo: ["Grey Qo", "cursive"],
      },
      screens: {
        xs: "300px", // Custom screen size for 375px width
        S8: "375px",
      },
    },
  },
  plugins: [],
};
