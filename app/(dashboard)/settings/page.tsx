import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const envVars = [
  "OPENAI_API_KEY",
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "DATABASE_URL",
  "GITHUB_TOKEN",
  "STRIPE_SECRET_KEY",
  "TIKTOK_API_KEY",
  "META_API_KEY",
  "YOUTUBE_API_KEY",
  "X_API_KEY",
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[var(--font-display)] text-4xl font-bold text-gradient">System settings</h1>
        <p className="mt-3 text-slate-400">Connect production credentials and configure autonomous workflows.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Environment readiness</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {envVars.map((key) => (
            <div key={key} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <span className="text-sm text-slate-300">{key}</span>
              <span className="text-xs text-slate-500">configure in Vercel</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
