import type { AgentId } from "@/types";
import type { SharedMemoryRecord } from "@/agents/types";
import { createEmbedding } from "@/lib/openai";

const inMemoryStore: SharedMemoryRecord[] = [];

export async function writeAgentMemory(agentId: AgentId, content: string) {
  const record: SharedMemoryRecord = {
    id: crypto.randomUUID(),
    agentId,
    content,
    embedding: await createEmbedding(content),
    createdAt: new Date().toISOString(),
  };

  inMemoryStore.unshift(record);
  return record;
}

export async function readAgentMemory(agentId: AgentId, limit = 8) {
  return inMemoryStore.filter((record) => record.agentId === agentId || record.agentId === "ceo").slice(0, limit);
}

export async function readSharedMemory(limit = 12) {
  return inMemoryStore.slice(0, limit);
}
