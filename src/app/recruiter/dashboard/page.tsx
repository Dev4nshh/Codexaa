import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { PreviewShell } from "@/components/preview/PreviewShell";

const MOCK_SESSIONS = [
  { id: "1", title: "Frontend Engineering", is_active: true },
  { id: "2", title: "Backend Systems", is_active: true },
];

const MOCK_FEED = [
  {
    id: "f1",
    candidate: "Jamie Chen",
    session: "Frontend Engineering",
    prompt: "Implement debounce…",
    score: 8,
    difficulty: "medium" as const,
    ago: "2h ago",
  },
  {
    id: "f2",
    candidate: "Sam Okonkwo",
    session: "DSA",
    prompt: "Two sum variant…",
    score: 7,
    difficulty: "easy" as const,
    ago: "1d ago",
  },
];

function StatusPill({ active }: { active: boolean }) {
  return (
    <span
      className={
        active
          ? "text-[10px] uppercase border border-[#1a4025] text-[#4ade80] bg-[#0f2a15] px-2 py-0.5 rounded"
          : "text-[10px] uppercase border border-[#2a2a2a] text-[#555] px-2 py-0.5 rounded"
      }
    >
      {active ? "active" : "closed"}
    </span>
  );
}

export default function RecruiterDashboardPreview() {
  const avgScore = (MOCK_FEED.reduce((s, x) => s + x.score, 0) / MOCK_FEED.length).toFixed(1);

  return (
    <PreviewShell>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-10 pb-8 border-b border-[#1c1c1c]">
          <div>
            <p className="text-xs font-mono text-[#333] uppercase tracking-widest mb-2">Recruiter</p>
            <h1 className="text-4xl font-extrabold text-[#f2f2f2]">Hey, Morgan.</h1>
          </div>
          <span className="flex items-center gap-2 bg-[#c6ff4e]/20 text-[#c6ff4e] font-bold text-xs px-4 py-2.5 rounded border border-[#c6ff4e]/30 cursor-default">
            <Plus className="w-3.5 h-3.5" /> New session
          </span>
        </div>

        <div className="grid grid-cols-3 border border-[#1c1c1c] rounded mb-10">
          {[
            { label: "Sessions", value: String(MOCK_SESSIONS.length) },
            { label: "Submissions", value: String(MOCK_FEED.length) },
            { label: "Avg score", value: `${avgScore} / 10` },
          ].map((s, i) => (
            <div key={s.label} className={`px-6 py-5 ${i < 2 ? "border-r border-[#1c1c1c]" : ""}`}>
              <p className="text-2xl font-bold text-[#f2f2f2] font-mono mb-1">{s.value}</p>
              <p className="text-xs text-[#444] uppercase tracking-wider font-mono">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-[#f2f2f2] uppercase tracking-wider">My Sessions</h2>
              <span className="text-xs text-[#333] flex items-center gap-1">
                Manage <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="space-y-2">
              {MOCK_SESSIONS.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-4 border border-[#1c1c1c] rounded bg-[#141414]/30"
                >
                  <div>
                    <p className="text-sm font-medium text-[#f2f2f2] mb-1">{s.title}</p>
                    <StatusPill active={s.is_active} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#2a2a2a]" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <h2 className="text-sm font-semibold text-[#f2f2f2] uppercase tracking-wider">Live Activity</h2>
              <span className="flex items-center gap-1 text-xs text-[#4ade80] font-mono border border-[#1a4025] bg-[#0f2a15] px-2 py-0.5 rounded-sm">
                <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse" />
                demo
              </span>
            </div>
            <div className="space-y-2">
              {MOCK_FEED.map((row) => (
                <div key={row.id} className="p-4 border border-[#1c1c1c] rounded">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-[#f2f2f2]">{row.candidate}</span>
                    <span
                      className={`text-sm font-bold font-mono ${row.score >= 7 ? "text-[#4ade80]" : "text-[#fbbf24]"}`}
                    >
                      {row.score}/10
                    </span>
                  </div>
                  <p className="text-[11px] text-[#444] font-mono truncate mb-1">{row.prompt}</p>
                  <div className="flex items-center justify-between text-[10px] text-[#333] font-mono">
                    <span>{row.session}</span>
                    <span>{row.ago}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#333] font-mono text-center">
          Preview only — connect InsForge + sign in for real sessions and attempts.{" "}
          <Link href="/auth/login" className="text-[#555] hover:text-[#c6ff4e]">
            Sign in
          </Link>
        </p>
      </div>
    </PreviewShell>
  );
}
