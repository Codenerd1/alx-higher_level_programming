#!/usr/bin/node
const request = require('request');

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error();
  process.exit(1);
}

// Send a GET request to Star Wars API
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const films = JSON.parse(body).results;
      let count = 0;

      // Loop through each film and check if "Wedge Antilles" is present
      films.forEach(film => {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          count++;
        }
      });

      console.log(count);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
