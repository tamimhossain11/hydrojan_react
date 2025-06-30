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
        primary: '#0e1120',
        secondary: '#1a1c29',
        accent: '#3dd3fc',
        muted: '#ffffff1a',

      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
