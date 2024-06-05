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

// Send a GET request to the Star Wars API for the specified movie
request(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);
      const characters = movie.characters;

      // Fetch and print character names in the order they appear in the movie
      characters.forEach(characterUrl => {
        request(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error(characterError);
          } else if (characterResponse.statusCode !== 200) {
            console.error(characterResponse.statusCode);
          } else {
            const character = JSON.parse(characterBody);
            console.log(character.name);
          }
        });
      });
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
