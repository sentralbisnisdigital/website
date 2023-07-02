import { defineConfig } from 'astro/config'

// Astro integrations
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import AstroPWA from '@vite-pwa/astro'
import mdx from '@astrojs/mdx'

// Vite plugins
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

import manifest from './src/includes/manifest.json' assert { type: 'json' }

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sbdigital.id',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    AstroPWA({
      strategies: 'injectManifest',
      srcDir: 'src/includes',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      manifest,
    }),
  ],
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
