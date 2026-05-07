import { NextResponse } from "next/server";

import { getGitHubActivity } from "@/services/github";

export async function GET() {
  return NextResponse.json(await getGitHubActivity());
}
