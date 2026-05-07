import Link from "next/link";
import { Bell, Menu, RadioTower, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/55 px-4 py-4 backdrop-blur-xl sm:px-6">
      <div className="flex items-center gap-4">
        <Button className="lg:hidden" size="icon" variant="ghost" aria-label="Open navigation">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 md:flex">
          <Search className="h-4 w-4 text-slate-500" />
          <Input className="border-0 bg-transparent shadow-none focus:ring-0" placeholder="Ask NexusOS, search KPIs, agents, campaigns..." />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-100 sm:flex">
            <RadioTower className="h-4 w-4" />
            Live agents online
          </div>
          <Button asChild variant="secondary">
            <Link href="/agents/ceo">Open AI CEO</Link>
          </Button>
          <Button size="icon" variant="outline" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
