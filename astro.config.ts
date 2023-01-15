import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'
import compress from 'astro-compress'
import critters from 'astro-critters'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.sentralbisnisdigital.co.id',
  integrations: [react(), compress(), critters(), sitemap()],
  vite: {
    plugins: [
      svgr(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
})
