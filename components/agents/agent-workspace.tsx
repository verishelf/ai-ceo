import { ArrowRightLeft, Brain, ClipboardList, Sparkles } from "lucide-react";

import type { AgentId, Recommendation } from "@/types";
import { agentPersonas } from "@/lib/constants";
import { AnalyticsPanel } from "@/components/agents/analytics-panel";
import { ChatInterface } from "@/components/agents/chat-interface";
import { TaskBoard } from "@/components/agents/task-board";
import { RecommendationsFeed } from "@/components/dashboard/recommendations-feed";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agentRecommendations: Record<AgentId, Recommendation[]> = {
  ceo: [
    { id: "ceo-1", agent: "AI CEO", title: "Delegate enterprise onboarding sprint", impact: "High", body: "Ask CTO to estimate workflow automation and CMO to package launch narrative." },
    { id: "ceo-2", agent: "AI CEO", title: "Create weekly board signal digest", impact: "Medium", body: "Summarize finance, product velocity, and pipeline risk into a persistent executive memory." },
  ],
  cfo: [
    { id: "cfo-1", agent: "AI CFO", title: "Investigate revenue anomaly", impact: "High", body: "Stripe subscription downgrades increased in the SMB cohort. Trigger retention workflow." },
    { id: "cfo-2", agent: "AI CFO", title: "Reforecast enterprise expansion", impact: "Medium", body: "Expansion MRR is outperforming plan. Update cash forecast and quota allocation." },
  ],
  cto: [
    { id: "cto-1", agent: "AI CTO", title: "Patch notification latency", impact: "High", body: "Queue worker saturation correlates with engagement dips. Generate Cursor prompt for remediation." },
    { id: "cto-2", agent: "AI CTO", title: "Prioritize code review risk", impact: "Medium", body: "Review files with auth and billing blast radius before next deployment." },
  ],
  cmo: [
    { id: "cmo-1", agent: "AI CMO", title: "Launch TikTok hook series", impact: "High", body: "Use founder-led hooks around autonomous operators and workflow compression." },
    { id: "cmo-2", agent: "AI CMO", title: "Schedule cross-channel campaign", impact: "Medium", body: "Repurpose best TikTok scripts into YouTube Shorts, Reels, and X threads." },
  ],
};

const pageCopy: Record<AgentId, { headline: string; detail: string; features: string[] }> = {
  ceo: {
    headline: "Strategic command and cross-agent orchestration",
    detail: "Executive summaries, KPI synthesis, communication across agents, strategic recommendations, and task delegation.",
    features: ["Business health score", "Cross-agent communication", "Strategic planning", "Streaming memory"],
  },
  cfo: {
    headline: "Financial intelligence, Stripe analytics, and forecasting",
    detail: "MRR tracking, churn calculations, revenue forecasts, expense insight, and anomaly detection workflows.",
    features: ["Stripe subscriptions", "MRR and churn", "Forecasting charts", "Expense tracking"],
  },
  cto: {
    headline: "Engineering autopilot for GitHub, builds, and delivery risk",
    detail: "Repository analytics, AI code review feed, deployment status, bug detection, and Cursor prompt generation.",
    features: ["GitHub activity", "Build monitoring", "Cursor prompt generator", "Feature planning"],
  },
  cmo: {
    headline: "Growth operating layer for social trends and campaigns",
    detail: "TikTok, Instagram, Facebook, YouTube, and X architecture for trend monitoring, content generation, and scheduling.",
    features: ["Viral trends", "Caption and hashtag generator", "Campaign manager", "Ad performance"],
  },
};

export function AgentWorkspace({ agentId }: { agentId: AgentId }) {
  const agent = agentPersonas.find((item) => item.id === agentId);
  const copy = pageCopy[agentId];

  if (!agent) {
    return null;
  }

  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <Badge>{agent.name}</Badge>
        <h1 className="mt-4 max-w-4xl font-[var(--font-display)] text-4xl font-bold tracking-tight text-gradient sm:text-5xl">{copy.headline}</h1>
        <p className="mt-4 max-w-3xl text-slate-300">{copy.detail}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {copy.features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <ChatInterface agentId={agentId} />
        <div className="space-y-6">
          <AnalyticsPanel agentId={agentId} />
          <TaskBoard agentId={agentId} />
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-cyan-200" />
              Cross-agent communication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-300">
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">CFO detects revenue drop and notifies CEO with Stripe context.</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">CEO delegates CMO analysis for engagement decline and CTO review for notification reliability.</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">CTO identifies worker bug; CMO adjusts campaign schedule; CFO updates forecast memory.</p>
          </CardContent>
        </Card>
        <RecommendationsFeed items={agentRecommendations[agentId]} />
      </section>

      {agentId === "cto" ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-violet-200" />
              Cursor prompt generator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-auto rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-cyan-100">
{`Investigate notification worker latency.
- Inspect queue consumers and retry policy.
- Add regression tests around delayed notifications.
- Preserve Supabase auth session behavior.
- Report root cause, risk, and deployment steps.`}
            </pre>
          </CardContent>
        </Card>
      ) : null}

      {agentId === "cmo" ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-200" />
              AI content generator
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-3">
            {["Stop hiring operators. Build them.", "Your next executive team member is an AI agent.", "The dashboard that runs your company while you sleep."].map((hook) => (
              <div key={hook} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200">
                {hook}
                <p className="mt-3 text-xs text-slate-500">#AI #SaaS #Founder #Automation</p>
              </div>
            ))}
          </CardContent>
        </Card>
      ) : null}

      {agentId === "ceo" ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-cyan-200" />
              Executive summary panel
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm leading-7 text-slate-300">
            Company health is strong with enterprise growth offsetting SMB churn. Recommended focus: enterprise onboarding automation,
            notification reliability, and founder-led content distribution.
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
