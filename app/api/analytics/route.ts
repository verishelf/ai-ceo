import { NextResponse } from "next/server";

import { getAnalyticsSnapshot } from "@/services/analytics";

export async function GET() {
  return NextResponse.json(await getAnalyticsSnapshot());
}
