import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const schemaPath = "database/schema.prisma";
const schema = readFileSync(schemaPath, "utf8");
const commit = process.env.VERCEL_GIT_COMMIT_SHA ?? execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();

console.log(`[nexusos] Building commit: ${commit}`);
console.log("[nexusos] Prisma datasource block:");
console.log(schema.match(/datasource\s+db\s+\{[\s\S]*?\}/)?.[0] ?? "datasource db block not found");

if (/^\s*url\s*=\s*env\("DATABASE_URL"\)/m.test(schema)) {
  console.error(
    [
      "[nexusos] Invalid Prisma 7 schema detected.",
      "Prisma 7 does not support datasource.url inside schema.prisma.",
      "Deploy the latest branch commit where database/schema.prisma removes this line and prisma.config.ts owns DATABASE_URL.",
    ].join("\n"),
  );
  process.exit(1);
}
