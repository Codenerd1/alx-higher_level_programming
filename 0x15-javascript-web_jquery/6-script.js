/* global $ */
$(document).ready(function () {
  // Use jQuery to select the <div> with id "update_header"
  $('#update_header').click(function () {
  // Update the text of the <header> element
    $('header').text('New Header!!!');
  });
});
