// Arrow func don't rebind THIS keyword:
const person = {
  talk() {
    console.log("this", this);
  },
};

person.talk(); // Output will be a reference to the person object: this { talk: [Function: talk] }

// What happens when we log THIS inside of call back func:
const person = {
  talk() {
    // What happens when we wrap THIS to setTimeOut() func (callBack func):
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};

person.talk(); // The output will be window object, not the person object
// because callback func is not part of any object, but it's stand alone func
// call back functions doesn't override strict mode to return undefined
//instead of window object
//so in CALLBACK func in this keyword returns a window object

// #########################################################################################

// To solve this problem (How can we have a reference to the person
//object instead of window object inside of callback func):

const person = {
  talk() {
    //In old days we used to set SELF variable outside of the callback func:
    var self = this;
    // Now we can use self inside of the callback func to get access the person object
    setTimeout(function () {
      console.log("self", self);
    }, 1000);
  },
};

person.talk(); // It return a reference to the person object

// #########################################################################################

// In the new feature which is ES6, in arrow function don't rebind this keyword:
const person = {
  talk() {
    // With arrow func don't rebind this keyword
    // changing call back func into an arrow func will inherit this keyword
    var self = this;
    setTimeout(() => {
      // here this keyword will not be reset,
      //instead it will inherit THIS in the above context in which var self code is defined
      console.log("this", this);
    }, 1000);
  },
};

person.talk();
