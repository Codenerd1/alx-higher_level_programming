#!/usr/bin/node

// Define the factorial function
function factorial (n) {
  // Base case: if n is NaN, return 1
  if (isNaN(n)) {
    return 1;
  }
  // Base case: if n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: compute factorial(n-1) and multiply by n
  return n * factorial(n - 1);
}

// Parse the first argument passed to the script as an integer
const num = parseInt(process.argv[2], 10);

// Print the factorial of the integer
console.log(factorial(num));
