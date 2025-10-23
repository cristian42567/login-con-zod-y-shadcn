export type User = {
  username: string;
  password: string;
};

export const mockUsers: User[] = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "admin2",
    password: "admin2",
  },
];

export type Employees = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
};

export const mockEmployees: Employees[] = [
  { id: 1, name: "Cristian Pérez", email: "cristian@example.com", role: "admin" },
  { id: 2, name: "Lucía Gómez", email: "lucia@example.com", role: "admin" },
  { id: 3, name: "Mario Ruiz", email: "mario@example.com", role: "guest" },
  { id: 4, name: "Laura Sánchez", email: "laura@example.com", role: "user" }
];
