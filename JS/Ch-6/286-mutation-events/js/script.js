var elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById('list');
addLink = document.querySelector('a');
counter = document.getElementById('counter');

function addItem(e) {
    e.preventDefault();
    newEl = document.createElement('li');
    newText = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = elList.getElementsByTagName('li');
    newTex = document.createTextNode('New list item');
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount() {
    listItems = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItems;
}

addLink.addEventListener('click', addItem, false);
elList.addEventListener('DOMNodeInserted', updateCount, false);

// Adds list item(s) one at a time while updating the count