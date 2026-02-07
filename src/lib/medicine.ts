import { apiRequest } from "./api";

// Get all medicines
export const getAllMedicines = async () => {
  return apiRequest("/shop", { method: "GET" });
};

// Get medicine by ID
export const getMedicineById = async (id: string) => {
  return apiRequest(`/shop/${id}`, { method: "GET" });
};
