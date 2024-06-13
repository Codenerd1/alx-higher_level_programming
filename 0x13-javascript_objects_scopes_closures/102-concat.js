#!/usr/bin/node

const fs = require('fs');

// Get command line arguments
const [, , sourceFile1, sourceFile2, destinationFile] = process.argv;

// Read content of file1
fs.readFile(sourceFile1, 'utf8', (err, data1) => {
  if (err) {
    console.error(err);
    return;
  }

  // Read content of file2
  fs.readFile(sourceFile2, 'utf8', (err, data2) => {
    if (err) {
      console.error(err);
      return;
    }

    // Concatenate the contents
    const concatenatedContent = data1.trim() + '\n' + data2.trim() + '\n';

    // Write to destination file
    fs.writeFile(destinationFile, concatenatedContent, 'utf8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
});
