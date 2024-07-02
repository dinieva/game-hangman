import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/game-hangman/',
  build: {
    outDir: './docs',
    emptyOutDir: true // also necessary
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      //  '@': path.resolve(__dirname, './src'),
    }
  }
})
