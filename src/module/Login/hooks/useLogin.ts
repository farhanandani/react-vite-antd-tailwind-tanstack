import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "@/service/auth";
import { LoginRequestSchema, type LoginRequest } from "@/service/auth/model";
import { useAuth } from "@/context/useAuth";

interface UseLoginReturn {
  isLoading: boolean;
  error: string | null;
  login: (values: LoginRequest) => Promise<void>;
}

/**
 * Hook untuk handle logic login
 * - Validasi dengan Zod
 * - Call API
 * - Update auth context
 * - Redirect setelah sukses
 */
export function useLogin(): UseLoginReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login: setAuth } = useAuth();
  const navigate = useNavigate();

  const login = async (values: LoginRequest) => {
    setError(null);
    setIsLoading(true);

    try {
      // Validasi dengan Zod
      const validated = LoginRequestSchema.parse(values);

      const response = await AuthAPI.login(validated);

      setAuth(
        {
          id: response.user.id,
          email: response.user.email,
          name: response.user.name,
          role: response.user.role ?? "user",
        },
        response.token,
      );

      navigate("/dashboard", { replace: true });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "message" in err
            ? String((err as { message: unknown }).message)
            : "Login gagal. Silakan coba lagi.";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
}
