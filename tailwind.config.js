/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        customBlack: "#0D0D0D",
      },
      container: {
        center: true,
      },
      screens: {
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',
        'xl': '1360px',
      },
    },
  },
  plugins: [],
}