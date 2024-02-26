/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0068f5",
        secondary:"#cfe2fe",
        bg_primary:"#f3f6fb",
        bg_secondary:"#ffffff",
        t_primary:"#000000",
        t_secondary:"#ffffff"
      },
      fontFamily: {
        body: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
