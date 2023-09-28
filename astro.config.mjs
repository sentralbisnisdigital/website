import { defineConfig, sharpImageService } from 'astro/config'

// Astro integrations
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import AstroPWA from '@vite-pwa/astro'
import markdoc from '@astrojs/markdoc'
import vercel from '@astrojs/vercel/serverless'

// Vite plugins
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// Other imports
import manifest from './src/includes/manifest.json' assert { type: 'json' }

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sbdigital.id',
  integrations: [
    react(),
    markdoc(),
    sitemap(),
    AstroPWA({
      disable: true,
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
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  compressHTML: true,
  output: 'hybrid',
  adapter: vercel(),
})
