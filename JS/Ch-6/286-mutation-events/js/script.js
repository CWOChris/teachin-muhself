var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item')
}