# CLAUDE.md

Personal CV/portfolio site (lcir.cz) — Next.js 16 App Router + React 19 + TypeScript, statically exported and served from GitHub Pages.

## Commands

```sh
npm run dev     # local dev server
npm run build   # static export → out/ (output: "export" in next.config.mjs)
npm run lint    # type check only — runs `tsc --noEmit`, there is no ESLint
```

No test suite. `npm run lint` + `npm run build` are the full verification.

## Content — where things live

All user-facing content is bilingual Czech/English (`Lang = "cz" | "en"`, see `lib/types.ts`). The UI switches languages client-side via `components/LanguageProvider.tsx`.

### CV (markdown-driven)

- `content/cv.cz.md` and `content/cv.en.md` — YAML frontmatter (name, role, skills, `experience[]`, `education[]`) parsed with gray-matter; loaded by `lib/cv.ts`.
- Below the frontmatter, each `## <experience-id>` heading holds a markdown detail section rendered to HTML via remark (`lib/markdown.ts`) and matched to the experience entry with the same `id`.
- Always edit **both** language files in sync.

### Portfolio (TypeScript, NOT markdown)

Portfolio projects are objects in the `portfolioProjects` array in `lib/portfolio.ts`. To add a project:

1. Append a `PortfolioProject` object: `id` (becomes the URL slug `/portfolio/<id>/`), `title`, `visibility`, `status` (`active | experiment | private`), `language`, `stack[]`, and bilingual `summary`/`detail`/`focus` (`{ cz, en }`).
2. Optional richer detail page: `overview`/`highlights` (bilingual string arrays), `tech` (layer/value rows), `repo`, `url`.
3. Optional screenshot: drop a PNG in `public/` and set `image: "/name.png"`.
4. Detail pages are generated automatically — `app/portfolio/[slug]/page.tsx` uses `generateStaticParams()` over the array; no route changes needed.

Write both `cz` and `en` variants for every text field; match the tone of existing entries.

## Architecture

- `app/` — routes: `/` (landing), `/cv`, `/portfolio`, `/portfolio/[slug]`.
- `components/` — page components (`CvPage`, `PortfolioPage`, `ProjectDetailPage`, …); data loading happens in `lib/`.
- Static export constraints apply: no server runtime, `images.unoptimized`, `trailingSlash: true`. `basePath` comes from `NEXT_PUBLIC_BASE_PATH` (empty by default).
- Sentry (`@sentry/nextjs`, org `ptw-ye`, project `lcircz`) wraps the build in `next.config.mjs`; config in `sentry.*.config.ts` and `instrumentation*.ts`.

## Deployment

- Push to `main` → `.github/workflows/deploy.yml`: `npm ci` && `npm run build`, uploads `./out` to GitHub Pages (Node 20). Also triggerable via `workflow_dispatch`.
- Custom domain via `CNAME` (lcir.cz / www.lcir.cz / cv.lcir.cz) — keep the `CNAME` files (repo root and `public/`) intact.
- `out/` is build output — never edit it by hand.
