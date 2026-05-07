import type { AgentTask } from "@/types";

export type AutomationWorkflow = {
  id: string;
  name: string;
  trigger: string;
  actions: string[];
  enabled: boolean;
};

export const automationWorkflows: AutomationWorkflow[] = [
  {
    id: "revenue-monitor",
    name: "Revenue anomaly monitor",
    trigger: "Stripe MRR or churn moves outside configured thresholds",
    actions: ["Notify AI CFO", "Ask AI CEO for cross-agent plan", "Create retention task"],
    enabled: true,
  },
  {
    id: "campaign-scheduler",
    name: "Campaign automation",
    trigger: "CMO approves generated social content",
    actions: ["Schedule posts", "Track engagement", "Notify if trend velocity decays"],
    enabled: true,
  },
  {
    id: "engineering-alert",
    name: "Engineering reliability alert",
    trigger: "GitHub deployment, build, or error signal crosses threshold",
    actions: ["Notify AI CTO", "Generate Cursor prompt", "Open remediation task"],
    enabled: true,
  },
];

export function scheduleAutomationTask(workflowId: string): AgentTask {
  return {
    id: crypto.randomUUID(),
    title: `Run workflow ${workflowId}`,
    owner: workflowId.includes("campaign") ? "cmo" : workflowId.includes("engineering") ? "cto" : "cfo",
    status: "queued",
    priority: "high",
  };
}
