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
        legal: z.object({
          name: z.string().optional(),
          npwp: z.string().optional(),
          address: z.string().optional(),
          phone: z.string().optional(),
          email: z.string().email().optional(),
          website: z.string().url().optional(),
        }),
      }),
  }),

  menu: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          href: z.string(),
        })
      ),
    }),
  }),

  home: defineCollection({
    type: 'data',
    schema: ({ image }) =>
      z.object({
        hero: z.object({
          title: z.string(),
          content: z.string(),
        }),
        expertises: z.object({
          title: z.string(),
          content: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              order: z.number().optional().default(0),
              image: image().optional(),
              isWide: z.boolean().optional().default(false),
              content: z.string(),
            })
          ),
        }),
      }),
  }),

  page: defineCollection({
    type: 'content',
    schema: ({ image }) =>
      z.object({
        title: z.string(),
        description: z.string().optional(),
        image: image().optional(),
      }),
  }),
}
