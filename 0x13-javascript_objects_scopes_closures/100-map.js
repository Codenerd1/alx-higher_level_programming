#!/usr/bin/node
const list = require('./100-data').list;

// Compute the new array
const newList = list.map((value, index) => value * index);

// Print both the initial and new list
console.log(list);
console.log(newList);
