import { z, defineCollection } from 'astro:content'

export const collections = {
  site: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      slogan: z.string(),
      description: z.string().optional(),
    }),
  }),
}
