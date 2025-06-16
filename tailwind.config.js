/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#10B981', // Tailwind green-500 alternative
      dark: '#1E1E2F',
      light: '#F8FAFC'
    },
    borderRadius: {
      lg: '2rem',
    },
  },
}
,
  plugins: [],
}
