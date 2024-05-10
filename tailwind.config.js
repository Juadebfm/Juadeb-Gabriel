/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainBlack: "#040404",
        mainGold: "#fcb43c",
        mainGoldGray: "#FFF7EB",
      },
      animation: {
        "spin-slow": "0.3s linear infinite",
      },
    },
  },
  plugins: [],
};
