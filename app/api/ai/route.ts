import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { streamTextResponse } from "@/lib/openai";

const bodySchema = z.object({
  prompt: z.string().min(1),
  context: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const body = bodySchema.parse(await request.json());
  const stream = await streamTextResponse({
    system: "You are NexusOS, a production AI executive operating system. Provide concise, structured, enterprise-ready guidance.",
    messages: [
      {
        role: "user",
        content: `${body.context ? `Context:\n${body.context}\n\n` : ""}${body.prompt}`,
      },
    ],
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}

export async function GET() {
  return NextResponse.json({
    capabilities: ["streaming responses", "memory context", "structured tool architecture", "embeddings"],
  });
}
