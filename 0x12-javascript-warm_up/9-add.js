#!/usr/bin/node

// Define the add function
function add (a, b) {
  return a + b;
}

// Parse the first argument passed to the script as an integer
const num1 = parseInt(process.argv[2], 10);

// Parse the second argument passed to the script as an integer
const num2 = parseInt(process.argv[3], 10);

// Check if both arguments are valid numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  // Print the addition of the two integers
  console.log(add(num1, num2));
}
