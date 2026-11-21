// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 站点地址(GitHub Pages):影响 sitemap 与 RSS 里的绝对链接
const SITE = 'https://zhengjinweizai.github.io';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
