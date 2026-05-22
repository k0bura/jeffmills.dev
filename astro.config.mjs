import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jeffmills.dev',
  integrations: [svelte(), mdx()],
  vite: {
    plugins: [tailwindcss()]
  }
});
