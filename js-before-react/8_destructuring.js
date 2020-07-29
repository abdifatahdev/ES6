// Object destructuring:
const address = {
  street: "Library Ln",
  city: "Grand Forks",
  country: "United States",
};

// Extract values of address properties and store
//them in separate variables:
const street = address.street;
const city = address.city;
const country = address.country;

// Destructuring repeated dots solves the problem:
const { street, city, country } = address;
console.log(city);
console.log(address.street);

// If you want to rename street into st:
// Here we defining new const and we setting to street property of the address object
const { street: st } = address;
console.log(st);
