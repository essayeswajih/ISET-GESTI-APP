import { Class } from "./class";
import { Course } from "./course";

export interface Level {
    id: number;                  // Integer ID field
    name: string;                // String for the level name (e.g., "First Year", "Second Year")
    classes: Class[];            // Array of Class objects, assuming you have a Class model
    firstSemCourses: Course[];   // Array of Course objects for the first semester
    secSemCourses: Course[];     // Array of Course objects for the second semester
  }