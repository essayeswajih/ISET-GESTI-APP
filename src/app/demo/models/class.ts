import { Course } from "./course";
import { Student } from "./student";

export interface Class {
    id: number;                  // The unique identifier for the class
    name: string;                // The name of the class
    etudiants: Student[];        // A list of students associated with this class
    courses: Course[];           // A list of courses associated with this class
  }
