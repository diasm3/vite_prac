import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // '/' : 'http://localhost:8089',
      '/api/': {
        target: 'http://localhost:8089',
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

})
