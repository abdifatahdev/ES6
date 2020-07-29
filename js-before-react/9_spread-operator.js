const first = [1, 2, 3];
const second = [6, 4, 5];

// An old way to combine the above arrays:
const combined = first.concat(second);

// With the spread operator we can combine like this:
const combined = [...first, ...second];
console.log(combined);

// We can even add an element in the middle like this:
const combined = ["A", ...first, "B", ...second];
console.log(combined);

// Using spread operator we can easily clone an array:
// Let's say we wanna clone the first array:

const clone = [...first];
console.log(first);
console.log(clone);

// ###############################################################################################

// We can also apply spread operator to an object:
const first = { name: "Abdifatah" };
const second = { job: "Software Developer" };

// Combine 1st and 2nd into one object
// We can also add location property
const combined = { ...first, ...second, location: "United States" };
console.log(combined);

// We can also use spread operator to clone an object:
const clone = { ...first };
console.log(first);
console.log(clone);
