var listItems = document.querySelectorAll('li');
// declare and target all li's
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}
// this FOR-LOOP will add a class of cool to all list items
var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;

// declare that you want to target the html tag of h2 "buy grocies"
// declare that you want to create a new text node next to the h2 as a first child of it
// declare that you want to create a total count of items in the list using the listItems first declaration
// ...which is done with "=listItems.length;"
// declare that you want there to be a new h2 with the new text node adjacent by inserting into the DOM
// ..."<span> + totalItems + </span>"
// finally make the script change the h2 in the DOM to include the previous declaration






// This one would work better combined