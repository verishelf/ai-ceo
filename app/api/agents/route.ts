import { NextResponse } from "next/server";

import { agentPersonas } from "@/lib/constants";

export async function GET() {
  return NextResponse.json({
    agents: agentPersonas.map((agent) => ({
      ...agent,
      status: "online",
      memory: "synced",
    })),
  });
}
