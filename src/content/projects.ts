export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: "live" | "in-progress" | "archived" | "proprietary";
  year: number;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "gen-ui-demo",
    title: "Gen UI Demo",
    summary:
      "Two-stage Claude tool-use pipeline that picks components from a tiny web-component library, then arranges them into a layout. Svelte + Lit + Astro.",
    status: "live",
    year: 2026,
    tags: ["Claude", "tool use", "Svelte", "Lit", "design systems"],
  },
  {
    slug: "sychonet",
    title: "sych0net",
    summary:
      "A personal Astro site themed as a phosphor-amber BBS, project logs, hardware galleries, ANSI art, and the vintage-computing aesthetic this site grew out of.",
    status: "live",
    year: 2021,
    tags: ["Astro", "vintage computing", "personal site", "design language"],
  },
  {
    slug: "design-system-v2",
    title: "DS-V2 — framework-agnostic enterprise design system",
    summary:
      "The framework-agnostic enterprise design system I architected. Nx monorepo with a Vue 3 source layer that compiles to standards-based custom elements via defineCustomElement; ships to Vue, Angular, AEM, and any HTML. Proprietary; architectural overview only.",
    status: "proprietary",
    year: 2022,
    tags: ["design systems", "Web Components", "Vue 3", "Nx monorepo", "enterprise"],
  },
  {
    slug: "design-system-v1",
    title: "DS-V1 — predecessor enterprise design system (Vue 2)",
    summary:
      "The predecessor to DS-V2. Around 86 Vue 2 components compiled to custom elements via vue-custom-element, with MutationObserver-based lazy hydration. Proprietary; architectural overview only.",
    status: "proprietary",
    year: 2019,
    tags: ["Vue 2", "Web Components", "design systems", "enterprise", "precursor"],
  },
  {
    slug: "skeletor",
    title: "Skeletor",
    summary:
      "A front-end component framework I built at Delphic Digital (2014–2017) with native Web Components in 2016. The architectural seed that became the later enterprise systems nine years on.",
    status: "archived",
    year: 2016,
    tags: ["Web Components", "design systems", "agency", "framework"],
  },
];
