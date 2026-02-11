import { apiRequest } from "./api";


export type Medicine = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  company: string; 
  category: { id: string; name: string };
  seller: { id: string; name: string };
  reviews: { id: string; rating: number; comment?: string }[];
};

export const getAllMedicines = async (filters?: any): Promise<Medicine[]> => {
  const params = new URLSearchParams(filters).toString();
  // এখানে /api যোগ করা হয়েছে
  return apiRequest<Medicine[]>(`/api/medicines?${params}`, { method: "GET" });
};

export const getMedicineById = async (id: string): Promise<Medicine> => {
  // এখানেও /api যোগ করা হয়েছে
  return apiRequest<Medicine>(`/api/medicines/${id}`, { method: "GET" });
};