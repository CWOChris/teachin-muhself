var greeting = 'Howdy ';
var name = 'Chris';
var message = ', please check your order:';
var welcome = greeting + name + message;

var sign = 'Montague House'
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = '$' + subTotal;

var elshipping = document.getElementById('shipping');
elshipping.textContent = '$' + shipping;

var elgrandTotal = document.getElementById('grandTotal');
elgrandTotal.textContent = '$' + grandTotal;