"use client";

import { motion } from "framer-motion";

import { agentPersonas } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function AgentStatusGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {agentPersonas.map((agent, index) => (
        <motion.div
          key={agent.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 + index * 0.06 }}
          className="glass-panel rounded-3xl p-5"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-white">{agent.name}</p>
              <p className="text-sm text-slate-400">{agent.title}</p>
            </div>
            <Badge variant="success">Online</Badge>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">{agent.mission}</p>
          <div className="mt-5 flex items-center gap-2 text-xs text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(0,229,255,.8)]" />
            Memory synced - LangGraph ready
          </div>
        </motion.div>
      ))}
    </div>
  );
}
