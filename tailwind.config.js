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
        sngrstudio: {
          primary: '#26B9E5',
          secondary: '#ADE8F6',
          accent: '#FF00FF',
          neutral: '#000000',
          'base-100': '#ffffff',
          info: '#24bac8',
          success: '#15d671',
          warning: '#f6d60f',
          error: '#fe343c',
        },
      },
    ],
  },
}
