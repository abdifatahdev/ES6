const person = {
  name: "Abdifatah",
  // If declare a function inside an object, it refer that object as a method
  // So walk is a method of in the person object
  walk: function () {},
  // In ES6 there is simple and cleaner way to define a method inside an object:
  talk() {},
};

// There is two ways to access this person object:
// If you know ahead of time what property or method we gonna access, use dot notation
person.talk(); // Method 1
person.name = "name";

// Use bracket notation when we don't know ahead of time what property or method we gonna access
/* person["name"]; // Method 2
console.log((person["name"] = "Yusuf")); */

// For example:

// Imagine targetMember as an input form where user can write whatever name they want
const targetMember = "name";
console.log((person[targetMember.value] = "Yusuf"));
