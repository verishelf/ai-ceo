import type { AgentState } from "@/agents/types";

export async function aiCeoNode(state: AgentState): Promise<Partial<AgentState>> {
  return {
    signals: [
      ...state.signals,
      {
        from: "ceo",
        to: "cmo",
        type: "delegation",
        content: "Analyze whether engagement decline is contributing to the CFO revenue anomaly.",
      },
      {
        from: "ceo",
        to: "cto",
        type: "delegation",
        content: "Inspect notification reliability and product conversion instrumentation.",
      },
    ],
    tasks: [
      ...state.tasks,
      {
        id: "ceo-delegation",
        title: "Coordinate revenue recovery response across CFO, CMO, and CTO",
        owner: "ceo",
        status: "running",
        priority: "critical",
      },
    ],
  };
}
