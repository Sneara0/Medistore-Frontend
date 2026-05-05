"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Role } from "@/lib/auth";
 // ✅ Prisma থেকে Role enum ইম্পোর্ট করা হয়েছে

type ProtectedRouteProps = {
  children: ReactNode;
  roles?: Role[]; // ✅ এটি এখন CUSTOMER, SELLER, ADMIN, এবং SUPER_ADMIN সব সাপোর্ট করবে
};

export default function ProtectedRoute({ children, roles }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // লোডিং শেষ হওয়ার পর চেক রান করবে
    if (!loading) {
      if (!user) {
        // লগইন না করা থাকলে লগইন পেজে পাঠিয়ে দেবে
        router.push("/login");
      } 
      // ইউজার লগইন করা থাকলে তার রোলের পারমিশন চেক করবে
      // এখানে user.role কে (user.role as unknown as Role) করা হয়েছে যাতে টাইপ এরর না আসে
      else if (roles && roles.length > 0 && !roles.includes(user.role as unknown as Role)) { 
        router.push("/"); 
      }
    }
  }, [user, loading, roles, router]);

  // প্রিমিয়াম লোডিং স্টেট (আপনার লাক্সারি ডার্ক থিমের সাথে ম্যাচিং)
  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#05070a] flex items-center justify-center">
        <div className="relative">
          {/* আউটার গ্লো ইফেক্ট */}
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full"></div>
          {/* স্পিনার */}
          <div className="relative w-10 h-10 border-4 border-emerald-500/10 border-t-emerald-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  // সব চেক পাস করলে চিলড্রেন কম্পোনেন্ট রেন্ডার করবে
  return <>{children}</>;
}