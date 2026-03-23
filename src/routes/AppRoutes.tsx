import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { GuestRoute } from "./GuestRoute";
import { RoleRoute } from "./RoleRoute";
import { DashboardLayout } from "@/layouts/DashboardLayout";

const LandingPage = React.lazy(() => import("@/module/Landing"));
const HomePage = React.lazy(() => import("@/module/Home"));
const ExamplePage = React.lazy(() => import("@/module/Example"));
const LoginPage = React.lazy(() => import("@/module/Login"));
const AdminPage = React.lazy(() => import("@/module/Admin"));

interface AppRoute {
  path?: string;
  index?: boolean;
  element: React.ReactElement;
  title?: string;
  protected?: boolean;
  guestOnly?: boolean;
  children?: AppRoute[];
}

/**
 * Routes yang menggunakan DashboardLayout (sidebar + navbar)
 * Memerlukan authentication - item sidebar diatur berdasarkan role
 */
const dashboardRoutes: AppRoute[] = [
  {
    path: "dashboard",
    element: <HomePage />,
    title: "Dashboard",
  },
  {
    path: "example",
    element: <ExamplePage />,
    title: "Example",
  },
  {
    path: "admin",
    element: (
      <RoleRoute allowedRoles={["admin"]}>
        <AdminPage />
      </RoleRoute>
    ),
    title: "Admin Panel",
  },
];

/**
 * Konfigurasi routes aplikasi
 * - Public: /, /home (landing page untuk semua, termasuk belum login)
 * - Guest: login
 * - Protected + Dashboard Layout: dashboard, example, admin (sidebar berdasarkan role)
 */
export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    title: "Root",
  },
  {
    path: "/home",
    element: <LandingPage />,
    title: "Landing",
  },
  {
    path: "/login",
    element: (
      <GuestRoute>
        <LoginPage />
      </GuestRoute>
    ),
    title: "Login",
    guestOnly: true,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    title: "Dashboard",
    protected: true,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      ...dashboardRoutes,
    ],
  },
];
