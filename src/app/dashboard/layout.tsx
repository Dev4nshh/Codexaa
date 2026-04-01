import { StarterAuthGuard } from "@/components/starter/StarterAuthGuard";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <StarterAuthGuard>{children}</StarterAuthGuard>;
}
