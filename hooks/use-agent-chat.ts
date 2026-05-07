"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import type { AgentId, AgentMessage } from "@/types";

export function useAgentChat(agentId: AgentId) {
  const [messages, setMessages] = useState<AgentMessage[]>([
    {
      id: "system-seed",
      agentId,
      role: "assistant",
      content: "NexusOS agent online. Ask for analysis, recommendations, task delegation, or operational plans.",
      createdAt: new Date().toISOString(),
    },
  ]);

  const mutation = useMutation({
    mutationFn: async (content: string) => {
      const userMessage: AgentMessage = {
        id: crypto.randomUUID(),
        agentId,
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };

      setMessages((current) => [...current, userMessage]);

      const response = await fetch(`/api/agents/${agentId}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content: messageContent }) => ({
            role: role === "tool" ? "system" : role,
            content: messageContent,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Agent response failed");
      }

      const assistantId = crypto.randomUUID();
      const assistantMessage: AgentMessage = {
        id: assistantId,
        agentId,
        role: "assistant",
        content: "",
        createdAt: new Date().toISOString(),
      };
      setMessages((current) => [...current, assistantMessage]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        setMessages((current) =>
          current.map((message) => (message.id === assistantId ? { ...message, content: message.content + chunk } : message)),
        );
      }
    },
  });

  return {
    messages,
    sendMessage: mutation.mutateAsync,
    isStreaming: mutation.isPending,
  };
}
