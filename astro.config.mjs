import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    react()
  ],
  server: {
    host: '0.0.0.0',
    port: 4321
  },
  // Optimización de assets estáticos
  build: {
    assets: '_astro'
  },
  // Configure for different backend APIs
  vite: {
    plugins: [
      tailwindcss()
    ],
    server: {
      allowedHosts: ['localhost', '127.0.0.1'],
      watch: {
        usePolling: true,
        interval: 1000
      }
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom']
          }
        }
      },
      assetsInlineLimit: 0 // Evita inline de assets pequeños
    }
  },
  image: {
    domains: [],
  }
});