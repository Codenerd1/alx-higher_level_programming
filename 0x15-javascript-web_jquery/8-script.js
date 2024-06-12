/* global $ */
$(document).ready(function () {
  // Define the URL to fetch the movie titles
  const apiUrl = 'https://swapi-api.alx-tools.com/api/films/?format=json';

  // Use jQuery's getJSON method to fetch the movie titles
  $.getJSON(apiUrl, function (data) {
    // Iterate over the results and append each movie title to the <ul>
    data.results.forEach(function (film) {
      // Create new <li> element with the movie title
      const listItem = $('<li></li>').text(film.title);

      // Append the <li> element to the <ul> with id "list_movies"
      $('#list_movies').append(listItem);
    });
  });
});
