/** Optional localStorage hint after OAuth — not a security boundary. */

export const AUTH_STORAGE_OK = "insforge_auth_ok";

export function persistAuthHint(userId: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(AUTH_STORAGE_OK, "1");
    localStorage.setItem("insforge_user_id", userId);
  } catch {
    /* ignore */
  }
}

export function clearAuthHint() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(AUTH_STORAGE_OK);
    localStorage.removeItem("insforge_user_id");
  } catch {
    /* ignore */
  }
}

export function hasAuthHint(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(AUTH_STORAGE_OK) === "1";
  } catch {
    return false;
  }
}
