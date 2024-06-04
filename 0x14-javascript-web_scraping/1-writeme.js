#!/usr/bin/node
const fs = require('fs');

// Get the file path and string to write from the command-line arguments
const filePath = process.argv[2];
const content = process.argv[3];

if (!filePath || !content) {
  console.error(err);
  process.exit(1);
}

// Write the content of the file in UTF-8 encoding
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }
});
