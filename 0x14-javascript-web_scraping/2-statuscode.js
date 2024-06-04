#!/usr/bin/node
const request = require('request');

// Get the URL to request from the command-line arguments
const url = process.argv[2];

// Send a GET request to the specified URL
request(url, (error, response) => {
  if (error) {
    console.error('code:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});
