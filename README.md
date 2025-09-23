
# Sai Vivek — Portfolio (Next.js + Tailwind)

A sleek, Apple‑inspired portfolio site built with Next.js (App Router), Tailwind CSS, Framer Motion, and lucide‑react.

## ✨ Features
- Modern Apple‑like design: glassmorphism, soft glow, tasteful motion
- Fully responsive, dark‑mode first
- Easy content editing in `data/content.ts`
- Ready for Vercel deployment
- Resume link (`/public/resume.pdf`) — replace with your actual PDF

## 🧰 Tech
- Next.js 14 (App Router)
- Tailwind CSS 3
- Framer Motion
- lucide‑react icons
- TypeScript

## 🚀 Quickstart
```bash
# 1) Install deps
npm install

# 2) Run dev server
npm run dev

# 3) Open
http://localhost:3000
```

## 📝 Update your info
Edit **`data/content.ts`** (name, links, experience, projects, etc.).
Replace **`public/resume.pdf`** with your real resume file (same name).

## 📦 Deploy
- **Vercel**: Push to GitHub → Import the repo on Vercel → Deploy (zero config).
- **GitHub Pages (static export)**: Next.js App Router SSR isn't static by default; prefer Vercel.
- **Docker** (optional):
```Dockerfile
# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY package*.json ./
EXPOSE 3000
CMD ["npm","start"]
```

## 🧩 Notes sourced from your resume
Key metrics like **85% club match**, **90% manual reduction**, **30% CI/CD speedup**, **25% fewer build failures**, **40% engagement lift**, and your **IEEE publication** were taken directly from your resume.
Replace or expand as needed in `data/content.ts`.
