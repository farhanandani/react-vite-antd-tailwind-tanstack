import axios from "axios";
import { AUTH_STORAGE_KEYS } from "@/lib/auth";

export const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_APP_API_URL,
  withCredentials: true, // Required to send cookies
  headers: { Accept: "application/json" },
});

/**
 * Request interceptor: attach Bearer token jika user sudah login
 */
httpRequest.interceptors.request.use((config) => {
  const token = localStorage.getItem(AUTH_STORAGE_KEYS.TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
