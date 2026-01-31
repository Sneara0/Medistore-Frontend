export type Role = "customer" | "seller" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
