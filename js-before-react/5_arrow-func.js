// Earlier before ES6 we used to call func like this:
const square = function (number) {
  return number * number;
};

console.log(square(2));

// Convert the above func into an arrow func (ES6 way)
const square = (number) => number * number;

console.log(square(2));

// Where arrow func are really useful:
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// To get only the active jobs:
const activeJobs = jobs.filter(function (job) {
  return job.isActive;
});

// Convert into an arrow func:
// Filter jobs where job is active:
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs); // Output: [ { id: 1, isActive: true }, { id: 2, isActive: true } ]
