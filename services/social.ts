import { env } from "@/lib/env";

export type SocialPlatform = "tiktok" | "instagram" | "facebook" | "youtube" | "x";

export async function getSocialAnalytics() {
  const configured = {
    tiktok: Boolean(env.TIKTOK_API_KEY),
    instagram: Boolean(env.META_API_KEY),
    facebook: Boolean(env.META_API_KEY),
    youtube: Boolean(env.YOUTUBE_API_KEY),
    x: Boolean(env.X_API_KEY),
  } satisfies Record<SocialPlatform, boolean>;

  return {
    configured,
    trends: [
      { platform: "tiktok", topic: "AI agents replacing workflows", velocity: 94 },
      { platform: "youtube", topic: "Founder AI command centers", velocity: 88 },
      { platform: "x", topic: "Autonomous SaaS operators", velocity: 82 },
    ],
    generatedHooks: [
      "Stop hiring operators. Build them.",
      "The next executive on your team is an AI agent.",
      "Your SaaS dashboard should run the company, not just report on it.",
    ],
  };
}

export function buildContentSchedule() {
  return [
    { platform: "tiktok", time: "09:00", asset: "Founder-led hook video" },
    { platform: "instagram", time: "12:30", asset: "Carousel: AI executive workflow" },
    { platform: "youtube", time: "16:00", asset: "Short: NexusOS demo" },
    { platform: "x", time: "18:30", asset: "Thread: autonomous operators" },
  ];
}
