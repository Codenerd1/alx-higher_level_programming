#!/usr/bin/node
const request = require('request');

// Get the URL to request from the command-line arguments
const url = process.argv[2];

if (!url) {
  console.error('Please provide the URL to request as first argument.');
  process.exit(1);
}

// Send a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response.statusCode);
  }
});
