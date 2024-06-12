/* global $ */
$(document).ready(function () {
  // Define the URL to fetch the translation
  const apiUrl = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

  // Use jQuery's get method to fetch the translation
  $.get(apiUrl, function (data) {
    // Update the text of the <div> with id "hello" with the fetched translation
    $('#hello').text(data.hello);
  });
});
