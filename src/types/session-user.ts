/** Minimal user shape for the starter shell (from InsForge auth only). */

export interface SessionUser {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
}
