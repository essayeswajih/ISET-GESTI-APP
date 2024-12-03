import { User } from "./user";

export interface DepHead {
    id: number;    // The unique identifier for the department head
    user: User;    // The User object associated with the department head
  }