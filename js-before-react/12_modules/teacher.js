// To import Person class:
import { Person } from "./12_modules/person";

// In order this class make it visible to other files or modules in the react application for instance
//To do that we have make it public by adding export infront of class object
export class Teacher extends Person {
  constructor(name, degree) {
    super(name);

    this.degree = degree;
  }
  teach() {
    console.log("teach");
  }
}
