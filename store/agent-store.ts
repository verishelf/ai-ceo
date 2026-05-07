import { create } from "zustand";

import type { AgentId, AgentTask } from "@/types";

type AgentStore = {
  selectedAgent: AgentId;
  tasks: AgentTask[];
  setSelectedAgent: (agent: AgentId) => void;
  addTask: (task: AgentTask) => void;
};

export const useAgentStore = create<AgentStore>((set) => ({
  selectedAgent: "ceo",
  tasks: [],
  setSelectedAgent: (selectedAgent) => set({ selectedAgent }),
  addTask: (task) => set((state) => ({ tasks: [task, ...state.tasks] })),
}));
