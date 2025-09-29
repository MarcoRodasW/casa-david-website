// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [{
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter"
    }]
},
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [preact({devtools: true})],
});