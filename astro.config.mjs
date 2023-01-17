import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'
import compress from 'astro-compress'
import critters from 'astro-critters'
import sitemap from '@astrojs/sitemap'
import AstroPWA from '@vite-pwa/astro'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sentralbisnisdigital.co.id',
  integrations: [
    react(),
    compress(),
    critters(),
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
    mdx(),
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
