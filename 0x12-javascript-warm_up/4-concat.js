#!/usr/bin/node

const args = process.argv.slice(2); // Get arguments passed to the script, excluding 'node' and script name

console.log(`${args[0]} is ${args[1]}`);
