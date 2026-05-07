# NexusOS database

NexusOS uses Prisma ORM with PostgreSQL. The schema is stored at `database/schema.prisma` and includes tables for users, AI agents, AI messages, notifications, campaigns, revenue data, GitHub activity, social posts, tasks, analytics, and activity logs.

## Commands

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

Supabase can host the PostgreSQL database, authentication, realtime subscriptions, storage, and vector-style memory payloads. Agent embeddings are modeled as JSON so the app runs against standard PostgreSQL immediately; production deployments can switch this column to pgvector when the Supabase extension is enabled.
