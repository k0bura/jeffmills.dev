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
    slug: "axs",
    title: "AXS, Advisor Experience System",
    summary:
      "The framework-agnostic enterprise design system I architected: Nx monorepo with axs-vue + axs-web-components + axs-automation tooling. Vue source compiles to standards-based custom elements; ships to Vue, Angular, AEM, and any HTML. Proprietary, code samples only.",
    status: "proprietary",
    year: 2022,
    tags: ["design systems", "Web Components", "Vue 3", "Nx monorepo", "enterprise"],
  },
  {
    slug: "faset",
    title: "FASET, Enterprise Design System (Vue 2)",
    summary:
      "The precursor to AXS. 86 Vue 2 components compiled to custom elements via vue-custom-element, with MutationObserver-based lazy hydration. Proprietary, code samples only.",
    status: "proprietary",
    year: 2019,
    tags: ["Vue 2", "Web Components", "design systems", "enterprise", "precursor"],
  },
  {
    slug: "skeletor",
    title: "Skeletor",
    summary:
      "A front-end component framework I built at Delphic Digital (2014–2017) with native Web Components in 2016. The architectural seed that became AXS nine years later.",
    status: "archived",
    year: 2016,
    tags: ["Web Components", "design systems", "agency", "framework"],
  },
];
