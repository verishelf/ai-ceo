import type { AgentPersona, DashboardMetric, Recommendation } from "@/types";

export const agentPersonas: AgentPersona[] = [
  {
    id: "ceo",
    name: "AI CEO",
    title: "Strategic Commander",
    mission: "Synthesize company-wide signals, coordinate agents, and recommend executive decisions.",
    accent: "cyan",
    path: "/agents/ceo",
  },
  {
    id: "cfo",
    name: "AI CFO",
    title: "Revenue Intelligence",
    mission: "Detect financial anomalies, forecast MRR, and optimize unit economics.",
    accent: "green",
    path: "/agents/cfo",
  },
  {
    id: "cto",
    name: "AI CTO",
    title: "Engineering Autopilot",
    mission: "Monitor delivery, code quality, infrastructure risk, and product execution.",
    accent: "violet",
    path: "/agents/cto",
  },
  {
    id: "cmo",
    name: "AI CMO",
    title: "Growth Engine",
    mission: "Track viral trends, manage campaigns, and generate high-converting content.",
    accent: "pink",
    path: "/agents/cmo",
  },
];

export const executiveMetrics: DashboardMetric[] = [
  { label: "ARR", value: "$3.84M", delta: 12.8, tone: "positive" },
  { label: "MRR", value: "$320K", delta: 6.4, tone: "positive" },
  { label: "Burn Multiple", value: "1.42x", delta: -8.1, tone: "positive" },
  { label: "Health Score", value: "91", delta: 3.2, tone: "positive" },
];

export const recommendations: Recommendation[] = [
  {
    id: "rec-1",
    agent: "AI CEO",
    title: "Shift Q3 roadmap toward enterprise onboarding",
    impact: "High",
    body: "Pipeline velocity rose 18% where onboarding automation was included. Delegate CTO + CMO to package an enterprise launch motion.",
  },
  {
    id: "rec-2",
    agent: "AI CFO",
    title: "Investigate SMB churn cluster",
    impact: "Medium",
    body: "Accounts under $499 MRR show elevated churn after day 42. Add lifecycle nudges and billing health checks.",
  },
  {
    id: "rec-3",
    agent: "AI CMO",
    title: "Launch founder-led video sequence",
    impact: "High",
    body: "AI automation topics are trending across TikTok and YouTube Shorts. Publish five hooks around autonomous operators.",
  },
];

export const revenueSeries = [
  { month: "Jan", revenue: 212000, expenses: 126000, forecast: 218000 },
  { month: "Feb", revenue: 230000, expenses: 132000, forecast: 236000 },
  { month: "Mar", revenue: 248000, expenses: 139000, forecast: 252000 },
  { month: "Apr", revenue: 276000, expenses: 151000, forecast: 281000 },
  { month: "May", revenue: 298000, expenses: 158000, forecast: 304000 },
  { month: "Jun", revenue: 320000, expenses: 166000, forecast: 338000 },
];

export const socialSeries = [
  { channel: "TikTok", reach: 840000, engagement: 7.8 },
  { channel: "Instagram", reach: 520000, engagement: 5.2 },
  { channel: "YouTube", reach: 610000, engagement: 6.4 },
  { channel: "X", reach: 390000, engagement: 4.1 },
  { channel: "Facebook", reach: 210000, engagement: 2.9 },
];

export const engineeringSeries = [
  { day: "Mon", commits: 32, builds: 18, incidents: 1 },
  { day: "Tue", commits: 41, builds: 22, incidents: 0 },
  { day: "Wed", commits: 38, builds: 19, incidents: 2 },
  { day: "Thu", commits: 46, builds: 26, incidents: 0 },
  { day: "Fri", commits: 52, builds: 31, incidents: 1 },
];
