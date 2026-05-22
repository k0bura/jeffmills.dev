export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: "live" | "in-progress" | "archived";
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
];
