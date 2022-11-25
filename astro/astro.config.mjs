import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { remarkReadingTime } from './src/reading-time.ts';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://cc0d35.github.io',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'dracula',
    },
  },
  // https://github.com/withastro/astro/pull/5369
  integrations: [mdx(), sitemap(), /*tailwind()*/, solidJs(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })]
});
