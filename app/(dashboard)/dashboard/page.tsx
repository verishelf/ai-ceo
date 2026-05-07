import { ActivityStream } from "@/components/dashboard/activity-stream";
import { AgentStatusGrid } from "@/components/dashboard/agent-status-grid";
import { EngineeringChart } from "@/components/dashboard/engineering-chart";
import { MetricCard } from "@/components/dashboard/metric-card";
import { NotificationsPanel } from "@/components/dashboard/notifications-panel";
import { RecommendationsFeed } from "@/components/dashboard/recommendations-feed";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { SocialChart } from "@/components/dashboard/social-chart";
import { Badge } from "@/components/ui/badge";
import { executiveMetrics } from "@/lib/constants";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge>Command Center</Badge>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold tracking-tight text-gradient sm:text-5xl">
              Executive operating layer
            </h1>
            <p className="mt-4 max-w-3xl text-slate-300">
              NexusOS unifies revenue, engineering, growth, and strategy signals into an autonomous multi-agent control surface.
            </p>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-right">
            <p className="text-sm text-cyan-100/75">Business health score</p>
            <p className="font-[var(--font-display)] text-5xl font-bold text-cyan-100">91</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {executiveMetrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </section>

      <AgentStatusGrid />

      <section className="grid gap-6 xl:grid-cols-[1.4fr_.9fr]">
        <RevenueChart />
        <RecommendationsFeed />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <SocialChart />
        <EngineeringChart />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <NotificationsPanel />
        <ActivityStream />
      </section>

      <section id="automation" className="glass-panel rounded-3xl p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-[var(--font-display)] text-2xl font-semibold text-white">Automation workflows</h2>
            <p className="mt-2 text-sm text-slate-400">Revenue monitors, campaign scheduling, alert routing, and autonomous AI tasks are ready to connect to production queues.</p>
          </div>
          <Badge variant="success">Realtime architecture enabled</Badge>
        </div>
      </section>
    </div>
  );
}
