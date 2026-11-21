# 个人网站

编辑风 · 简约留白的个人网站,基于 [Astro](https://astro.build) 构建,部署在 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev      # 开发预览,默认 http://localhost:4321
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 怎么写文章

在 `src/content/blog/` 下新建 `.md`:

```markdown
---
title: '文章标题'
description: '一两句话摘要(可选)'
date: 2026-12-01
tags: ['随笔']
draft: false        # true 则不发布
---

正文 Markdown。
```

## 怎么加作品

在 `src/content/works/` 下新建 `.md`:

```markdown
---
title: '项目名'
summary: '一句话介绍,显示在卡片上'
category: '工具项目'   # 卡片左上角的分类标签
order: 1              # 排序,越小越靠前
link: 'https://...'   # 可选:填了就跳外链,不填生成站内详情页
---

详情页正文(可省略)。
```

## 改站名 / 署名 / 简介

统一在 `src/config.ts` 里改。

## 部署

推送到 GitHub 仓库 `main` 分支后,`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages。

- 站点地址在 `astro.config.mjs` 的 `SITE` 变量里(影响 sitemap/RSS 的绝对地址)
- 如果仓库名不是 `<用户名>.github.io`,还需要加 `base: '/<仓库名>'`

## 目录结构

```
src/
├── config.ts            # 站名、署名、简介、联系方式
├── content.config.ts    # 文章与作品的字段定义
├── layouts/Base.astro   # 页面骨架(页头/页脚)
├── styles/global.css    # 全部样式,设计变量在顶部
├── pages/               # 路由:index / blog / works / about / 404 / rss
└── content/             # 文章(blog/)与作品(works/)的 Markdown
```
