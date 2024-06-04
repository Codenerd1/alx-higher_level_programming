#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command line arguments
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

// Send a GET request to Star Wars API
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);
      console.log(movie.title);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
