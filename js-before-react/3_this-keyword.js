// This in many languages like C# and Java always return a reference to the current object
const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};

// We gonna call the walk func as a method in the person object:
person.walk(); // This will always return a reference to the person object
// Output: { name: 'Mosh', walk: [Function: walk] }, this keyword now is reference to person object
//However in JS doesn't always work that way for example:
const walk = person.walk;
console.log(walk); // [Function: walk] walk is now a function

// Here we call walk func as a stand alone function or outside of an object:
walk(); // This keyword now returns the global object which is window in browsers
