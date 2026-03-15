# Malay Krishna — PM Portfolio

A production-ready, fully static PM portfolio. No frameworks, no build step, no dependencies. Pure HTML + CSS + JS.

## Structure

```
portfolio/
├── index.html      ← All sections (Hero, About, Experience, Projects, Skills, Contact)
├── style.css       ← Full dark-theme design system
├── main.js         ← Scroll animations, counters, mobile nav
├── vercel.json     ← Vercel deployment config
└── README.md
```

## Deploy to Vercel via GitHub

1. Push this folder to a GitHub repo
   ```bash
   git init
   git add .
   git commit -m "init: PM portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → Import Project → select your repo
3. Vercel auto-detects static site — click **Deploy**
4. Your site is live at `yourname.vercel.app`

## Customise

| What | Where |
|------|-------|
| Name, title, location, email | `index.html` — Hero section |
| Stats (years, users, revenue) | `index.html` — `.stat-num` data-target values |
| Work experience | `index.html` — `#experience` section |
| Case studies | `index.html` — `#projects` section |
| Skills list | `index.html` — `#skills` section |
| Testimonials | `index.html` — `.testimonials` |
| Profile photo | Replace `.photo-placeholder` div with `<img src="photo.jpg">` |
| Resume PDF | Add `resume.pdf` to root, already linked |
| Accent colour | `style.css` — `--accent: #7c6dfa` |
| Fonts | `index.html` — Google Fonts link |

## Custom Domain on Vercel

1. Vercel Dashboard → your project → Settings → Domains
2. Add `yourname.com`
3. Point your DNS A record to Vercel's IP (shown in dashboard)
4. Done — HTTPS is automatic

## Add a Blog / Case Studies (optional)

Add more `<div class="project-card">` blocks inside `.projects-grid` in `index.html`.
Each card follows the Problem → Action → Result structure already in the template.
