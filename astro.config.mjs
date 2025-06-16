import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import pwa from '@vite-pwa/astro';

export default defineConfig({
  integrations: [react(),
  pwa({
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    manifestFilePath: 'public/manifest.json',
    includeManifestIcons: false,
    manifest: false,
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
      // Exclude all HTML pages from caching
      globIgnores: ['**/*.html'],
      // Configure runtime caching to skip HTML pages
      runtimeCaching: [
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
            }
          }
        },
        {
          urlPattern: /\.(?:js|css)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'static-resources'
          }
        },
        {
          // Skip caching for all HTML pages and navigation requests
          urlPattern: ({ request }) => request.mode === 'navigate' || request.destination === 'document',
          handler: 'NetworkOnly'
        }
      ],
      // Skip waiting for service worker activation
      skipWaiting: true,
      clientsClaim: true,
      // Don't cache navigation requests
      navigateFallback: null
    }
  })
  ],
  site: "https://www.pdfequips.com",
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  },
});