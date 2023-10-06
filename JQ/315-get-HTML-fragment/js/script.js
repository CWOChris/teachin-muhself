var $listHTML = $('ul').html();
$('ul').append($listHTML);

// Path: JQ/316-get-HTML-fragment/js/script.js
var $listText = $('ul').text();
$('ul').append('<p>' + $listText + '</p>');

// Path: JQ/317-get-HTML-fragment/js/script.js
var $listItemHTML = $('li').html();
$('li').append('<i>' + $listItemHTML + '</i>');

// Path: JQ/318-get-HTML-fragment/js/script.js
var $listItemText = $('li').text();
$('li').append('<i>' + $listItemText + '</i>');