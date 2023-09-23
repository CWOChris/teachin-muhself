var list = document.getElementsByTagName('ul')[0];

var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);

// So you declare what you want to create first by targeting the unordered list
// then you declare that you want to make an li
// then you declare what you want to write in the new li
// then using what you've declared you tell it to write the text
// then using the list you declared, you have it appendChild with the newItemLast declaration