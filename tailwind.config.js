// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode:"class",
    content: ['html','./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
          colors: {
            'brand-primary-color': '#0B0271',
          },
        },
      },
    plugins: [],
  }