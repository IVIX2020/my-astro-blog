// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkCallout from "@r4ai/remark-callout";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkObsidianFootnotes from "remark-obsidian-footnotes";

export default defineConfig({
  site: 'https://ivix2020.github.io',
  base: '/my-astro-blog',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [
      remarkCallout,
      remarkObsidianFootnotes,
      remarkFlexibleMarkers,
      remarkGfm,
      remarkMath,
    ],
  },
});
