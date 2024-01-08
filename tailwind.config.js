/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#E1ECC8",
        fieldColor: "#A4BE7B",
        primaryButton: "#285430",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
