import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// La PWA utiliza archivos estáticos en public/, sin plugin adicional.
export default defineConfig({
  plugins: [react()],
})
