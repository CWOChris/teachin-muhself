var itemTwo = document.getElementById('two');

var elText = itemTwo.firstChild.nodeValue;

elText = elText.replace('pine nuts', 'kale');

itemTwo.firstChild.nodeValue = elText;

// weird but somehow after retyping this code a few times, it finally decided to work.