import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";

interface GuestRouteProps {
  children: React.ReactNode;
}

/**
 * Route guard untuk halaman guest (login/register)
 * Redirect ke /dashboard jika user sudah login
 */
export function GuestRoute({ children }: GuestRouteProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
