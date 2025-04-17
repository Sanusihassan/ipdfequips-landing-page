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
  })
  ],
  site: "https://www.pdfequips.com",
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  },
});
