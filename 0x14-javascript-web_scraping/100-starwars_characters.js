#!/usr/bin/node
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Construct the URL with the provided movie ID
const url = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

// Function to fetch and print character names
function printCharacterNames (characterUrls) {
  characterUrls.forEach(characterUrl => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error(error);
      } else if (response.statusCode !== 200) {
        console.error(response.statusCode);
      } else {
        const character = JSON.parse(body);
        console.log(character.name);
      }
    });
  });
}

// Send a GET request to the Star Wars API for the specified movie
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);
      printCharacterNames(movie.characters);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
