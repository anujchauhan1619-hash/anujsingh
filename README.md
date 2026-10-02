# Anuj Singh Chauhan — Portfolio

A fast, editorial-style personal portfolio for **Anuj Singh Chauhan**, a final-year
B.Tech CSE (Data Science) student and aspiring Software Development Engineer. Built as a
single-page site with an animated hero, light/dark themes, and a working contact form.

**🔗 Live site:** https://anujchauhan1619-hash.github.io/anujsingh/

---

## ✨ Features

- **Single-page, section-based layout** — Home, About, Skills, Experience, Projects,
  Services, Education, and Contact, with scroll-spy navigation.
- **Light & dark themes** — respects the system preference and remembers the manual choice
  (no flash of the wrong theme on load).
- **Motion & polish** — editorial typography, an animated hero portrait, smooth scrolling
  (Lenis), and reveal-on-scroll transitions.
- **Working contact form** — submissions are delivered via [EmailJS](https://www.emailjs.com/),
  entirely client-side (no backend required).
- **Fully static & prerendered** — ships as plain HTML/CSS/JS, so it hosts anywhere, including
  GitHub Pages, with no server.
- **Responsive** — tuned from small phones to large desktops.

## 🛠 Tech Stack

| Area | Tools |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (React 19) |
| Build | [Vite](https://vite.dev/) + [Nitro](https://nitro.build/) (static prerender) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI primitives | [Radix UI](https://www.radix-ui.com/), [lucide-react](https://lucide.dev/) icons |
| Motion | [motion](https://motion.dev/), [Lenis](https://lenis.darkroom.engineering/) |
| Forms & validation | [react-hook-form](https://react-hook-form.com/), [zod](https://zod.dev/) |
| Contact delivery | [EmailJS](https://www.emailjs.com/) |
| Tooling | TypeScript, ESLint, Prettier |

## 🚀 Getting Started

> Requires **Node.js 20.19+ or 22+** and npm (the CI builds on Node 22). The project also
> supports [Bun](https://bun.sh/) — a `bun.lock` is included.

```sh
# 1. Clone
git clone https://github.com/anujchauhan1619-hash/anujsingh.git
cd anujsingh

# 2. Install dependencies
npm install

# 3. (Optional) configure the contact form — see "Environment variables" below
cp .env.example .env

# 4. Start the dev server
npm run dev
```

The dev server runs at the URL printed in your terminal (typically http://localhost:3000).

## 📜 Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload. |
| `npm run build` | Build and **prerender** the site to static files in `.output/public`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint. |
| `npm run format` | Format the codebase with Prettier. |

## 🔧 Environment variables

All variables are optional — the app ships with working fallbacks, so it runs without a `.env`.
Copy [`.env.example`](.env.example) to `.env` to override them.

| Variable | Purpose |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID for the contact form. |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID. |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key. |
| `VITE_BASE` | Base path for the built site. Use `/` for a custom domain or `<user>.github.io`; use `/anujsingh/` for GitHub **project** pages. |

> These EmailJS keys are **publishable, client-side identifiers** — they ship in the browser
> bundle by design and are not secrets.

## 📁 Project structure

```
src/
├── components/
│   ├── portfolio/      # Page sections: Hero, About, Skills, Projects, Contact, …
│   └── ui/             # Reusable UI primitives (Radix-based)
├── data/
│   └── portfolio.ts    # ← Single source of truth for all content (edit this)
├── hooks/              # useTheme, use-mobile, …
├── routes/             # TanStack routes (__root.tsx, index.tsx)
└── styles.css          # Tailwind v4 theme tokens & custom utilities
```

**To update the site's content** (bio, skills, projects, experience, links), edit
[`src/data/portfolio.ts`](src/data/portfolio.ts) — no component changes needed.

## 🌐 Deployment (GitHub Pages)

Deployment is automated via GitHub Actions ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):
every push to `main` builds the site, prerenders it to static HTML, and publishes it to GitHub Pages.

One-time setup in the repo:

1. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
2. The workflow builds with `VITE_BASE=/anujsingh/` so assets resolve under the repo name.
   Change this to `/` if you move to a custom domain or a `<user>.github.io` repo.
3. *(Optional)* add `VITE_EMAILJS_*` as repository secrets to override the built-in contact keys.

To deploy elsewhere, run `npm run build` and serve the contents of `.output/public` as a static site.

## 🧩 Lovable

This project is connected to [Lovable](https://lovable.dev). Changes made in the Lovable editor
are committed straight to this repository, and pushes to `main` sync back into Lovable.
Avoid rewriting published git history (force-pushing, rebasing/amending pushed commits), as it
can desync the project history on Lovable's side.

## 📬 Contact

- **Email:** anujchauhan119@gmail.com
- **LinkedIn:** [anuj-singh-chauhan](https://www.linkedin.com/in/anuj-singh-chauhan-88a2322b7)
- **Location:** Ghaziabad, India

---

© 2026 Anuj Singh Chauhan
