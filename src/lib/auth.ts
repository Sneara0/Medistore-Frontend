import { apiRequest } from "./api";

export type Role = "CUSTOMER" | "SELLER" | "ADMIN";
export type User = { id: string; name: string; email: string; role: Role; };

export const registerUser = (payload: any) => 
  apiRequest<{ success: boolean; message: string; data: User }>("/api/auth/register", { method: "POST", data: payload });

export const loginUser = (payload: any) => 
  apiRequest<{ success: boolean; message: string; token: string; data: User }>("/api/auth/login", { method: "POST", data: payload });

export const getProfile = (token: string) => 
  apiRequest<{ success: boolean; data: User }>("/api/auth/me", { method: "GET", headers: { Authorization: `Bearer ${token}` } });

export const updateProfile = (token: string, data: any) => 
  apiRequest<{ success: boolean; message: string }>("/api/auth/me", { method: "PUT", headers: { Authorization: `Bearer ${token}` }, data });

export const getCurrentUser = async () => {
  if (typeof window === "undefined") return null; 
  const token = localStorage.getItem("token");
  if (!token) return null;
  return getProfile(token);
};