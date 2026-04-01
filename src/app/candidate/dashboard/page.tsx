import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PreviewShell } from "@/components/preview/PreviewShell";
import { DifficultyPill } from "@/components/preview/DifficultyPill";

const MOCK_SESSIONS = [
  { id: "1", title: "Frontend Engineering" },
  { id: "2", title: "Data Structures & Algorithms" },
];

const MOCK_ATTEMPTS = [
  {
    id: "a1",
    score: 8,
    submitted_at: new Date(Date.now() - 3600_000).toISOString(),
    prompt: "Implement a debounce function in JavaScript…",
    difficulty: "medium" as const,
  },
  {
    id: "a2",
    score: 6,
    submitted_at: new Date(Date.now() - 86400_000).toISOString(),
    prompt: "Given an array of integers and a target sum…",
    difficulty: "easy" as const,
  },
];

function formatAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3600_000);
  if (h < 24) return `${h || 1} hours ago`;
  return `${Math.floor(h / 24)} days ago`;
}

export default function CandidateDashboardPreview() {
  const avgScore = (
    MOCK_ATTEMPTS.reduce((s, a) => s + a.score, 0) / MOCK_ATTEMPTS.length
  ).toFixed(1);

  return (
    <PreviewShell>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-10 pb-8 border-b border-[#1c1c1c]">
          <p className="text-xs font-mono text-[#333] uppercase tracking-widest mb-2">Candidate</p>
          <h1 className="text-4xl font-extrabold text-[#f2f2f2]">Hey, Alex.</h1>
        </div>

        <div className="grid grid-cols-3 border border-[#1c1c1c] rounded mb-10">
          {[
            { label: "Sessions available", value: String(MOCK_SESSIONS.length) },
            { label: "Submissions", value: String(MOCK_ATTEMPTS.length) },
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
              <h2 className="text-sm font-semibold text-[#f2f2f2] uppercase tracking-wider">
                Available Interviews
              </h2>
              <span className="text-xs text-[#333] flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="space-y-2">
              {MOCK_SESSIONS.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-4 border border-[#1c1c1c] rounded bg-[#141414]/30 cursor-default"
                >
                  <p className="text-sm font-medium text-[#f2f2f2]">{s.title}</p>
                  <ArrowUpRight className="w-4 h-4 text-[#2a2a2a]" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-semibold text-[#f2f2f2] uppercase tracking-wider">
                Recent Submissions
              </h2>
              <span className="text-xs text-[#333] flex items-center gap-1">
                View all <ArrowRight className="w-3 h-3" />
              </span>
            </div>
            <div className="space-y-2">
              {MOCK_ATTEMPTS.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between p-4 border border-[#1c1c1c] rounded"
                >
                  <div className="flex-1 min-w-0 pr-3">
                    <p className="text-sm text-[#888] truncate mb-1">{a.prompt}</p>
                    <div className="flex items-center gap-2">
                      <DifficultyPill difficulty={a.difficulty} />
                      <span className="text-xs text-[#333] font-mono">{formatAgo(a.submitted_at)}</span>
                    </div>
                  </div>
                  <span
                    className={`text-sm font-bold font-mono shrink-0 ${a.score >= 7 ? "text-[#4ade80]" : a.score >= 4 ? "text-[#fbbf24]" : "text-[#f87171]"}`}
                  >
                    {a.score}/10
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-[#333] font-mono text-center">
          This route is public for UI preview only.{" "}
          <Link href="/auth/login" className="text-[#555] hover:text-[#c6ff4e]">
            Sign in
          </Link>{" "}
          to use the real candidate dashboard with InsForge.
        </p>
      </div>
    </PreviewShell>
  );
}
