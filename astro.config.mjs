// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // ① サイトのルートドメインを設定
  site: 'https://IVIX2020.github.io', 
  
  // ② プロジェクトサイトのサブディレクトリ（リポジトリ名）を設定
  base: '/my-astro-blog', 
  
  integrations: [mdx(), sitemap()],
});