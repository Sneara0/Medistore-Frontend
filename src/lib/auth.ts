import { apiRequest } from "./api";

export const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
  role: "CUSTOMER" | "SELLER";
}) => apiRequest("/auth/register", { method: "POST", body: JSON.stringify(payload) });

export const loginUser = async (payload: { email: string; password: string }) =>
  apiRequest("/auth/login", { method: "POST", body: JSON.stringify(payload) });

export const getCurrentUser = async (token: string) =>
  apiRequest("/auth/me", { method: "GET", headers: { Authorization: `Bearer ${token}` } });
