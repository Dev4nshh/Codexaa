import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f2f2f2] flex flex-col">
      <nav className="flex flex-wrap items-center justify-between gap-4 px-8 py-6 border-b border-[#1c1c1c]">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#c6ff4e]" />
          <span className="text-sm font-semibold tracking-widest uppercase">InsForge Starter</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <Link href="/candidate/dashboard" className="text-[#888] hover:text-[#c6ff4e] transition-colors">
            Candidate UI
          </Link>
          <Link href="/recruiter/dashboard" className="text-[#888] hover:text-[#c6ff4e] transition-colors">
            Recruiter UI
          </Link>
          <Link
            href="/auth/login"
            className="text-sm bg-[#c6ff4e] text-[#0e0e0e] font-semibold px-4 py-2 rounded hover:bg-[#d4ff6e] transition-colors"
          >
            Sign in
          </Link>
        </div>
      </nav>

      <section className="flex-1 flex flex-col justify-center px-8 py-20 max-w-3xl mx-auto w-full">
        <p className="text-xs font-mono text-[#555] uppercase tracking-widest mb-6">
          Next.js 16 · InsForge SDK
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Auth + UI shell,
          <br />
          <span className="text-[#c6ff4e]">ready for your schema.</span>
        </h1>
        <p className="text-lg text-[#555] mb-10 leading-relaxed">
          Google OAuth, protected dashboard layout, and sidebar — no Postgres required to run.
          Add tables in InsForge and use <code className="text-[#888] font-mono text-sm">insforge.database</code>{" "}
          from any client component.
        </p>
        <p className="text-sm text-[#444] mb-6">
          Browse <strong className="text-[#888] font-normal">candidate</strong> and{" "}
          <strong className="text-[#888] font-normal">recruiter</strong> dashboards with mock data — no sign-in
          required.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/candidate/dashboard"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#f2f2f2] font-medium px-6 py-3 rounded hover:border-[#c6ff4e]/50 text-sm transition-colors"
          >
            Preview candidate <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/recruiter/dashboard"
            className="inline-flex items-center gap-2 border border-[#2a2a2a] text-[#f2f2f2] font-medium px-6 py-3 rounded hover:border-[#c6ff4e]/50 text-sm transition-colors"
          >
            Preview recruiter <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/auth/login"
            className="inline-flex items-center gap-2 bg-[#c6ff4e] text-[#0e0e0e] font-bold px-6 py-3 rounded hover:bg-[#d4ff6e] text-sm"
          >
            Sign in — app shell <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://insforge.dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-[#222] text-[#555] hover:text-[#f2f2f2] font-medium px-6 py-3 rounded text-sm transition-colors"
          >
            InsForge docs
          </a>
        </div>
      </section>
    </div>
  );
}
