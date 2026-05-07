import { PrismaClient, AgentRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const agents = [
    ["CEO", "AI CEO", "Strategic executive coordination"],
    ["CFO", "AI CFO", "Revenue analytics and financial forecasting"],
    ["CTO", "AI CTO", "Engineering delivery and reliability intelligence"],
    ["CMO", "AI CMO", "Growth, content, and campaign intelligence"],
  ] as const;

  for (const [role, name, mission] of agents) {
    await prisma.aiAgent.upsert({
      where: { role: role as AgentRole },
      update: { name, mission },
      create: {
        role: role as AgentRole,
        name,
        mission,
        systemPrompt: `${name} system prompt for NexusOS production orchestration.`,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
