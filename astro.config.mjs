import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import netlify from '@astrojs/netlify/edge-functions'
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react(), tailwind()],
  output: 'server',
  adapter: netlify()
});