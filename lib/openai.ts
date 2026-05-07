import OpenAI from "openai";

import { env } from "@/lib/env";

export const openai = env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    })
  : null;

export async function streamTextResponse({
  system,
  messages,
}: {
  system: string;
  messages: { role: "user" | "assistant" | "system"; content: string }[];
}) {
  if (!openai) {
    return new ReadableStream({
      start(controller) {
        const encoder = new TextEncoder();
        const demo = [
          "NexusOS demo mode: ",
          "connect OPENAI_API_KEY to enable live GPT-5.5 reasoning. ",
          "Based on the supplied context, I recommend prioritizing the highest impact KPI anomaly, delegating ownership, and creating a measurable follow-up task.",
        ];
        demo.forEach((chunk) => controller.enqueue(encoder.encode(chunk)));
        controller.close();
      },
    });
  }

  const response = await openai.chat.completions.create({
    model: env.OPENAI_MODEL,
    stream: true,
    temperature: 0.4,
    messages: [{ role: "system", content: system }, ...messages],
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          controller.enqueue(encoder.encode(content));
        }
      }
      controller.close();
    },
  });
}

export async function createEmbedding(input: string) {
  if (!openai) {
    return Array.from({ length: 1536 }, (_, index) => Math.sin(index + input.length));
  }

  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input,
  });

  return response.data[0]?.embedding ?? [];
}
