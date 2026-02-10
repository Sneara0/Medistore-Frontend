import { apiRequest } from "./api";

export type Role = "CUSTOMER" | "SELLER" | "ADMIN";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

/* =======================
   Register API
======================= */
export const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
  role: Role;
}) =>
  apiRequest<{ success: boolean; message: string; data: User }>(
    "/api/auth/register", // ✅ FIXED
    {
      method: "POST",
      data: payload, // ✅ axios এ body না, data হবে
    }
  );

/* =======================
   Login API
======================= */
export const loginUser = async (payload: {
  email: string;
  password: string;
}) =>
  apiRequest<{ success: boolean; message: string; token: string; data: User }>(
    "/api/auth/login", // ✅ FIXED
    {
      method: "POST",
      data: payload,
    }
  );

/* =======================
   Current User API
======================= */
export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("User not authenticated");

  return apiRequest<{ success: boolean; data: User }>("/api/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

