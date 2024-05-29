#!/usr/bin/node

// Parse the first argument passed to the script as an integer
const x = parseInt(process.argv[2], 10);

// Check if the parsed value is a number
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  // Print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}
