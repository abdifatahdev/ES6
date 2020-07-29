// Objects without classes:

const person = {
  name: "Abdifatah",
  walk() {
    console.log("walk");
  },
};

// If you want to create 2nd person that can walk:
//In this case you will have to duplicate walk method, meaning that you repeating yourself
const person2 = {
  name: "Abdifatah",
  walk() {
    console.log("walk");
  },
};
// ###########################################################################
// Objects with class:
// You can solve the above problem by creating class and making blueprint of it:

class Person {
  // Add special method to the class:
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}

// To create a person object:
const person = new Person("Abdifatah");

console.log(person.name);
