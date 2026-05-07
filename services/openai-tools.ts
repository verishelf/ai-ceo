import { z } from "zod";

export const executiveRecommendationSchema = z.object({
  title: z.string(),
  impact: z.enum(["Low", "Medium", "High"]),
  owner: z.enum(["ceo", "cfo", "cto", "cmo"]),
  nextActions: z.array(z.string()).min(1),
});

export const openAiToolDefinitions = [
  {
    type: "function",
    function: {
      name: "create_executive_recommendation",
      description: "Create a structured executive recommendation for NexusOS.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string" },
          impact: { type: "string", enum: ["Low", "Medium", "High"] },
          owner: { type: "string", enum: ["ceo", "cfo", "cto", "cmo"] },
          nextActions: { type: "array", items: { type: "string" } },
        },
        required: ["title", "impact", "owner", "nextActions"],
      },
    },
  },
] as const;
