import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
// import netlify from "@astrojs/netlify";
import node from "@astrojs/node"

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
  // adapter: netlify({
  //   dist: new URL('./dist/', import.meta.url),
  //   builders: true,
  //   edgeFunctions: false
  // })
});