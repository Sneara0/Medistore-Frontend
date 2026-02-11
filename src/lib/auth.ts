import { apiRequest } from "./api";

export type Role = "CUSTOMER" | "SELLER" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

// Register API
export const registerUser = async (payload: { name: string; email: string; password: string; role: Role; }) =>
  apiRequest<{ success: boolean; message: string; data: User }>("/api/auth/register", {
    method: "POST",
    data: payload,
  });

// Login API
export const loginUser = async (payload: { email: string; password: string; }) =>
  apiRequest<{ success: boolean; message: string; token: string; data: User }>("/api/auth/login", {
    method: "POST",
    data: payload,
  });

// Profile Fetch & Update
export const getProfile = async (token: string) =>
  apiRequest<{ success: boolean; data: User }>("/api/auth/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateProfile = async (token: string, data: any) =>
  apiRequest<{ success: boolean; message: string }>("/api/auth/me", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    data,
  });

// Current User API (Fixed for Build)
export const getCurrentUser = async () => {
  if (typeof window === "undefined") return null; // সার্ভারে রান হবে না

  const token = localStorage.getItem("token");
  if (!token) return null;

  return apiRequest<{ success: boolean; data: User }>("/api/auth/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
};