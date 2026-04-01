# InsForge + Next.js UI starter

Self-contained **Next.js 16** app with **InsForge** (`@insforge/sdk`) wired for **Google OAuth**, **`/auth/callback`** handling, and a **protected dashboard** with sidebar layout — **no PostgreSQL required** to run (auth-only).

Use this folder to bootstrap a new product or to copy patterns into another repo. The parent **`interview_ninja`** project adds full schema, `users` role, recruiter/candidate flows, and AI evaluation on top of the same stack.

---

## What’s included

| Area | Files |
|------|--------|
| InsForge client | `src/lib/insforge.ts` |
| Auth hint (localStorage) | `src/lib/auth-storage.ts` |
| Login + OAuth | `src/app/auth/login/page.tsx` |
| OAuth callback | `src/app/auth/callback/page.tsx` |
| Protected shell | `src/components/starter/StarterAuthGuard.tsx` |
| Sidebar + sign out | `src/components/starter/StarterSidebar.tsx` |
| Dashboard UI | `src/app/dashboard/page.tsx`, `settings/page.tsx` |
| Landing | `src/app/page.tsx` |
| **Public UI previews** (no auth) | `src/app/candidate/dashboard/page.tsx`, `src/app/recruiter/dashboard/page.tsx` |
| Preview chrome | `src/components/preview/PreviewShell.tsx`, `PreviewBanner.tsx` |

Routes **`/candidate`** and **`/recruiter`** redirect to each dashboard. Previews use **static mock data** so designers and PMs can click through without InsForge credentials.

---

## Run

From the **`starter/`** directory:

```bash
cd starter
cp .env.example .env.local
# Edit .env.local with your InsForge URL and anon key

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Configure **Google OAuth** and **redirect URLs** in the InsForge dashboard (include `http://localhost:3000/auth/callback`).

---

## Environment variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_INSFORGE_URL` | InsForge API base URL |
| `NEXT_PUBLIC_INSFORGE_ANON_KEY` | Anonymous JWT from InsForge |
| `NEXT_PUBLIC_APP_URL` | Optional; used for OAuth redirects in some setups |

---

## Adding a database

This starter does **not** call `insforge.database` by default, so it runs even before you create tables.

When ready:

1. Run SQL in InsForge (see **`../supabase/schema.sql`** in the parent repo as a reference).
2. Use `insforge.database.from("your_table")...` in client components (same pattern as the main app).
3. Optionally copy **`AuthGuard`**, profile rows, and seed scripts from the parent project.

---

## Copy out of this monorepo

To use only the starter elsewhere:

```bash
cp -r starter /path/to/new-project
cd /path/to/new-project
npm install
```

Or treat `starter/` as documentation and copy individual files into an existing Next app.

---

## Scripts

```bash
npm run dev    # development
npm run build  # production build
npm run start  # production server
npm run lint
```
