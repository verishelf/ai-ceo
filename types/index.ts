export type AgentId = "ceo" | "cfo" | "cto" | "cmo";

export type AgentPersona = {
  id: AgentId;
  name: string;
  title: string;
  mission: string;
  accent: "cyan" | "green" | "violet" | "pink";
  path: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  delta: number;
  tone: "positive" | "negative" | "neutral";
};

export type Recommendation = {
  id: string;
  agent: string;
  title: string;
  impact: "Low" | "Medium" | "High";
  body: string;
};

export type ActivityLog = {
  id: string;
  agent: string;
  event: string;
  timestamp: string;
  severity: "info" | "success" | "warning" | "critical";
};

export type AgentMessage = {
  id: string;
  agentId: AgentId;
  role: "user" | "assistant" | "system" | "tool";
  content: string;
  createdAt: string;
};

export type AgentTask = {
  id: string;
  title: string;
  owner: AgentId;
  status: "queued" | "running" | "blocked" | "completed";
  priority: "low" | "medium" | "high" | "critical";
  dueAt?: string;
};

export type KPI = {
  label: string;
  value: string;
  trend: number;
};
