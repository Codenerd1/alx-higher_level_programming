/* global $ */
$(document).ready(function () {
  // Add event listener to the button and input field
  $('#btn_translate').click(fetchTranslation);
  $('#language_code').keypress(function (e) {
    if (e.which === 13) {
      fetchTranslation();
    }
  });

  // Function to fetch translation
  function fetchTranslation () {
    // Get the language code entered by the user
    const languageCode = $('#language_code').val();

    // Fetch the translation using the API
    $.getJSON('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function (data) {
      // Update the text of the <div> with id "hello" with the fetched translation
      $('#hello').text(data.hello);
    });
  }
});
