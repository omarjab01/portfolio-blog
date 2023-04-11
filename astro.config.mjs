import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  markdown: { drafts: true },
  integrations: [react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});