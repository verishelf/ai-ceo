import Link from "next/link";
import { Suspense } from "react";

import { AuthForm } from "@/components/auth/auth-form";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 nexus-grid">
      <div className="w-full max-w-md">
        <Suspense fallback={<div className="glass-panel rounded-3xl p-8 text-sm text-slate-300">Preparing account creation...</div>}>
          <AuthForm mode="signup" />
        </Suspense>
        <p className="mt-6 text-center text-sm text-slate-400">
          Already have access?{" "}
          <Link className="text-cyan-200 hover:text-cyan-100" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
