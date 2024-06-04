#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

// Send a GET request to Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(2);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const parsedBody = JSON.parse(body);
      const films = parsedBody.results;

      if (!films) {
        console.error('No films found in the API response.');
        process.exit(4);
      }

      const count = 0;
      const wedgeAntillesUrl = 'https://swapi-api.alx-tools.com/api/people/18/';

      // Loop through each film and check if "Wedge Antilles" is present
      films.forEach(film => {
        if (film.characters.includes(wedgeAntillesUrl)) {
          count++;
        }
      });
      console.log(count);
    } catch (parseError) {
      console.error(parseError);
      process.exit(5);
    }
  }
});
