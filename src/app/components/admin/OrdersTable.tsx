"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

type Order = {
  id: string;
  customer: { name: string; email: string };
  items: { medicine: { name: string }; quantity: number }[];
  status: string;
};

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const data = await apiRequest<{ data: Order[] }>("/admin/orders");
      setOrders(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <table className="w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="p-2">Order ID</th>
          <th className="p-2">Customer</th>
          <th className="p-2">Items</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr key={o.id} className="text-center border-b">
            <td className="p-2">{o.id}</td>
            <td className="p-2">{o.customer.name}</td>
            <td className="p-2">
              {o.items.map((i) => i.medicine.name).join(", ")}
            </td>
            <td className="p-2">{o.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
