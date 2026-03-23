/**
 * Konstanta untuk storage keys
 * Centralized untuk memudahkan maintenance
 */
export const AUTH_STORAGE_KEYS = {
  TOKEN: "auth_token",
  REFRESH_TOKEN: "auth_refresh_token",
  USER: "auth_user",
} as const;

import type { UserRole } from "@/types/role";

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  role: UserRole;
};
