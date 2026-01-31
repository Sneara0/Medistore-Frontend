import { Medicine } from "./medicine";

export interface Order {
  id: string;
  medicines: Medicine[];
  total: number;
  status: "PLACED" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  createdAt: string;
}
