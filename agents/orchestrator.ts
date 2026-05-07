import { Annotation, END, START, StateGraph } from "@langchain/langgraph";

import { aiCeoNode } from "@/agents/ceo";
import { aiCfoNode } from "@/agents/cfo";
import { aiCmoNode } from "@/agents/cmo";
import { aiCtoNode } from "@/agents/cto";
import type { AgentSignal, AgentState, SharedMemoryRecord } from "@/agents/types";
import type { AgentTask } from "@/types";

const AgentGraphState = Annotation.Root({
  businessContext: Annotation<string>({
    reducer: (_previous, next) => next,
    default: () => "NexusOS executive operating context",
  }),
  signals: Annotation<AgentSignal[]>({
    reducer: (_previous, next) => next,
    default: () => [],
  }),
  tasks: Annotation<AgentTask[]>({
    reducer: (_previous, next) => next,
    default: () => [],
  }),
  memory: Annotation<SharedMemoryRecord[]>({
    reducer: (_previous, next) => next,
    default: () => [],
  }),
  finalSummary: Annotation<string | undefined>({
    reducer: (_previous, next) => next,
    default: () => undefined,
  }),
});

async function finalizeNode(state: AgentState): Promise<Partial<AgentState>> {
  const summary = [
    "CFO identified churn pressure in SMB revenue.",
    "CEO delegated demand and reliability analysis.",
    "CMO found engagement decline in notification-led campaigns.",
    "CTO identified notification worker latency as a likely activation issue.",
    "Recovery plan: patch worker, launch engagement campaign, and update MRR forecast checkpoints.",
  ].join(" ");

  return {
    finalSummary: summary,
    memory: [
      ...state.memory,
      {
        id: "orchestration-summary",
        agentId: "ceo",
        content: summary,
        createdAt: new Date().toISOString(),
      },
    ],
  };
}

export function buildAgentGraph() {
  return new StateGraph(AgentGraphState)
    .addNode("cfo", aiCfoNode)
    .addNode("ceo", aiCeoNode)
    .addNode("cmo", aiCmoNode)
    .addNode("cto", aiCtoNode)
    .addNode("finalize", finalizeNode)
    .addEdge(START, "cfo")
    .addEdge("cfo", "ceo")
    .addEdge("ceo", "cmo")
    .addEdge("cmo", "cto")
    .addEdge("cto", "finalize")
    .addEdge("finalize", END)
    .compile();
}

export async function runExecutiveOrchestration(context = "Revenue drop detected in SMB cohort") {
  const graph = buildAgentGraph();
  return graph.invoke({
    businessContext: context,
    signals: [],
    tasks: [],
    memory: [],
  });
}
