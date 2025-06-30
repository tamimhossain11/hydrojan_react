/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class', // 👈 Required for dark mode to work via `class`
  theme: {
  extend: {
    colors: {
      glass: "rgba(255, 255, 255, 0.1)",
    },
    backdropBlur: {
      xs: "2px",
    },
  },
},
  plugins: [],
}
