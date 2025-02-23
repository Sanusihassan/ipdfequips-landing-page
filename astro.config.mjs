import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://www.pdfequips.com",
  // 
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  },
});
