"use client";

import { FormEvent, useState } from "react";
import { Bot, Send, User } from "lucide-react";

import type { AgentId } from "@/types";
import { useAgentChat } from "@/hooks/use-agent-chat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ChatInterface({ agentId }: { agentId: AgentId }) {
  const { messages, sendMessage, isStreaming } = useAgentChat(agentId);
  const [input, setInput] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = input.trim();
    if (!content) {
      return;
    }
    setInput("");
    await sendMessage(content);
  }

  return (
    <div className="glass-panel flex h-[620px] flex-col rounded-3xl">
      <div className="border-b border-white/10 p-5">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-white">Streaming AI interface</h2>
        <p className="text-sm text-slate-400">Memory-aware ChatGPT-style assistant with task and tool context.</p>
      </div>
      <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto p-5">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            {message.role !== "user" ? (
              <div className="mt-1 h-8 w-8 rounded-full bg-cyan-300/15 p-2 text-cyan-100">
                <Bot className="h-4 w-4" />
              </div>
            ) : null}
            <div className={`max-w-[82%] rounded-2xl p-4 text-sm leading-6 ${message.role === "user" ? "bg-cyan-300 text-slate-950" : "bg-white/[0.07] text-slate-200"}`}>
              {message.content || <span className="animate-pulse text-slate-400">Thinking...</span>}
            </div>
            {message.role === "user" ? (
              <div className="mt-1 h-8 w-8 rounded-full bg-white/10 p-2 text-white">
                <User className="h-4 w-4" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <form onSubmit={onSubmit} className="border-t border-white/10 p-4">
        <div className="flex gap-3">
          <Textarea
            className="min-h-14 resize-none"
            placeholder="Ask for strategy, anomalies, forecasts, code review, campaign plans..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button className="self-end" size="icon" type="submit" disabled={isStreaming}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
