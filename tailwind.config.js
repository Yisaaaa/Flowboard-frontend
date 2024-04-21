/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD803",
        heading: "#272343",
        body: "#2D334A",
        "bg-primary": "#FFEC82",
      },
    },
  },
  plugins: [],
};
