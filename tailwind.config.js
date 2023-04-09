/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF'
      },
      screens: {
        s: '400px',
        m: '450px',
        sm: '640px',
        md: '768px',
        lg: '1024px'
      }
    },
  },
  plugins: [],
}

