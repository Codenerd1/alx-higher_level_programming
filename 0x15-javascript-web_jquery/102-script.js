/* global $ */
$(document).ready(function () {
  // Add event listener to the button
  $('#btn_translate').click(function () {
    // Get the language code entered by the user
    const languageCode = $('#language_code').val();

    // Fetch the translation using the API
    $.getJSON('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function (data) {
      // Update the text of the <div> with id "hello" with the fetched translation
      $('#hello').text(data.hello);
    });
  });
});
