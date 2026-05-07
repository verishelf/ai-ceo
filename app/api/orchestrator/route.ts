import { NextResponse } from "next/server";

import { runExecutiveOrchestration } from "@/agents/orchestrator";

export async function GET() {
  return NextResponse.json(await runExecutiveOrchestration());
}
