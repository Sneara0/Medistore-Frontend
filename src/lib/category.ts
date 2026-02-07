import { apiRequest } from "./api";

export const getAllCategories = async () => {
  return apiRequest("/categories", { method: "GET" });
};
