var score1 = 8;
var score2 = 8;
var pass1 = 6;
var pass2 = 6;

var minPass = ((score1 >= pass1) || (score2 >= pass2));

var msg = 'Resit required: ' + !minPass;

var el = document.getElementById('Answer');
el.textContent = msg;