/* global $ */
$(document).ready(function () {
  // Define the URL to fetch the character name
  const apiUrl = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

  // Use jQuery's getJSON method to fetch the character name
  $.getJSON(apiUrl, function (data) {
    // Extract the character name from the fetched data
    const characterName = data.name;

    // Update the text of the <div> with id "character"
    $('#character').text(characterName);
  });
});
