import { createContext } from "react";
import type { AuthUser } from "@/lib/auth";
import { AUTH_STORAGE_KEYS } from "@/lib/auth";

export interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthContextValue extends AuthState {
  login: (user: AuthUser, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function getStoredAuth(): Partial<AuthState> {
  try {
    const token = localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
    const userStr = localStorage.getItem(AUTH_STORAGE_KEYS.USER);

    if (!token || !userStr) return { token: null, user: null };

    const parsed = JSON.parse(userStr) as Partial<AuthUser>;
    const user: AuthUser = {
      id: parsed.id!,
      email: parsed.email!,
      name: parsed.name,
      role: parsed.role ?? "user",
    };
    return { token, user };
  } catch {
    return { token: null, user: null };
  }
}
