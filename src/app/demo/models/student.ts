import { Course } from "./course";
import { User } from "./user";

export interface Student {
  id: number;            // The unique identifier for the student
  user: User;            // A reference to the User object associated with the student
  courses: Course[];     // A list of courses that the student is enrolled in
}
