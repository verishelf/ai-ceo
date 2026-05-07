import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(1),
  owner: z.enum(["ceo", "cfo", "cto", "cmo"]),
  priority: z.enum(["low", "medium", "high", "critical"]).default("medium"),
});

const tasks: z.infer<typeof taskSchema>[] = [];

export async function GET() {
  return NextResponse.json({ tasks });
}

export async function POST(request: NextRequest) {
  const task = taskSchema.parse(await request.json());
  tasks.unshift(task);
  return NextResponse.json({ task, status: "queued" }, { status: 201 });
}
