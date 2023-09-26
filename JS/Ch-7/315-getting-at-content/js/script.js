var $listHTML = $('ul').html();
$('ul').append($listHTML);

// With the dollar sign in its two places, this doubles the contents of the list and appends it to
// the last child in original order.

var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');

// This adds a string that contains the names of everything on the list inside what looks like a
// button but is just a paragraph after the last list item.

var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '</i>');

// Console log error 14.2???

var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>');

// Doesn't work correctly