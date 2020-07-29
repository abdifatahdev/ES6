// In order this class make it visible to other files or modules in the react application for instance
//To do that we have make it public by adding export infront of class object
export class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
