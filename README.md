# jeffmills.dev

Personal portfolio for Jeff Mills — Principal Front-End Engineer.

## Stack

- **Astro 6** — static site, MDX content
- **Svelte 5** — interactive demo island
- **Lit 3** — tiny framework-agnostic design system (`jm-*` web components)
- **Tailwind CSS v4** — utility styles
- **Cloudflare Pages + Pages Functions** — static hosting + one Anthropic-backed API endpoint

## Scripts

```bash
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the build
npm run check    # astro type check
```

## Layout

```
src/
  pages/         Astro routes (home, demo, blog, press)
  layouts/       Page layouts
  components/    Astro chrome (header, footer)
  demo/          Svelte island for Gen UI demo
  lib/ds/        Tiny Lit design system
functions/
  api/generate.ts  Cloudflare Pages Function — calls Anthropic
```
