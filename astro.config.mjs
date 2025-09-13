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
    }
  },
  image: {
    domains: [],
  }
});