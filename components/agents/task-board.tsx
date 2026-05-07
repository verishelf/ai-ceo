import { CheckCircle2, CircleDashed, Clock, ShieldAlert } from "lucide-react";

import type { AgentId, AgentTask } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tasks: AgentTask[] = [
  { id: "task-1", title: "Investigate week-over-week KPI variance", owner: "ceo", status: "running", priority: "high" },
  { id: "task-2", title: "Generate executive recommendation memo", owner: "ceo", status: "queued", priority: "medium" },
  { id: "task-3", title: "Coordinate cross-agent remediation plan", owner: "ceo", status: "completed", priority: "critical" },
  { id: "task-4", title: "Monitor anomaly threshold and alert owner", owner: "cfo", status: "blocked", priority: "high" },
];

const statusIcon = {
  queued: Clock,
  running: CircleDashed,
  blocked: ShieldAlert,
  completed: CheckCircle2,
};

export function TaskBoard({ agentId }: { agentId: AgentId }) {
  const scopedTasks = tasks.map((task) => (task.owner === "ceo" ? { ...task, owner: agentId } : task)).slice(0, 4);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task system</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {scopedTasks.map((task) => {
          const Icon = statusIcon[task.status];
          return (
            <div key={task.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3">
                  <Icon className="mt-1 h-4 w-4 text-cyan-200" />
                  <div>
                    <p className="text-sm font-medium text-white">{task.title}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{task.status}</p>
                  </div>
                </div>
                <Badge variant={task.priority === "critical" ? "danger" : task.priority === "high" ? "warning" : "secondary"}>{task.priority}</Badge>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
