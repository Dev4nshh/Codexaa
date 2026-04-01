import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-4xl">
      <p className="text-xs font-mono text-[#555] uppercase tracking-widest mb-2">Overview</p>
      <h1 className="text-3xl font-extrabold text-[#f2f2f2] mb-2">Dashboard</h1>
      <p className="text-sm text-[#555] mb-10 max-w-xl">
        This route is protected by <span className="text-[#888] font-mono">StarterAuthGuard</span>.
        Add your own pages under <span className="text-[#888] font-mono">src/app/dashboard/</span> and
        query InsForge with <span className="text-[#888] font-mono">insforge.database</span> when your
        tables exist.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {[
          { label: "Auth", value: "InsForge", hint: "Google OAuth + session" },
          { label: "SDK", value: "@insforge/sdk", hint: "createClient in lib/" },
          { label: "Next.js", value: "16 App Router", hint: "starter/ is standalone" },
        ].map((c) => (
          <div key={c.label} className="border border-[#1c1c1c] rounded-lg p-5 bg-[#141414]/50">
            <p className="text-[10px] font-mono text-[#444] uppercase tracking-wider mb-2">{c.label}</p>
            <p className="text-lg font-bold text-[#f2f2f2] font-mono mb-1">{c.value}</p>
            <p className="text-xs text-[#555]">{c.hint}</p>
          </div>
        ))}
      </div>

      <div className="border border-[#1c1c1c] rounded-lg p-6 bg-[#0e0e0e]">
        <h2 className="text-sm font-semibold text-[#f2f2f2] mb-3">Next steps</h2>
        <ol className="text-sm text-[#666] space-y-2 list-decimal list-inside">
          <li>Copy <span className="font-mono text-[#888]">.env.example</span> to{" "}
            <span className="font-mono text-[#888]">.env.local</span> and set InsForge URL + anon key.</li>
          <li>Enable Google OAuth in InsForge and add redirect URIs for this app.</li>
          <li>Create tables in InsForge SQL editor; use the main repo&apos;s{" "}
            <span className="font-mono text-[#888]">supabase/schema.sql</span> as a reference.</li>
          <li>Build features in new routes — see parent <span className="font-mono text-[#888]">interview_ninja</span>{" "}
            for a full example.</li>
        </ol>
        <Link
          href="/dashboard/settings"
          className="inline-block mt-6 text-xs text-[#c6ff4e] hover:underline font-mono"
        >
          Settings placeholder →
        </Link>
      </div>
    </div>
  );
}
