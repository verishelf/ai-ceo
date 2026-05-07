import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "database/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/nexusos",
  },
  migrations: {
    seed: "tsx database/seed.ts",
  },
});
