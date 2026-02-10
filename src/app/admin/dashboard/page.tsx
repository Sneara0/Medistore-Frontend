"use client";

import Categories from "@/app/components/admin/Categories";
import OrdersTable from "@/app/components/admin/OrdersTable";
import UsersTable from "@/app/components/admin/UsersTable";
import { useState } from "react";


export default function AdminDashboard() {
  const [tab, setTab] = useState<"users" | "orders" | "categories">("users");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "users" ? "bg-green-600 text-white" : "bg-white"}`}
          onClick={() => setTab("users")}
        >
          Users
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "orders" ? "bg-green-600 text-white" : "bg-white"}`}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "categories" ? "bg-green-600 text-white" : "bg-white"}`}
          onClick={() => setTab("categories")}
        >
          Categories
        </button>
      </div>

      <div>
        {tab === "users" && <UsersTable />}
        {tab === "orders" && <OrdersTable />}
        {tab === "categories" && <Categories />}
      </div>
    </div>
  );
}
