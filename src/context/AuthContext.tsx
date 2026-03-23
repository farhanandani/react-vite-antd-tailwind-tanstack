import { useCallback, useState } from "react";
import type { AuthUser } from "@/lib/auth";
import { AUTH_STORAGE_KEYS } from "@/lib/auth";
import { AuthContext, getStoredAuth, type AuthState } from "./auth-context";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    const stored = getStoredAuth();
    return {
      user: stored.user ?? null,
      token: stored.token ?? null,
      isAuthenticated: Boolean(stored.token && stored.user),
      isLoading: false,
    };
  });

  const login = useCallback((user: AuthUser, token: string) => {
    localStorage.setItem(AUTH_STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(AUTH_STORAGE_KEYS.USER, JSON.stringify(user));

    setState({
      user,
      token,
      isAuthenticated: true,
      isLoading: false,
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(AUTH_STORAGE_KEYS.USER);

    setState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const value = {
    ...state,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
