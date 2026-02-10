"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

type User = {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "SELLER" | "ADMIN";
  isBanned: boolean;
};

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const data = await apiRequest<{ data: User[] }>("/admin/users");
      setUsers(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggleBan = async (id: string) => {
    try {
      await apiRequest(`/admin/users/${id}/ban`, { method: "PATCH" });
      fetchUsers(); // refresh list
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <table className="w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Email</th>
          <th className="p-2">Role</th>
          <th className="p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="text-center border-b">
            <td className="p-2">{u.name}</td>
            <td className="p-2">{u.email}</td>
            <td className="p-2">{u.role}</td>
            <td className="p-2">{u.isBanned ? "Banned" : "Active"}</td>
            <td className="p-2">
              <button
                onClick={() => toggleBan(u.id)}
                className={`px-2 py-1 rounded text-white ${
                  u.isBanned ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {u.isBanned ? "Unban" : "Ban"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
