#!/usr/bin/node

// Parse the arguments as integers and filter out non-numeric values
const numbers = process.argv.slice(2).map(Number).filter(Number.isInteger);

// Sort the array of numbers in descending order
numbers.sort((a, b) => b - a);

// If there are less than 2 numbers or no arguments, print 0
if (numbers.length < 2) {
  console.log(0);
} else {
  // Print the second largest number
  console.log(numbers[1]);
}
