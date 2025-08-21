import axios from "axios";

export const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_APP_API_URL,
  withCredentials: true, // Required to send cookies
  headers: { Accept: "application/json" },
});
