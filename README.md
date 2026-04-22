# 🐱 paw and sage

A calm, considered guide to understanding the cat in your home.

Built with [Astro](https://astro.build) for performance, SEO, and content-first publishing.

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ ([download](https://nodejs.org))
- A GitHub account
- A Vercel account (free)
- A MailerLite account (free up to 1,000 subscribers)

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) — your site is live locally.

### 3. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
pawandsage/
├── public/                    # Static files (favicon, robots.txt, images)
│   └── blog/                  # Blog post images go here
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── EmailCapture.astro
│   │   ├── CatPlayCTA.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── config.ts          # Blog post schema (don't change unless needed)
│   │   └── blog/              # ✍️ Write posts here as .md files
│   │       ├── new-kitten-checklist.md
│   │       ├── indoor-cat-enrichment-ideas.md
│   │       └── why-cat-wakes-you-3am.md
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Wraps every page (head, header, footer)
│   │   └── BlogPostLayout.astro   # Wraps every blog post
│   ├── pages/                 # Each .astro file = one URL
│   │   ├── index.astro            # Homepage (/)
│   │   ├── about.astro            # /about
│   │   ├── start-here.astro       # /start-here
│   │   ├── catplay.astro          # /catplay (waitlist)
│   │   ├── contact.astro          # /contact
│   │   ├── disclosure.astro       # /disclosure
│   │   ├── privacy.astro          # /privacy
│   │   ├── imprint.astro          # /imprint
│   │   ├── blog/
│   │   │   ├── index.astro        # /blog
│   │   │   └── [...slug].astro    # /blog/post-slug (auto-generated)
│   │   └── categories/
│   │       └── [category].astro   # /categories/behavior, etc.
│   └── styles/
│       └── global.css         # All design system variables + base styles
├── astro.config.mjs           # Astro config (sitemap, site URL)
├── tsconfig.json
└── package.json
```

---

## ✍️ Writing a New Blog Post

This is the most common thing you'll do. Three steps:

### 1. Create a new `.md` file

Put it in `src/content/blog/`. Filename becomes the URL slug.

Example: `src/content/blog/cat-tail-positions.md` → `pawandsage.com/blog/cat-tail-positions`

### 2. Add frontmatter

Every post needs this header:

```markdown
---
title: "The 7 Cat Tail Positions and What They Mean"
description: "A short guide to reading your cat's tail — written in plain English, with vet-approved meanings."
pubDate: 2026-04-20
category: "behavior"            # behavior | enrichment | new-cat | health
tags: ["behavior", "body language"]
readTime: "5 min read"
heroImage: "/blog/cat-tail-hero.jpg"   # optional
draft: false                    # set true to hide
---
```

### 3. Write Markdown

Standard Markdown works. Headers (`##`, `###`), lists, links, images, blockquotes — all rendered automatically.

For a callout/TL;DR box, use a blockquote:

```markdown
> **TL;DR:** Quick summary here.
```

For affiliate links, just use normal Markdown links:

```markdown
[Browse cat litter on Chewy →](https://www.chewy.com/...)
```

The disclosure banner appears automatically on every blog post via the layout.

---

## 🎨 Design System

All colors, fonts, and spacing are defined as CSS variables in `src/styles/global.css`.

### Colors

| Variable | Hex | Use |
|---|---|---|
| `--sage-900` | `#3d4a3d` | Headlines, primary brand |
| `--sage-700` | `#5a6b58` | Secondary text |
| `--sage-100` | `#dde4d8` | Soft backgrounds |
| `--cream-100` | `#faf6ef` | Main background |
| `--cream-200` | `#f3ece0` | Card backgrounds |
| `--terra-500` | `#c46a45` | Accents, CTAs |
| `--terra-700` | `#a04e2f` | Links |
| `--ink` | `#2a2724` | Body text |

### Typography

- **Display & headlines:** Fraunces (serif, with italic variants)
- **Body & UI:** Inter
- **Script accents:** Caveat (used sparingly)

All loaded via Google Fonts in `src/styles/global.css`.

---

## 🔌 Connecting MailerLite

Once you have a MailerLite form, replace `https://YOUR-MAILERLITE-FORM-URL` in:

- `src/components/EmailCapture.astro`
- `src/pages/catplay.astro`

Or better: use the env variable approach. Add to `.env`:

```
PUBLIC_MAILERLITE_FORM_URL=https://your-actual-url
```

Then in components, use `import.meta.env.PUBLIC_MAILERLITE_FORM_URL`.

---

## 🚢 Deploying to Vercel

### First-time setup (5 minutes)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/pawandsage.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your `pawandsage` GitHub repo
   - Framework Preset: **Astro** (auto-detected)
   - Click "Deploy"

3. **Connect your domain:**
   - In your Vercel project: Settings → Domains
   - Add `pawandsage.com` and `www.pawandsage.com`
   - Vercel will give you DNS records — add them at your registrar (Namecheap/Porkbun)
   - Wait ~10 minutes for propagation
   - Done.

### Subsequent deploys

Just push to GitHub. Vercel auto-deploys on every push to `main`.

```bash
git add .
git commit -m "new blog post: cat tail positions"
git push
```

---

## 📊 Adding Analytics (Optional but Recommended)

### Plausible (recommended — privacy-respecting, ~$9/month or self-hosted free)

Add to `src/layouts/BaseLayout.astro` in the `<head>`:

```html
<script defer data-domain="pawandsage.com" src="https://plausible.io/js/script.js"></script>
```

### Cloudflare Web Analytics (free, also privacy-respecting)

Sign up at [cloudflare.com/web-analytics](https://www.cloudflare.com/web-analytics), get the snippet, paste in `<head>`.

---

## 🐱 Pinterest Setup Notes

The site already includes Pinterest Rich Pin meta tags via `BaseLayout.astro`. After your first deploy:

1. Go to [Pinterest Rich Pins Validator](https://developers.pinterest.com/tools/url-debugger/)
2. Submit any blog post URL
3. Click "Apply now" — usually takes <24 hours

This makes your pins look richer in the Pinterest feed (with title, description, author).

---

## 🔧 Common Tasks

### Add a new page

Create a new `.astro` file in `src/pages/`. The filename becomes the URL.

### Change the navigation

Edit `src/components/Header.astro` — the `navItems` array at the top.

### Update the design system

All colors, fonts, spacing in `src/styles/global.css`. Change once, applies everywhere.

### Add an image to a blog post

1. Drop the image in `public/blog/`
2. Reference as `/blog/your-image.jpg` in Markdown

---

## 📝 Content Roadmap (First 30 Days)

See the launch playbook for the full content pipeline. Priority posts:

**Week 1-2 (Cornerstone — ✅ first 3 included as templates):**
- ✅ The Complete New Kitten Checklist
- ✅ 20 Indoor Cat Enrichment Ideas
- ✅ Why Your Cat Wakes You Up at 3 AM
- ⬜ 15 Cat Behaviors Decoded
- ⬜ How to Tell If Your Indoor Cat Is Bored

**Week 3-4:**
- ⬜ The Best Cat Trees for Small Apartments
- ⬜ Cat Tail Language Decoded
- ⬜ How Much Play Does Your Indoor Cat Need
- ⬜ Senior Cat Care Checklist
- ⬜ DIY Cat Enrichment From Things You Have

---

## 💛 Made with care

— Pascal & the cats
