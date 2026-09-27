# Leo Sharif — The Opening Hand

Personal portfolio built with Next.js App Router, React, TypeScript and Tailwind. Cream/green patterned cards in light mode; blue foil cards on an ink-blue background in dark mode.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Use `npm run build` to check the production build, followed by `npm start` to preview it.

## Where to make changes

| Change | File |
| --- | --- |
| Name, bio, social links, projects and interests | `app/content/portfolio.ts` |
| Light/dark palettes, fonts, spacing, card patterns | `app/globals.css` (design settings at the top) |
| Card angles, order and flip transition | `app/components/card-hand.tsx` |
| Homepage text and layout | `app/page.tsx` |
| Résumé content | `app/resume/page.tsx` |
| Downloadable résumé | Replace `public/Resume.pdf` (keep its filename) |
| Project illustrations and graduation photo | `public/` |
| Page titles and search descriptions | `app/layout.tsx` and each page’s `metadata` |

The card destinations are real pages: `/resume`, `/projects`, `/about`, `/off-duty`. Links work without JavaScript, support new tabs, and respect reduced-motion preferences. The existing `/projects` and `/Resume.pdf` URLs are retained.

The theme follows the device on first visit and remembers a manual Light/Dark choice locally. It is applied before paint and persists between pages. No database, CMS, remote fonts or animation library is required by this design.

## Preview and publish on Vercel

Keep the existing GitHub repository, Vercel project and custom-domain connection. Push a feature branch for a preview. Review the preview on phone and desktop; merge into the Vercel production branch when ready to publish. No DNS change is needed when using the same Vercel project.

Vercel Analytics and Speed Insights from the original site remain installed. Legacy illustration assets are retained so they can be reused. The résumé PDF is the existing document; update it before publication if needed.
