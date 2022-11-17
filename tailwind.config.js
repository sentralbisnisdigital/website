/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}', './public/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      {
        sngrstudio: {
          primary: '#417AFF',
          secondary: '#B72FFF',
          accent: '#FF00FF',
          neutral: '#0A0612',
          'base-100': '#F5F6F3',
          info: '#0a0512',
          success: '#489e7e',
          warning: '#c68e46',
          error: '#f44336',
        },
      },
    ],
  },
}
