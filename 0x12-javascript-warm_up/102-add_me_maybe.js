#!/usr/bin/node

// Define the function that increments a number and calls another function
function addMeMaybe (number, theFunction) {
  // Increment the number
  const incrementedNumber = number + 1;
  // Call theFunction with the incremented number
  theFunction(incrementedNumber);
}

// Export the function to be visible from outside
module.exports.addMeMaybe = addMeMaybe;
