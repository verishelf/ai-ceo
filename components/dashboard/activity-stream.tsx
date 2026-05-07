import { Activity, AlertTriangle, CheckCircle2, Info } from "lucide-react";

import type { ActivityLog } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const logs: ActivityLog[] = [
  { id: "log-1", agent: "AI CFO", event: "Detected 6.4% expansion MRR increase in enterprise cohort.", timestamp: "2 min ago", severity: "success" },
  { id: "log-2", agent: "AI CTO", event: "Flagged notification worker latency and opened mitigation task.", timestamp: "7 min ago", severity: "warning" },
  { id: "log-3", agent: "AI CMO", event: "Queued 12 trend-aware caption variants for TikTok launch.", timestamp: "12 min ago", severity: "info" },
  { id: "log-4", agent: "AI CEO", event: "Delegated revenue-drop investigation to CFO, CMO, and CTO.", timestamp: "18 min ago", severity: "info" },
];

const iconMap = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  critical: Activity,
};

export function ActivityStream() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live activity stream</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {logs.map((log) => {
            const Icon = iconMap[log.severity];
            return (
              <div key={log.id} className="flex gap-3">
                <div className="mt-1 rounded-full bg-white/10 p-2 text-cyan-100">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{log.agent}</p>
                  <p className="text-sm leading-6 text-slate-400">{log.event}</p>
                  <p className="text-xs text-slate-500">{log.timestamp}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
