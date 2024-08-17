/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2C3E50",
        green: "#1ABC9C",
        greenHover: "rgba(26,188,156,0.77)",
        footer: "#1A252F",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
