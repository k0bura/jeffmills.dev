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

const talks = defineCollection({
  loader: glob({ base: "./src/content/talks", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    venue: z.string(),
    format: z.string(),
    deliveredOn: z.date(),
    coPresenters: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    status: z.enum(["published", "unpublished"]).default("published"),
  }),
});

export const collections = { writing, "case-studies": caseStudies, talks };
