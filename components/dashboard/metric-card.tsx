"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import type { DashboardMetric } from "@/types";
import { cn, toPercent } from "@/lib/utils";

export function MetricCard({ metric, index }: { metric: DashboardMetric; index: number }) {
  const isPositive = metric.tone === "positive";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      className="glass-panel animated-border rounded-3xl p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{metric.label}</p>
          <p className="mt-3 font-[var(--font-display)] text-3xl font-bold text-white">{metric.value}</p>
        </div>
        <div
          className={cn(
            "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
            isPositive ? "bg-emerald-300/10 text-emerald-100" : "bg-red-300/10 text-red-100",
          )}
        >
          {isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
          {toPercent(metric.delta)}
        </div>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400" />
      </div>
    </motion.div>
  );
}
