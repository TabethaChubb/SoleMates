import { useState } from "react";
export {};
export type role = "Customer" | "Employee" | "Owner";
export const [role, setRole] = useState<role>();
