import { z, defineCollection } from 'astro:content'

export const collections = {
  site: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        slogan: z.string(),
        description: z.string().optional(),
        logo: image(),
      }),
  }),
  menu: defineCollection({
    type: 'data',
    schema: z.object({
      items: z.array(
        z.object({
          title: z.string(),
          href: z.string(),
        })
      ),
    }),
  }),

  hero: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  }),
}
