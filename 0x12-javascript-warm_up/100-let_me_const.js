#!/usr/bin/node

// This script assumes myVar is declared in another file

// Modify myVar
if (typeof myVar !== 'undefined') {
  myVar = 333;
} else {
  console.error('myVar is not defined');
}
