// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/mypersonalweb' : '/',
  site: 'https://MEPPERDONAS.github.io',
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
   env: {
    schema: {
      RESEND_API_KEY: envField.string({
        context: 'server',
        access: 'secret',
      }),
      FROM_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
      TO_EMAIL: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },

  
});