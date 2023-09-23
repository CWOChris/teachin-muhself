var elements = document.getElementsByClassName("hot");

if (elements.length > 2) {
    var el = elements[2];
    el.className = 'cool';
}

var elements = document.getElementsByTagName('li');

if (elements > 0) {
    var el = elements[0];
    el.className = 'cool';
}

// second part of script doesn't function as intended --\o + o/--