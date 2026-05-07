"use client";

import { useQuery } from "@tanstack/react-query";

export function useLiveAnalytics() {
  return useQuery({
    queryKey: ["analytics", "live"],
    queryFn: async () => {
      const response = await fetch("/api/analytics");
      if (!response.ok) {
        throw new Error("Unable to load analytics");
      }
      return response.json();
    },
    refetchInterval: 15_000,
  });
}
