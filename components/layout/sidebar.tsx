import Link from "next/link";
import { BarChart3, BrainCircuit, Building2, Code2, DollarSign, Megaphone, Settings, Workflow } from "lucide-react";

import { agentPersonas } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Command Center", href: "/dashboard", icon: BarChart3 },
  { label: "Automation", href: "/dashboard#automation", icon: Workflow },
  { label: "Settings", href: "/settings", icon: Settings },
];

const agentIcons = {
  ceo: Building2,
  cfo: DollarSign,
  cto: Code2,
  cmo: Megaphone,
};

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl lg:block">
      <Link href="/" className="mb-8 flex items-center gap-3 rounded-2xl px-2">
        <div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-200 shadow-[0_0_35px_rgba(0,229,255,.16)]">
          <BrainCircuit className="h-6 w-6" />
        </div>
        <div>
          <p className="font-[var(--font-display)] text-xl font-bold tracking-wide text-white">NexusOS</p>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Executive AI</p>
        </div>
      </Link>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white">
            <item.icon className="h-4 w-4 text-cyan-200" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <p className="px-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">AI Agents</p>
        <div className="mt-3 space-y-2">
          {agentPersonas.map((agent) => {
            const Icon = agentIcons[agent.id];
            return (
              <Link
                key={agent.id}
                href={agent.path}
                className={cn(
                  "group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/10",
                  agent.accent === "cyan" && "hover:shadow-[0_0_30px_rgba(0,229,255,.12)]",
                )}
              >
                <Icon className="h-4 w-4 text-slate-300 group-hover:text-cyan-100" />
                <div>
                  <p className="text-sm font-medium text-white">{agent.name}</p>
                  <p className="text-xs text-slate-500">{agent.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
