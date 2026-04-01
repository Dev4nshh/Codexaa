"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { insforge } from "@/lib/insforge";
import { persistAuthHint } from "@/lib/auth-storage";
import { Zap } from "lucide-react";

function CallbackInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"loading" | "error">("loading");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const insforgeError = searchParams.get("insforge_error");
    if (insforgeError) {
      setErrorMsg(decodeURIComponent(insforgeError));
      setStatus("error");
      setTimeout(
        () => router.replace(`/auth/login?error=${encodeURIComponent(insforgeError)}`),
        3000,
      );
      return;
    }

    async function finish() {
      let user = null;
      for (let attempt = 0; attempt < 10; attempt++) {
        const { data } = await insforge.auth.getCurrentUser();
        if (data.user) {
          user = data.user;
          break;
        }
        await new Promise((r) => setTimeout(r, 500));
      }

      if (!user) {
        setErrorMsg("Could not verify session. Please sign in again.");
        setStatus("error");
        setTimeout(() => router.replace("/auth/login"), 3000);
        return;
      }

      persistAuthHint(user.id);
      router.replace("/dashboard");
    }

    finish();
  }, [router, searchParams]);

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#c6ff4e]" />
        <span className="text-xs font-semibold tracking-widest uppercase text-[#f2f2f2]">
          InsForge Starter
        </span>
      </div>

      {status === "error" ? (
        <div className="text-sm text-red-400 font-mono px-6 py-3 border border-red-900 bg-red-950/30 rounded max-w-sm text-center">
          {errorMsg ?? "Sign-in failed."} Redirecting…
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#222] border-t-[#c6ff4e] rounded-full animate-spin" />
          <p className="text-xs font-mono text-[#444] animate-pulse">Completing sign-in…</p>
        </div>
      )}
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-[#222] border-t-[#c6ff4e] rounded-full animate-spin" />
        </div>
      }
    >
      <CallbackInner />
    </Suspense>
  );
}
