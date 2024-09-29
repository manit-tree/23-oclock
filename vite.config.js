import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import browserslist from 'browserslist';
import {browserslistToTargets} from 'lightningcss';

export default defineConfig({
  plugins: [preact(), VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'script',
    minify: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: "23 O'Clock",
      short_name: "23 O'Clock",
      description: "A simple but cool digital clock.",
      theme_color: "#121212",
      background_color: "#121212",
      orientation: "any",
      display: "fullscreen",
      start_url: "/index.html",
      scope: '/'
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    },

    includeAssets: [
      "**/*"
    ]
  })],
  build: {
    minify: false
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%'))
    }
  }
})