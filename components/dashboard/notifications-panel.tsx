import { BellRing } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const notifications = [
  ["Revenue", "Stripe MRR beat forecast by $18K.", "success"],
  ["GitHub", "Main deployment health recovered.", "secondary"],
  ["Social", "TikTok hook set entered top 8% engagement.", "default"],
  ["Alert", "SMB churn segment needs follow-up.", "warning"],
] as const;

export function NotificationsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BellRing className="h-5 w-5 text-cyan-200" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {notifications.map(([label, body, variant]) => (
          <div key={body} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-2 flex items-center justify-between">
              <Badge variant={variant}>{label}</Badge>
              <span className="text-xs text-slate-500">now</span>
            </div>
            <p className="text-sm text-slate-300">{body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
