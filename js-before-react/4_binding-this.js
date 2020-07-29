// If strict mode is enabled the walk func in person object
// it returns undefined (suppose it return global object
//which is window object)

//binding this keyword fixes no matter how we call walk func in the object
// it will always return global object which is window object
const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
};

person.walk();

// Everything in JS is an object: We can use bind method to bind func to an object:
// with the bind method, we can set the value of this keyword permanently,
// so when we call bind and walk func, we get a new walk func where the value of this is based on the argument we pass to the bind method
const walk = person.walk.bind(person);
walk();
