// To import Person class:
import { Person } from "./12_modules/person";

// Named export
export function promote() {}

// Classes are object in JS

// Defaulted export
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);

    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
