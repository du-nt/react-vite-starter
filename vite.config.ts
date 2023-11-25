import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      constants: '/src/constants',
      hooks: '/src/hooks',
      pages: '/src/pages',
      routes: '/src/routes',
      services: '/src/services',
      stores: '/src/stores',
      styles: '/src/styles',
      types: '/src/types',
      utils: '/src/utils',
      libs: '/src/libs',
      locales: '/locales'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }
})
