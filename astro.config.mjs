// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


const isGitHubPages = process.env.GITHUB_PAGES === 'true';
export default defineConfig({

  base: isGitHubPages ? '/mypersonalweb' : '/',
 
  site: 'https://MEPPERDONAS.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  }
});