import Link from "next/link";
import { ArrowRight, BrainCircuit, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden nexus-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
          <Sparkles className="h-4 w-4" />
          Autonomous executive command center
        </div>
        <h1 className="max-w-5xl text-balance font-[var(--font-display)] text-5xl font-bold tracking-tight text-gradient sm:text-7xl">
          NexusOS turns your company into an AI-powered operating system.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Coordinate AI CEO, CFO, CTO, and CMO agents across revenue, engineering, marketing, and strategy with streaming intelligence,
          memory, analytics, and automated task delegation.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/dashboard">
              Enter command center <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/login">Sign in with Supabase</Link>
          </Button>
        </div>
        <div className="mt-16 grid w-full gap-4 md:grid-cols-3">
          {[
            ["Multi-agent LangGraph", "Shared memory, message passing, and task delegation."],
            ["Enterprise analytics", "Revenue, campaign, GitHub, and operational KPI intelligence."],
            ["Vercel ready", "Next.js 15 App Router with Prisma, Supabase, and API routes."],
          ].map(([title, body]) => (
            <div key={title} className="glass-panel rounded-3xl p-6 text-left">
              <BrainCircuit className="mb-4 h-6 w-6 text-cyan-200" />
              <h2 className="font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm text-slate-400">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 text-sm text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-300" />
          Supabase Auth protected routes and persistent sessions included.
        </div>
      </section>
    </main>
  );
}
