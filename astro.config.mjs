import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), react()],
  output: 'server', //just know that i'm doing this angrily and out of spite because for some reason you cant redirect unless ur in ssr mode and imma cry WAAAA",
  adapter: netlify()

});