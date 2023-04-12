/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'IBM-Plexo':['IBM Plex Mono','serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

