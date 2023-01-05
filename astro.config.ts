import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import Icons from 'unplugin-icons/vite'
import svgr from 'vite-plugin-svgr'

// https://astro.build/config
import compress from 'astro-compress'

// https://astro.build/config
import critters from 'astro-critters'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress(), critters()],
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
