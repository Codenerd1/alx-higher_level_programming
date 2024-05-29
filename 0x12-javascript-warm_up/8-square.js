#!/usr/bin/node

// Parse the first argument passed to the script as an integer
const size = parseInt(process.argv[2], 10);

// Check if the parsed value is a number
if (isNaN(size)) {
  console.log('Missing size');
} else {
  // print the square
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}
