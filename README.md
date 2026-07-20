# Ravi Dahiya — Cybersecurity Portfolio

A premium, production-ready personal portfolio built with React 19, Vite, Tailwind CSS v4, Framer Motion, and React Router. All content (projects, skills, certifications, achievements, blog posts) is driven from JSON/Markdown files so it can be updated without touching component code.

## Tech Stack
- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (animations)
- React Router v7
- React Icons
- React Markdown + remark-gfm + react-syntax-highlighter (blog system)
- EmailJS (contact form — needs your own account, see below)

## Running Locally

You need **Node.js 18+** installed. Then:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/   → reusable UI (Navbar, Footer, cards, etc.)
  pages/        → one file per route
  layouts/      → MainLayout wraps every page with Navbar/Footer
  hooks/        → useTypingEffect, useScrollProgress
  utils/        → blogs.js (markdown loader), readingTime, frontmatter parser
  data/         → siteConfig.json, projects.json, skills.json, experience.json,
                  education.json, certifications.json, achievements.json
  blogs/        → one .md file per blog post (frontmatter + markdown body)
public/
  resume/       → your resume PDF (used by Resume page + download buttons)
  robots.txt, sitemap.xml
```

## Editing Content

**You do not need to touch any component code to update your info.** Just edit the files in `src/data/*.json` and the markdown files in `src/blogs/`.

- To add a new project: add an entry to `src/data/projects.json` (a detail page is generated automatically at `/projects/<slug>`).
- To add a new blog post: create a new `.md` file in `src/blogs/` with frontmatter like this:

```markdown
---
title: Your Post Title
date: 2026-07-01
category: Networking
tags: [Tag1, Tag2]
excerpt: One sentence summary shown on the blog listing page.
---

Your markdown content here...
```

## Replacing Image Placeholders

Several places currently show a labeled placeholder box instead of a real image (project hero images, screenshots, architecture diagrams, blog hero images). Search the codebase for `placeholder` (in `ProjectDetail.jsx` and `BlogPost.jsx`) and swap in your own images from `src/assets/` or `public/`.

## Setting Up the Contact Form (EmailJS)

The contact form is wired up but needs your own free EmailJS account:

1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Create an Email Service and an Email Template
3. Open `src/pages/Contact.jsx` and replace the three placeholder constants near the top:

```js
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
```

Until you do this, the form will show a friendly error message pointing people to your email address instead.

## TryHackMe Stats

TryHackMe doesn't have a public API, so the rank/badge numbers shown on the site are the ones currently in `src/data/siteConfig.json` and `src/data/achievements.json` — update them manually as your stats change.

## GitHub Stats

A full GitHub contribution calendar / repo-stats widget was **not** wired up to a live API in this build (it would need a backend or serverless function to avoid exposing rate-limited calls directly from the browser). If you want this, the cleanest approach is a small serverless function (e.g. a Vercel Edge Function) that calls the GitHub API server-side and returns cached JSON to the frontend.

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite** (auto-detected)
4. Build command: `npm run build` · Output directory: `dist`
5. Deploy

Because this uses React Router with real (non-hash) URLs, add a `vercel.json` rewrite so deep links like `/projects/smart-honeypot-system` work on refresh:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

(This file is already included in the project root.)

## Notes on Scope

This build covers the full site structure, all pages, the blog engine, SEO basics, and the extra features (scroll progress, back-to-top, page transitions, loading screen, 404 page, sitemap, robots.txt). A few integration pieces intentionally need your own credentials/content to go live (EmailJS keys, real screenshots, TryHackMe number updates) rather than being faked — see the sections above.
