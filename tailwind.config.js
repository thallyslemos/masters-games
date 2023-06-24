/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {

      },
      colors:{
        'BLUE-1':'#1d42cf',
        'BLUE-2':'#3888fc',
        'LIGTH-BLUE': '#dcebff',
        'GREY-BLUE': '#566384',
        'DARK-BLUE': '#1f2f59'
      }
    },
  },
  plugins: [],
}
