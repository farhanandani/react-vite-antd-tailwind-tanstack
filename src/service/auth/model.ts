import { z } from "zod";

/**
 * Schema untuk request body login
 * - email: format email yang valid
 * - password: minimal 8 karakter
 */
export const LoginRequestSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(100, "Password maksimal 100 karakter"),
});

export type LoginRequest = z.infer<typeof LoginRequestSchema>;

/**
 * Schema untuk response login dari API
 */
const UserRoleSchema = z.enum(["admin", "user", "guest"]);

export const LoginResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string().optional(),
  user: z.object({
    id: z.string(),
    email: z.email(),
    name: z.string().optional(),
    role: UserRoleSchema.default("user"),
  }),
  expiresAt: z.date().optional(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
