import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
  loader: glob({ base: "./src/content/writing", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    status: z.enum(["abstract", "draft", "published"]).default("published"),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ base: "./src/content/case-studies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    chapter: z.string(),
    period: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, "case-studies": caseStudies };
