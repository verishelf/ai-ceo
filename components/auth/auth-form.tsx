"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { BrainCircuit } from "lucide-react";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setMessage("Supabase environment variables are not configured. Add them to enable authentication.");
      setIsLoading(false);
      return;
    }

    const result =
      mode === "login"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (result.error) {
      setMessage(result.error.message);
      setIsLoading(false);
      return;
    }

    router.push(searchParams.get("next") ?? "/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="glass-panel animated-border w-full max-w-md rounded-3xl p-8">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-200">
          <BrainCircuit className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-[var(--font-display)] text-2xl font-semibold text-white">
            {mode === "login" ? "Access NexusOS" : "Create your NexusOS account"}
          </h1>
          <p className="text-sm text-slate-400">Supabase email/password authentication</p>
        </div>
      </div>
      <div className="space-y-4">
        <Input type="email" placeholder="founder@company.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={6}
        />
      </div>
      {message ? <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100">{message}</p> : null}
      <Button className="mt-6 w-full" type="submit" disabled={isLoading}>
        {isLoading ? "Authenticating..." : mode === "login" ? "Sign in" : "Create account"}
      </Button>
    </form>
  );
}
