"use client";

import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

import type { AgentId, KPI } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const kpis: Record<AgentId, KPI[]> = {
  ceo: [
    { label: "Strategy confidence", value: "94%", trend: 5.2 },
    { label: "Execution alignment", value: "88%", trend: 2.4 },
    { label: "Risk coverage", value: "91%", trend: 3.1 },
  ],
  cfo: [
    { label: "MRR growth", value: "6.4%", trend: 1.8 },
    { label: "Gross margin", value: "82%", trend: 2.1 },
    { label: "Churn risk", value: "3.2%", trend: -0.7 },
  ],
  cto: [
    { label: "Deploy success", value: "98%", trend: 1.5 },
    { label: "Open bugs", value: "14", trend: -12 },
    { label: "Review SLA", value: "2.1h", trend: -8 },
  ],
  cmo: [
    { label: "Engagement", value: "7.8%", trend: 2.9 },
    { label: "Campaign ROAS", value: "4.6x", trend: 0.8 },
    { label: "Trend velocity", value: "91", trend: 6.2 },
  ],
};

export function AnalyticsPanel({ agentId }: { agentId: AgentId }) {
  const health = agentId === "ceo" ? 91 : agentId === "cfo" ? 86 : agentId === "cto" ? 89 : 92;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics panel</CardTitle>
        <CardDescription>Realtime KPIs, health score, and anomaly context.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-[180px_1fr]">
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="68%" outerRadius="100%" data={[{ name: "health", value: health, fill: "#00e5ff" }]} startAngle={90} endAngle={-270}>
                <RadialBar background dataKey="value" cornerRadius={18} />
              </RadialBarChart>
            </ResponsiveContainer>
            <p className="-mt-24 text-center font-[var(--font-display)] text-4xl font-bold text-white">{health}</p>
            <p className="text-center text-xs text-slate-500">health score</p>
          </div>
          <div className="space-y-3">
            {kpis[agentId].map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{kpi.label}</p>
                  <span className="text-xs text-emerald-200">{kpi.trend > 0 ? "+" : ""}{kpi.trend}%</span>
                </div>
                <p className="mt-2 text-2xl font-semibold text-white">{kpi.value}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
