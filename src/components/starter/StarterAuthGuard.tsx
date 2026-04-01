"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { insforge } from "@/lib/insforge";
import { clearAuthHint, hasAuthHint } from "@/lib/auth-storage";
import type { SessionUser } from "@/types/session-user";
import { StarterSidebar } from "./StarterSidebar";

type State =
  | { status: "loading" }
  | { status: "unauth" }
  | { status: "ready"; user: SessionUser };

export function StarterAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const { data, error } = await insforge.auth.getCurrentUser();
      if (cancelled) return;

      if (error || !data.user) {
        clearAuthHint();
        setState({ status: "unauth" });
        router.replace("/auth/login");
        return;
      }

      const u = data.user;
      setState({
        status: "ready",
        user: {
          id: u.id,
          email: u.email ?? "",
          full_name: u.profile?.name ?? null,
          avatar_url: u.profile?.avatar_url ?? null,
        },
      });
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (state.status === "loading") {
    return (
      <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center gap-4">
        <div className="w-5 h-5 border-2 border-[#222] border-t-[#c6ff4e] rounded-full animate-spin" />
        {hasAuthHint() && (
          <p className="text-xs font-mono text-[#333]">Restoring session…</p>
        )}
      </div>
    );
  }

  if (state.status === "unauth") {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#0e0e0e]">
      <StarterSidebar user={state.user} />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
