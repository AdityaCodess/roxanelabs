/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pharma: {
          blue: '#003366', // Deep Navy (Trust)
          light: '#F0F4F8', // Clinical Light Blue (Cleanliness)
          teal: '#008080', // Medical Teal (Health)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font
      },
    },
  },
  plugins: [],
}