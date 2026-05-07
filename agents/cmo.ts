import type { AgentState } from "@/agents/types";

export async function aiCmoNode(state: AgentState): Promise<Partial<AgentState>> {
  return {
    signals: [
      ...state.signals,
      {
        from: "cmo",
        to: "ceo",
        type: "analysis",
        content: "Notification-driven campaigns show engagement decline. Launch founder-led content and pause low-quality ad sets.",
      },
    ],
    tasks: [
      ...state.tasks,
      {
        id: "cmo-campaign-recovery",
        title: "Launch engagement recovery campaign across TikTok, YouTube, Instagram, X, and Facebook",
        owner: "cmo",
        status: "queued",
        priority: "high",
      },
    ],
  };
}
