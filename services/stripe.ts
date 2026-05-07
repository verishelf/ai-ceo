import Stripe from "stripe";

import { env } from "@/lib/env";

export const stripe = env.STRIPE_SECRET_KEY
  ? new Stripe(env.STRIPE_SECRET_KEY, {
      appInfo: {
        name: "NexusOS",
      },
    })
  : null;

export async function getRevenueAnalytics() {
  if (!stripe) {
    return {
      mrr: 320000,
      arr: 3840000,
      churnRate: 3.2,
      subscriptions: 1284,
      forecast: [338000, 354000, 371000],
      source: "demo",
    };
  }

  const subscriptions = await stripe.subscriptions.list({ status: "active", limit: 100 });
  const mrr = subscriptions.data.reduce((sum, subscription) => {
    return (
      sum +
      subscription.items.data.reduce((itemSum, item) => {
        const amount = item.price.unit_amount ?? 0;
        const interval = item.price.recurring?.interval;
        const normalized = interval === "year" ? amount / 12 : amount;
        return itemSum + normalized * (item.quantity ?? 1);
      }, 0)
    );
  }, 0);

  return {
    mrr: mrr / 100,
    arr: (mrr * 12) / 100,
    churnRate: 0,
    subscriptions: subscriptions.data.length,
    forecast: [],
    source: "stripe",
  };
}
