import { NextResponse } from "next/server";

import { buildContentSchedule, getSocialAnalytics } from "@/services/social";

export async function GET() {
  return NextResponse.json({
    ...(await getSocialAnalytics()),
    schedule: buildContentSchedule(),
  });
}
