import Link from "next/link";

export function PreviewBanner() {
  return (
    <div className="border-b border-[#2a2a1a] bg-[#1a1a0e] px-4 py-2.5 text-center">
      <p className="text-xs text-[#b8c470] font-mono">
        <span className="text-[#c6ff4e] font-semibold uppercase tracking-wider">Preview</span>
        {" — "}
        Static mock data.{" "}
        <Link href="/auth/login" className="text-[#f2f2f2] underline hover:text-[#c6ff4e]">
          Sign in
        </Link>{" "}
        for live InsForge data in the full app.
      </p>
    </div>
  );
}
