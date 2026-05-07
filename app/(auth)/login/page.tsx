import Link from "next/link";

import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 nexus-grid">
      <div className="w-full max-w-md">
        <AuthForm mode="login" />
        <p className="mt-6 text-center text-sm text-slate-400">
          New operator?{" "}
          <Link className="text-cyan-200 hover:text-cyan-100" href="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
