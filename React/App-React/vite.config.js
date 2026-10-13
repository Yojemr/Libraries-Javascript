import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.svg', 'icons.svg'],
      manifest: {
        name: 'Mi Primer PWA',
        short_name: 'MyAppPWA',
        description: 'PWA de prueba para React con Vite',
        scope:'/',
        start_url:'/',
        display:'standalone',
        theme_color: '#000000',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'icons.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: 'sena-logo-2.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          }
        ],
      },
    }),
  ],
});
