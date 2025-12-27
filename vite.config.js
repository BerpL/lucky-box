import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Usar variable de entorno para base path, por defecto '/' para Vercel
// Para GitHub Pages, establecer VITE_BASE_PATH=/lucky-box/ en el workflow
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base: base,
  server: {
    port: 3000,
    open: true
  },
  build: {
    chunkSizeWarningLimit: 3000
  }
})

