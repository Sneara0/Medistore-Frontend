"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  FaChartPie, 
  FaUsers, 
  FaBox, 
  FaHistory, 
  FaCog, 
  FaHome, 
  FaShoppingBag, 
  FaUser,
  FaUserShield
} from "react-icons/fa";

export default function Sidebar() {
  const { user } = useAuth(); // আপনার AuthContext থেকে ইউজার এবং রোল নেওয়া হচ্ছে
  const pathname = usePathname();

  // রোল অনুযায়ী মেনু আইটেম কনফিগারেশন
  const menuConfig = {
    // Admin: নূন্যতম ৫টি মেনু আইটেম
    ADMIN: [
      { name: "Analytics", path: "/dashboard", icon: <FaChartPie /> },
      { name: "Manage Users", path: "/dashboard/users", icon: <FaUsers /> },
      { name: "Inventory", path: "/dashboard/medicines", icon: <FaBox /> },
      { name: "Order Reports", path: "/dashboard/reports", icon: <FaHistory /> },
      { name: "System Settings", path: "/dashboard/settings", icon: <FaCog /> },
    ],
    // Manager/Seller (যদি প্রয়োজন হয়)
    SELLER: [
      { name: "Dashboard", path: "/dashboard", icon: <FaChartPie /> },
      { name: "My Products", path: "/dashboard/products", icon: <FaBox /> },
      { name: "Sales Log", path: "/dashboard/sales", icon: <FaHistory /> },
      { name: "Settings", path: "/dashboard/settings", icon: <FaCog /> },
    ],
    // User/Customer: নূন্যতম ৩টি মেনু আইটেম
    CUSTOMER: [
      { name: "Overview", path: "/dashboard", icon: <FaHome /> },
      { name: "My Orders", path: "/dashboard/orders", icon: <FaShoppingBag /> },
      { name: "Profile Settings", path: "/dashboard/profile", icon: <FaUser /> },
    ],
  };

  // ইউজারের রোল অনুযায়ী মেনু ফিল্টার করা, ডিফল্ট হিসেবে CUSTOMER মেনু থাকবে
  const currentMenu = menuConfig[user?.role as keyof typeof menuConfig] || menuConfig.CUSTOMER;

  return (
    <aside className="w-72 bg-[#0a0d14] border-r border-white/5 hidden lg:flex flex-col p-8 sticky top-0 h-screen">
      {/* Brand Logo */}
      <div className="mb-12 px-4">
        <Link href="/">
          <h1 className="text-2xl font-black text-white italic tracking-tighter">
            Medi<span className="text-emerald-500">Store.</span>
          </h1>
        </Link>
        {user?.role === "ADMIN" && (
          <div className="mt-2 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500/60 bg-emerald-500/5 py-1 px-3 rounded-full w-fit">
            <FaUserShield /> Admin Access
          </div>
        )}
      </div>
      
      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {currentMenu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 group ${
                isActive 
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" 
                : "text-gray-500 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className={`text-lg transition-transform group-hover:scale-110 ${isActive ? "text-white" : "text-gray-600 group-hover:text-emerald-500"}`}>
                {item.icon}
              </span>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer/Status */}
      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="bg-white/5 rounded-2xl p-4">
          <p className="text-[9px] font-black uppercase text-gray-600 tracking-widest mb-1">Logged in as</p>
          <p className="text-white text-xs font-bold truncate">{user?.email}</p>
        </div>
      </div>
    </aside>
  );
}