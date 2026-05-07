import type { AgentId } from "@/types";

export type AgentTool = {
  name: string;
  description: string;
  execute: (input: string) => Promise<string>;
};

export const agentTools: Record<AgentId, AgentTool[]> = {
  ceo: [
    {
      name: "delegate_task",
      description: "Create a task for another executive agent.",
      execute: async (input) => `Delegated task: ${input}`,
    },
  ],
  cfo: [
    {
      name: "detect_financial_anomaly",
      description: "Inspect revenue, churn, and expense signals.",
      execute: async () => "MRR is up 6.4%; SMB churn is above threshold and requires retention automation.",
    },
  ],
  cto: [
    {
      name: "generate_cursor_prompt",
      description: "Generate a Cursor-ready remediation prompt.",
      execute: async (input) => `Cursor prompt generated for: ${input}`,
    },
  ],
  cmo: [
    {
      name: "generate_social_hooks",
      description: "Generate TikTok hooks, captions, hashtags, and campaign recommendations.",
      execute: async () => "Hooks: 'Stop hiring operators. Build them.' #AI #SaaS #Automation",
    },
  ],
};
