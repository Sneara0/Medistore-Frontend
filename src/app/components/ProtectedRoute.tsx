"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: ReactNode;
  roles?: ("CUSTOMER" | "SELLER" | "ADMIN")[]; // optional role-based protection
};

export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/login"); 
      else if (roles && !roles.includes(user.role)) router.push("/"); 
    }
  }, [user, loading, roles, router]);

  if (loading || !user) return <p>Loading...</p>;

  return <>{children}</>;
}
