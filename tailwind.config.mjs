/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // 'selector' (o 'class' en versiones antiguas) obliga a Tailwind 
  // a buscar la clase .dark en el HTML en lugar de preguntar al navegador.
  darkMode: 'selector', 
  theme: {
    extend: {},
  },
  plugins: [],
}