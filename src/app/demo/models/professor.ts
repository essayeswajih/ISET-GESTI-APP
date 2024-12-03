import { Course } from "./course";
import { Dep } from "./dep";
import { User } from "./user";

export interface Professor {
    id: number; // Integer ID field
    user: User; // One-to-one relationship with User
    courses: Course[]; // One-to-many relationship with Course
    depList: Dep[]; // One-to-many relationship with Dep
  }