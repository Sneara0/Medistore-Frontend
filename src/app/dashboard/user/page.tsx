"use client";
import React, { useState } from 'react';
import { FaShoppingBag, FaUserCircle, FaHistory, FaSearch } from 'react-icons/fa';

export default function CustomerDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    { title: "Total Orders", val: "05", icon: <FaShoppingBag />, color: "text-emerald-500" },
    { title: "Points Earned", val: "1250", icon: <FaHistory />, color: "text-blue-500" },
    { title: "Profile Status", val: "Verified", icon: <FaUserCircle />, color: "text-purple-500" },
  ];

  const orders = [
    { id: "#ORD-9921", status: "DELIVERED", total: "$85.00", date: "2026-05-01" },
    { id: "#ORD-9922", status: "PENDING", total: "$120.00", date: "2026-05-04" },
    { id: "#ORD-9923", status: "CANCELLED", total: "$45.00", date: "2026-04-28" },
  ];

  // Simple Filtering Logic
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 space-y-10">
      <div className="mb-6">
        <h2 className="text-emerald-500 font-black uppercase text-[10px] tracking-widest mb-2">Account Overview</h2>
        <h1 className="text-3xl font-black text-white italic">Customer <span className="text-gray-700">Dashboard.</span></h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-md hover:border-emerald-500/30 transition-all">
            <div className={`text-xl mb-4 ${stat.color}`}>{stat.icon}</div>
            <p className="text-[10px] font-black uppercase text-gray-500">{stat.title}</p>
            <h3 className="text-xl font-bold text-white mt-1">{stat.val}</h3>
          </div>
        ))}
      </div>

      {/* Order Table with Search/Filter */}
      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h4 className="text-white text-xs font-black uppercase tracking-widest">Recent Purchase History</h4>
          <div className="relative w-full md:w-64">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
            <input 
              type="text" 
              placeholder="Search by Order ID..." 
              className="w-full bg-black/40 border border-white/5 py-3 pl-10 pr-4 rounded-xl text-[10px] text-white outline-none focus:border-emerald-500/50 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[10px] font-black text-gray-600 uppercase border-b border-white/5">
              <tr>
                <th className="py-4 px-2">Order ID</th>
                <th className="py-4 px-2">Date</th>
                <th className="py-4 px-2">Status</th>
                <th className="py-4 px-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-[11px] text-gray-400">
              {filteredOrders.map((order, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all group">
                  <td className="py-4 px-2 text-white font-bold">{order.id}</td>
                  <td className="py-4 px-2 uppercase tracking-tighter">{order.date}</td>
                  <td className="py-4 px-2">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-black ${
                      order.status === "DELIVERED" ? "bg-emerald-500/10 text-emerald-500" : 
                      order.status === "PENDING" ? "bg-yellow-500/10 text-yellow-500" : "bg-red-500/10 text-red-500"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 font-black text-white text-right">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination UI */}
        <div className="mt-8 flex justify-end items-center gap-2">
          <button className="px-4 py-2 bg-white/5 text-[9px] font-black text-gray-500 uppercase rounded-lg hover:bg-white/10 transition-all">Prev</button>
          <button className="px-4 py-2 bg-emerald-500 text-[9px] font-black text-white uppercase rounded-lg shadow-lg shadow-emerald-500/20">Next</button>
        </div>
      </div>
    </div>
  );
}