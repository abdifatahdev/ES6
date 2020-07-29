// Using map() method, in REACT we use it to render list of items:

const colors = ["red", "green", "blue"];

//Render the colors as a list items:
// call map() method in colors array and pass it to a call back func
//this callback func is to transform each element in the array into a list returning new array(copy)
// To know that map() method returns new array, it doesn't modify the original one

const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);
