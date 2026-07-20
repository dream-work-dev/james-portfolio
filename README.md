# James Luke Portfolio

A Next.js portfolio built with the App Router, TypeScript, and responsive CSS.

## Local development

Requires Node.js 20.9 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production checks

```bash
pnpm lint
pnpm build
```

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository from the Vercel dashboard.
3. Keep the detected **Next.js** framework preset and default build settings.
4. Add `NEXT_PUBLIC_SITE_URL` with the final production URL, then deploy.

Vercel will install dependencies and run `next build` automatically. Every push
to the production branch creates a production deployment, while other branches
receive preview deployments.
