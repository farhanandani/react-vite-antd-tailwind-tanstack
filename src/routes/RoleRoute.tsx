import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import type { UserRole } from "@/types/role";

interface RoleRouteProps {
  children: React.ReactNode;
  allowedRoles: UserRole[];
}

/**
 * Route guard berdasarkan role
 * Redirect ke /home jika user tidak memiliki role yang diizinkan
 */
export function RoleRoute({ children, allowedRoles }: RoleRouteProps) {
  const { user } = useAuth();
  const userRole = user?.role ?? "user";

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
}
