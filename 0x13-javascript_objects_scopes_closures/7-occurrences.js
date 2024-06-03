#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  // Initialize a counter variable to store the number of occurrences
  let count = 0;

  // Loop through the list
  for (let i = 0; i < list.length; i++) {
    // if the current element matches the search element, increment the count
    if (list[i] === searchElement) {
      count++;
    }
  }

  // Return the count of occurences
  return count;
};
