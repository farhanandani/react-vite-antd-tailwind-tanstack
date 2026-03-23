import { httpRequest } from "@/lib/request";
import type { LoginRequest, LoginResponse } from "./model";

const USE_MOCK_AUTH = import.meta.env.VITE_APP_USE_MOCK_AUTH === "true";

const handleError = (error: unknown) => {
  const err = error as { response?: { data?: unknown }; message?: string };
  console.error("Auth API error:", error);
  throw (
    err.response?.data || err.message || "Terjadi kesalahan yang tidak terduga"
  );
};

/**
 * Mock response untuk development tanpa backend
 * Enable dengan VITE_APP_USE_MOCK_AUTH=true di .env
 */
const mockLogin = async (credentials: LoginRequest): Promise<LoginResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

  // Mock: admin jika email mengandung 'admin', user untuk lainnya
  const isAdmin = credentials.email.toLowerCase().includes("admin");
  const role = isAdmin ? "admin" : "user";

  return {
    token: `mock_token_${Date.now()}`,
    refreshToken: `mock_refresh_${Date.now()}`,
    user: {
      id: "1",
      email: credentials.email,
      name: credentials.email.split("@")[0],
      role,
    },
  };
};

export const AuthAPI = {
  /**
   * Login dengan email dan password
   * Mengembalikan token dan data user
   */
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    if (USE_MOCK_AUTH) {
      return mockLogin(credentials);
    }

    try {
      const response = await httpRequest.post<LoginResponse>(
        "/auth/login",
        credentials,
      );
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },

  /**
   * Logout - hapus data dari server (jika backend support)
   */
  async logout(): Promise<void> {
    if (USE_MOCK_AUTH) return;

    try {
      await httpRequest.post("/auth/logout");
    } catch (error) {
      handleError(error);
    }
  },
};
