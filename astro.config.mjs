import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import syntaxTheme from './src/styles/jm-syntax.json' with { type: 'json' };

export default defineConfig({
  site: 'https://jeffmills.dev',
  integrations: [svelte(), mdx()],
  markdown: {
    shikiConfig: {
      theme: syntaxTheme,
      wrap: false,
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
