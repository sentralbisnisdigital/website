/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,ts,tsx,md,mdx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        sbdigital: {
          primary: '#26B9E5',
          secondary: '#004D74',
          accent: '#8e408a',
          neutral: '#344A53',
          'base-100': '#FDFDFD',
        },
      },
    ],
  },
}
