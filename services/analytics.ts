import { engineeringSeries, revenueSeries, socialSeries } from "@/lib/constants";

export async function getAnalyticsSnapshot() {
  return {
    generatedAt: new Date().toISOString(),
    kpis: {
      businessHealth: 91,
      revenueGrowth: 12.8,
      marketingEngagement: 7.8,
      deploySuccess: 98,
    },
    revenueSeries,
    socialSeries,
    engineeringSeries,
  };
}

export function createRealtimeAnalyticsEvent(channel: string, payload: unknown) {
  return {
    id: crypto.randomUUID(),
    channel,
    payload,
    emittedAt: new Date().toISOString(),
  };
}
