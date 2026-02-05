// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({

  base: isGitHubPages ? '/mypersonalweb' : '/',
 
  site: 'https://MEPPERDONAS.github.io',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  }
});