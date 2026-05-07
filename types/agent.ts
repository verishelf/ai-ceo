import type { AgentId, AgentTask } from "@/types";

export type AgentContext = {
  userId?: string;
  agentId: AgentId;
  businessSnapshot: string;
  memory: string[];
  tasks: AgentTask[];
};

export type AgentResponse = {
  agentId: AgentId;
  content: string;
  recommendations: string[];
  delegatedTasks: AgentTask[];
};

export type OrchestrationEvent = {
  id: string;
  from: AgentId;
  to: AgentId;
  signal: string;
  summary: string;
  createdAt: string;
};
