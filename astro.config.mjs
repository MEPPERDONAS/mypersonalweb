// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  
  base: '/mypersonalweb',
  site: 'https://MEPPERDONAS.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  }
});