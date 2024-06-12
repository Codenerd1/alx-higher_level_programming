/* global $ */
$(document).ready(function () {
  // Add item to the list
  $('#add_item').click(function () {
    // Create new <li> element
    const newItem = $('<li>Item</li>');

    // Append the new <li> element to the <ul> with class "my_list"
    $('ul.my_list').append(newItem);
  });

  // Remove the item from the list
  $('#remove_item').click(function () {
    // Remove the last <li> element from the ul with class my_list
    $('ul.my_list li:last-child').remove();
  });

  // Clear the entire list
  $('#clear_list').click(function () {
    // Remove all <li> elements from the <ul> with class my_list
    $('ul.my_list').empty();
  });
});
