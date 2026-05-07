# NexusOS

NexusOS is a futuristic AI Executive Operating System built with Next.js 15, TypeScript, TailwindCSS, shadcn-style components, Supabase, OpenAI, LangGraph, Prisma, PostgreSQL, Recharts, Framer Motion, Zustand, and React Query.

It includes four interconnected AI executive agents:

- **AI CEO**: strategy, cross-agent orchestration, task delegation, executive summaries
- **AI CFO**: Stripe revenue analytics, MRR, churn, forecasting, anomaly detection
- **AI CTO**: GitHub analytics, build monitoring, code review feed, Cursor prompt generation
- **AI CMO**: TikTok/Instagram/Facebook/YouTube/X architecture, trend monitoring, campaign manager, content generation

## Quick start

```bash
npm install
cp .env.example .env.local
npm run db:generate
npm run dev
```

Open `http://localhost:3000`.

## Environment

Configure these variables in `.env.local` and Vercel:

```bash
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.5
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
GITHUB_TOKEN=
GITHUB_OWNER=
GITHUB_REPO=
STRIPE_SECRET_KEY=
TIKTOK_API_KEY=
META_API_KEY=
YOUTUBE_API_KEY=
X_API_KEY=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

The app has safe demo fallbacks for missing third-party credentials so the UI and architecture can run before production integrations are connected.

## Database

Prisma schema:

```bash
database/schema.prisma
```

Commands:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

## API routes

- `POST /api/ai`
- `GET /api/agents`
- `POST /api/agents/[agent]/chat`
- `GET /api/github`
- `GET /api/stripe`
- `GET /api/social`
- `GET /api/analytics`
- `GET|POST /api/tasks`
- `GET /api/orchestrator`

## Deployment

1. Create a Supabase project with Postgres, Auth, Realtime, Storage, and pgvector enabled if you want native vector columns.
2. Set all environment variables in Vercel.
3. Run `npm run db:push` against the production `DATABASE_URL`.
4. Deploy with Vercel. The build command is `npm run build`.
5. Leave Vercel's Output Directory blank for the Next.js framework preset. Do not set it to `public`; that makes the deployment behave like a static file site and can return 404s for App Router pages.

### Prisma 7 on Vercel

Prisma 7 no longer supports `url = env("DATABASE_URL")` inside `schema.prisma`. NexusOS stores the connection URL in `prisma.config.ts` and the Prisma client uses `@prisma/adapter-pg`. If Vercel reports `datasource property url is no longer supported`, redeploy the latest commit and confirm the deployed `database/schema.prisma` datasource only contains:

```prisma
datasource db {
  provider = "postgresql"
}
```

The build runs `scripts/verify-prisma-schema.mjs` before Prisma. Fresh Vercel deploys should print the commit SHA and datasource block. If Vercel logs still show `url = env("DATABASE_URL")`, the deployment is using an older commit, often because the failed deployment was redeployed from Vercel instead of triggering a new deployment from the latest pushed branch.

## Architecture

```text
/app          Next.js App Router pages, layouts, and API routes
/components   shadcn-style UI, dashboard, auth, layout, agent workspaces
/lib          env, OpenAI, Prisma, Supabase, constants, utilities
/agents       LangGraph nodes, shared memory, tools, orchestration workflows
/api          API route contract metadata
/hooks        React Query and responsive hooks
/store        Zustand state
/types        shared TypeScript types
/services     Stripe, GitHub, social, analytics, automation adapters
/prompts      AI system prompts
/database     Prisma schema, seed, and database docs
/styles       Tailwind global theme
```
