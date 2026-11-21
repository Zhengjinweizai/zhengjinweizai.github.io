import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章:src/content/blog/*.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// 作品/项目:src/content/works/*.md
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().default('作品'),
    date: z.coerce.date().optional(),
    link: z.string().optional(), // 外链地址;不填则生成站内详情页
    order: z.number().default(99),
  }),
});

export const collections = { blog, works };
