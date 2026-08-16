import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			directory: z.string().optional(),
		}),
});
const products = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.enum(["game", "tool", "music", "article", "other"]).default("other"),
      pubDate: z.date().optional(),
      description: z.string().optional(),
			status: z.enum(["draft", "developing", "public"]).default("draft"),
      tags: z.array(z.string()).default([]),
      banner: image(), // ★これが重要
      url: z.string().url().optional(),
    }),
});

const missions = defineCollection({
	// A Mission a Month: 1ヶ月ごとのミッション記事
	loader: glob({ base: './src/content/missions', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			genre: z.string(),
			month: z.string(), // "2026-09" 形式
			goal: z.string(),
			successCriteria: z.string().optional(),
			status: z.enum(['planning', 'in-progress', 'completed', 'failed']).default('planning'),
			startDate: z.coerce.date(),
			endDate: z.coerce.date().optional(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			result: z.string().optional(),
			heroImage: image().optional(),
			bluesky: z
				.object({
					handle: z.string().optional(),
					hashtag: z.string(),
				})
				.optional(),
			tags: z.array(z.string()).default([]),
		}),
});

export const collections = { blog, products, missions };
