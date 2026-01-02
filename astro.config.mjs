// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ivix2020.github.io',
  base: '/my-astro-blog',
  integrations: [mdx(), sitemap()],
});
