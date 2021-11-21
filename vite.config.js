import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    fs: {
      strict: false,
    },
  },
  css: {
    preprocessorOptions: {
      scss: { 
         // example : additionalData: `@import "./src/design/styles/variables";`
         // dont need include file extend .scss
         additionalData: `@import "./src/styles/_variables";` 
     },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
