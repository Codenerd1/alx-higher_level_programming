#!/usr/bin/node
const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    // Write the body response to the file in UTF-8 encoding
    fs.writeFile(filePath, body, 'utf8', (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(filePath);
      }
    });
  }
});
