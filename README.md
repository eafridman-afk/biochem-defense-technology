# BioChem Defense Technology (BCDT)

Public website for **[biochemdefensetech.com](https://biochemdefensetech.com/)** — R&D positioning, non-confidential biological and chemical threat data, and dual-use stewardship.

**Brand:** P1 Brand Metal (logo black · graphite · silver) — permanent.

## Stack

React 19 · TanStack Start · Tailwind CSS v4 · Vite 8 · Nitro (Vercel)

## Local develop

```bash
npm install
npm run dev   # 0.0.0.0:8080
```

## Deploy to Vercel (production domain)

### One-time: import this repo

1. Go to [vercel.com/new](https://vercel.com/new)
2. **Import** Git repository: `eafridman-afk/biochem-defense-technology`
3. Framework preset: leave as detected (or Other). Build command: `npm run build`. Output is handled by Nitro → `.vercel/output`.
4. **Deploy**

### Attach the domain

1. Project → **Settings → Domains**
2. Add `biochemdefensetech.com` and `www.biochemdefensetech.com`
3. At your DNS provider (wherever the domain is registered), set the records Vercel shows:
   - Apex: A record to Vercel IP, **or** nameservers if you move DNS to Vercel
   - `www`: CNAME to `cname.vercel-dns.com` (or the value Vercel displays)
4. Wait for DNS + SSL (usually minutes; can take up to 48h)

### After cutover

- Old WordPress / Corporate Tools Site Builder at this domain can be retired
- This app serves the full R&D revision with BCDT logo and dual-use content

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local preview |
| `npm run build` | Production / Vercel build |
| `npm run typecheck` | TypeScript |

## Assets

- `public/bcdt-logo.jpg` — primary logo
- `public/bcdt-icon.png` — favicon
- `public/robots.txt` · `public/sitemap.xml`
