import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.optional(image()),

      // Language of this translation.
      lang: z.enum(["es", "en", "eu"]),

      // Public URL of this translation.
      slug: z.string(),

      // Identifies the article shared by all translations.
      translationKey: z.string(),
    }),
});

export const collections = { blog };
