import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { readAgentMemory, writeAgentMemory } from "@/agents/memory";
import { streamTextResponse } from "@/lib/openai";
import { agentSystemPrompts } from "@/prompts/agents";
import type { AgentId } from "@/types";

const paramsSchema = z.object({
  agent: z.enum(["ceo", "cfo", "cto", "cmo"]),
});

const bodySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string(),
    }),
  ),
});

export async function POST(request: NextRequest, context: { params: Promise<{ agent: string }> }) {
  const { agent } = paramsSchema.parse(await context.params);
  const body = bodySchema.parse(await request.json());
  const agentId = agent as AgentId;
  const memory = await readAgentMemory(agentId);
  const latestUserMessage = [...body.messages].reverse().find((message) => message.role === "user");

  if (latestUserMessage) {
    await writeAgentMemory(agentId, latestUserMessage.content);
  }

  const system = `${agentSystemPrompts[agentId]}

Persistent memory:
${memory.map((item) => `- ${item.content}`).join("\n") || "- No prior memory yet."}

Use structured thinking internally. Respond with direct executive language, recommended actions, owners, and measurable follow-up.`;

  const stream = await streamTextResponse({
    system,
    messages: body.messages,
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}

export function GET() {
  return NextResponse.json({
    message: "POST messages to stream a NexusOS agent response.",
  });
}
