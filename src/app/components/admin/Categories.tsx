"use client";

import { useEffect, useState } from "react";
import { apiRequest } from "@/lib/api";

type Category = { id: string; name: string };

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const data = await apiRequest<{ data: Category[] }>("/admin/categories");
      setCategories(data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const addCategory = async () => {
    if (!name) return;
    try {
      await apiRequest("/admin/categories", { method: "POST", body: JSON.stringify({ name }) });
      setName("");
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = async (id: string) => {
    try {
      await apiRequest(`/admin/categories/${id}`, { method: "DELETE" });
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New category"
          className="border p-2 rounded w-full"
        />
        <button onClick={addCategory} className="bg-green-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul className="bg-white shadow rounded p-2">
        {categories.map((c) => (
          <li key={c.id} className="flex justify-between border-b p-2">
            {c.name}
            <button onClick={() => deleteCategory(c.id)} className="bg-red-600 text-white px-2 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
