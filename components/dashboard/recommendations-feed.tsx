import { Sparkles } from "lucide-react";

import type { Recommendation } from "@/types";
import { recommendations } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RecommendationsFeed({ items = recommendations }: { items?: Recommendation[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-200" />
          AI recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/70">{item.agent}</p>
                <h3 className="mt-1 font-semibold text-white">{item.title}</h3>
              </div>
              <Badge variant={item.impact === "High" ? "default" : "secondary"}>{item.impact}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
          </article>
        ))}
      </CardContent>
    </Card>
  );
}
