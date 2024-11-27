import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/components/')) {
            return 'components'
          }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
      input: './src/main.jsx',
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
