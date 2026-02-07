import { apiRequest } from "./api";

export type Medicine = {
  id: string;
  name: string;
  company: string;
  category?: string;
  price: number;
  stock: number;
  description: string;
  image: string;
};

// Get all medicines
export const getAllMedicines = async (): Promise<Medicine[]> => {
  return apiRequest<Medicine[]>("/shop", { method: "GET" });
};

// Get medicine by ID
export const getMedicineById = async (id: string): Promise<Medicine> => {
  return apiRequest<Medicine>(`/shop/${id}`, { method: "GET" });
};
