import clsx from "clsx";

export function DifficultyPill({ difficulty }: { difficulty: "easy" | "medium" | "hard" }) {
  return (
    <span
      className={clsx(
        "text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border font-mono",
        difficulty === "easy" && "border-[#1a4025] text-[#4ade80] bg-[#0f2a15]",
        difficulty === "medium" && "border-[#3d3418] text-[#fbbf24] bg-[#1a1508]",
        difficulty === "hard" && "border-[#402020] text-[#f87171] bg-[#1a0a0a]",
      )}
    >
      {difficulty}
    </span>
  );
}
