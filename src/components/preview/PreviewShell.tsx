import Link from "next/link";
import { Zap } from "lucide-react";
import { PreviewBanner } from "./PreviewBanner";

export function PreviewShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex flex-col">
      <PreviewBanner />
      <header className="border-b border-[#1c1c1c] px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 text-[#f2f2f2]">
          <Zap className="w-5 h-5 text-[#c6ff4e]" />
          <span className="text-sm font-semibold tracking-widest uppercase">InsForge Starter</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <Link href="/candidate/dashboard" className="text-[#888] hover:text-[#c6ff4e] transition-colors">
            Candidate
          </Link>
          <Link href="/recruiter/dashboard" className="text-[#888] hover:text-[#c6ff4e] transition-colors">
            Recruiter
          </Link>
          <Link href="/dashboard" className="text-[#888] hover:text-[#c6ff4e] transition-colors">
            App shell
          </Link>
          <Link
            href="/auth/login"
            className="text-[#0e0e0e] bg-[#c6ff4e] px-3 py-1.5 rounded font-semibold hover:bg-[#d4ff6e]"
          >
            Sign in
          </Link>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
