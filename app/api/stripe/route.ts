import { NextResponse } from "next/server";

import { getRevenueAnalytics } from "@/services/stripe";

export async function GET() {
  return NextResponse.json(await getRevenueAnalytics());
}
