import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": path.resolve(__dirname, 'src'),
    "apis": path.resolve(__dirname, 'src/apis'),
    "comp": path.resolve(__dirname, 'src/components'),
    "icon": path.resolve(__dirname, 'src/icons'),
    "lang": path.resolve(__dirname, 'src/lang'),
    "views": path.resolve(__dirname, 'src/views'),
    "layout": path.resolve(__dirname, 'src/layout'),
    "plugins": path.resolve(__dirname, 'src/plugins'),
    "routes": path.resolve(__dirname, 'src/routes'),
    "styles": path.resolve(__dirname, 'src/styles'),
    "store": path.resolve(__dirname, 'src/store'),
    "utils": path.resolve(__dirname, 'src/utils')
  },
  plugins: [vue()]
})
