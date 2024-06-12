/* global $ */

$(document).ready(function () {
  $('#toogle_header').click(() => {
    $('header').toggleClass('red green');
  });
});
