/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#094B72",
        secondary: "#FFFFFF",
        tertiary: "#F1F7FF",
        quaternary: "#039ABA",
        background: "#6EA8FF",
        primary_text: "#2D2F30",
        secondary_text: "#8B8C8C",
        sub_color: "#094B72",
      },
      fontFamily: {
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
