/**
 * User role definitions
 * Single source of truth untuk role di seluruh aplikasi
 */
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
