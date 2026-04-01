"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { insforge } from "@/lib/insforge";
import { clearAuthHint } from "@/lib/auth-storage";
import type { SessionUser } from "@/types/session-user";
import { LayoutDashboard, Home, LogOut, Settings } from "lucide-react";
import clsx from "clsx";

const nav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function StarterSidebar({ user }: { user: SessionUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const display = user.full_name ?? user.email.split("@")[0];

  async function signOut() {
    await insforge.auth.signOut();
    clearAuthHint();
    router.push("/auth/login");
  }

  return (
    <aside className="w-56 shrink-0 border-r border-[#1c1c1c] flex flex-col min-h-screen bg-[#0e0e0e]">
      <div className="p-5 border-b border-[#1c1c1c]">
        <Link href="/" className="flex items-center gap-2 text-[#f2f2f2] mb-1">
          <span className="text-xs font-mono text-[#c6ff4e] uppercase tracking-widest">
            Starter
          </span>
        </Link>
        <p className="text-[10px] text-[#555] font-mono uppercase tracking-wider">
          InsForge
        </p>
      </div>

      <nav className="flex-1 p-3 space-y-0.5">
        {nav.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors",
              pathname === href
                ? "bg-[#1c1c1c] text-[#f2f2f2]"
                : "text-[#888] hover:text-[#f2f2f2] hover:bg-[#141414]",
            )}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-[#1c1c1c]">
        <div className="flex items-center gap-2 mb-3 px-3">
          {user.avatar_url ? (
            <img
              src={user.avatar_url}
              alt=""
              className="w-8 h-8 rounded-full object-cover grayscale"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#2a2a2a] flex items-center justify-center text-[#555] text-xs font-bold">
              {display[0]?.toUpperCase()}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-[#f2f2f2] truncate">{display}</p>
            <p className="text-[10px] text-[#444] font-mono truncate">{user.email}</p>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-xs text-[#555] hover:text-[#f2f2f2] rounded transition-colors"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
        <button
          type="button"
          onClick={signOut}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-[#555] hover:text-[#f87171] rounded transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
