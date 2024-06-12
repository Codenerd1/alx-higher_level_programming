#!/usr/bin/node
// 102-convert_dict.js
const dict = require('./101-data').dict;

// Create a new dictionary to store user ids by occurrences
const newDict = {};

for (const userId in dict) {
  const occurrences = dict[userId];
  if (newDict[occurrences] === undefined) {
    newDict[occurrences] = [];
  }
  newDict[occurrences].push(userId);
}

console.log(newDict);
