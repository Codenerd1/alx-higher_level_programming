#!/usr/bin/node
exports.esrever = function (list) {
  // Initialize an empty array to store the reversed list
  const reversedList = [];

  // Loop through the original list in reverse order
  for (let i = list.length - 1; i >= 0; i--) {
    // Add each element of the original list to the reversed list
    reversedList.push(list[i]);
  }

  // Return the reversed list
  return reversedList;
};
