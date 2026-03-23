import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Route guard untuk halaman yang membutuhkan autentikasi
 * Redirect ke /login jika user belum login
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
