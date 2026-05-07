export const apiRoutes = {
  ai: "/api/ai",
  agents: "/api/agents",
  github: "/api/github",
  stripe: "/api/stripe",
  social: "/api/social",
  analytics: "/api/analytics",
  tasks: "/api/tasks",
  orchestrator: "/api/orchestrator",
} as const;

export type ApiRouteKey = keyof typeof apiRoutes;
