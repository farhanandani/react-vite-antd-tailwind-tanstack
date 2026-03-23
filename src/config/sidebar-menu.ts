import type { UserRole } from "@/types/role";

/**
 * Konfigurasi item menu sidebar
 * - allowedRoles: role yang dapat melihat item ini
 * - Kosong = semua role dapat melihat
 * - iconKey: key untuk resolve icon di component
 */
export interface SidebarMenuItem {
  key: string;
  path: string;
  label: string;
  iconKey?: "home" | "example" | "admin";
  allowedRoles?: UserRole[];
}

/**
 * Daftar menu sidebar
 * Single source of truth untuk navigasi dashboard
 */
export const SIDEBAR_MENU_ITEMS: SidebarMenuItem[] = [
  {
    key: "dashboard",
    path: "/dashboard",
    label: "Beranda",
    iconKey: "home",
    allowedRoles: ["admin", "user", "guest"],
  },
  {
    key: "example",
    path: "/example",
    label: "Example",
    iconKey: "example",
    allowedRoles: ["admin", "user"],
  },
  {
    key: "admin-panel",
    path: "/admin",
    label: "Admin Panel",
    iconKey: "admin",
    allowedRoles: ["admin"],
  },
];

/**
 * Filter menu berdasarkan role user
 */
export function getSidebarMenuByRole(role: UserRole): SidebarMenuItem[] {
  return SIDEBAR_MENU_ITEMS.filter((item) => {
    if (!item.allowedRoles || item.allowedRoles.length === 0) return true;
    return item.allowedRoles.includes(role);
  });
}
