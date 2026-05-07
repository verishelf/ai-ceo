import type { AgentState } from "@/agents/types";

export async function aiCfoNode(state: AgentState): Promise<Partial<AgentState>> {
  return {
    signals: [
      ...state.signals,
      {
        from: "cfo",
        to: "ceo",
        type: "alert",
        content: "Revenue expansion is healthy, but SMB churn increased after day 42. Ask CMO and CTO to inspect demand and notification health.",
      },
    ],
    tasks: [
      ...state.tasks,
      {
        id: "cfo-anomaly",
        title: "Quantify SMB churn impact and update MRR forecast",
        owner: "cfo",
        status: "running",
        priority: "high",
      },
    ],
  };
}
