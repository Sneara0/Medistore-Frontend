import { apiRequest } from "./api";

export type Medicine = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  category: { id: string; name: string };
  seller: { id: string; name: string };
  reviews: { id: string; rating: number; comment?: string }[];
};

// Get all medicines
export const getAllMedicines = async (filters?: {
  category?: string;
  search?: string;
  minPrice?: string;
  maxPrice?: string;
}): Promise<Medicine[]> => {
  const params = new URLSearchParams(filters as any).toString();
  return apiRequest<Medicine[]>(`/medicines?${params}`, { method: "GET" });
};

// Get medicine by ID
export const getMedicineById = async (id: string): Promise<Medicine> => {
  return apiRequest<Medicine>(`/medicines/${id}`, { method: "GET" });
};
