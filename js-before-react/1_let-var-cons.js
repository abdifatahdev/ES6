function sayHello() {
  for (var i = 0; i < 5; i++) {
    // i should only be accessible in this function block
    console.log(i);
  }
  // Declaring a variable using var keyword, that variable is
  //accessible inside in which it's defined (the weird things in JS)
  // it's different than other programming languages
  console.log(i);
}

sayHello();

// variables declared using VAR keyword --> are scoped to the whole function block
// variables declared using LET/CONST keyword --> are scoped to the block in which it's defined

// The different between LET and CONST:
const x = 1;
x = 2;
console.log(x);
// When declaring variable using CONST that variable cannot be redefined
// It cannot change it's constant
