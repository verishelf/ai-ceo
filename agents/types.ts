import type { AgentId, AgentTask } from "@/types";

export type SharedMemoryRecord = {
  id: string;
  agentId: AgentId;
  content: string;
  embedding?: number[];
  createdAt: string;
};

export type AgentSignal = {
  from: AgentId;
  to: AgentId;
  type: "analysis" | "delegation" | "alert" | "recommendation";
  content: string;
};

export type AgentState = {
  businessContext: string;
  signals: AgentSignal[];
  tasks: AgentTask[];
  memory: SharedMemoryRecord[];
  finalSummary?: string;
};
