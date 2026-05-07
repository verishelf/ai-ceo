import { automationWorkflows, scheduleAutomationTask } from "@/agents/workflows";

export async function runAutomationCycle() {
  const tasks = automationWorkflows.filter((workflow) => workflow.enabled).map((workflow) => scheduleAutomationTask(workflow.id));

  return {
    workflows: automationWorkflows,
    tasks,
    status: "queued",
  };
}
