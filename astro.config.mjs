import { defineConfig } from 'astro/config'

// Astro integrations
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import AstroPWA from '@vite-pwa/astro'
import mdx from '@astrojs/mdx'

// Vite plugins
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'
import yaml from '@modyfi/vite-plugin-yaml'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sentralbisnisdigital.co.id',
  integrations: [
    react(),
    mdx(),
    sitemap(),
    AstroPWA({
      strategies: 'injectManifest',
      srcDir: 'src/assets',
      filename: 'sw.ts',
      registerType: 'autoUpdate',
      manifest: {
        name: 'Sentral Bisnis Digital',
        short_name: 'Sentral Bisnis Digital',
        description: '',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  vite: {
    plugins: [
      yaml(),
      svgr(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
    ],
  },
})
