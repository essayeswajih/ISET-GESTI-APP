import { DepHead } from "./dep-head";
import { Level } from "./level";

export interface Dep {
    id: number;        // Integer ID field
    name: number;      // The 'name' field, assuming it's an integer (adjust if needed)
    depHead: DepHead;  // DepHead object, assuming it exists as another model
    levels: Level[];   // Array of Level objects, assuming Level exists as a model
  }