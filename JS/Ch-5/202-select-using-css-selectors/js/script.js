var el = document.querySelector('li.hot');  //this returns the first element by the specified in parantheseis
el.className = 'cool';

var els = document.querySelectorAll('li.hot');  //this returns all of the specified CSS Selector
els[1].className = 'cool'