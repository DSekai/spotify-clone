import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
// import netlify from "@astrojs/netlify";
// import node from "@astrojs/node"

import react from "@astrojs/react";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  })
  // adapter: netlify({
  //   dist: new URL('./dist/', import.meta.url),
  //   builders: true,
  //   edgeFunctions: false
  // })
});