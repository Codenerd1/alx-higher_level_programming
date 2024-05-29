#!/usr/bin/node

// Define the function that executes another function x times
function callMeMoby (x, theFunction) {
  // Use a loop to execute theFunction x times
  for (let i = 0; i < x; i++) {
    theFunction();
  }
}

// Export the function to be visible from outside
module.exports.callMeMoby = callMeMoby;
