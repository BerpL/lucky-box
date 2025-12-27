import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lucky-box/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 3000
  }
})

