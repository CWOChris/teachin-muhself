var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

var passBoth = (score1 >= pass1) && (score2 >= pass2);

var msg = 'Both rounds passed: ' + passBoth

var el = document.getElementById('answer');
el.textContent = msg;