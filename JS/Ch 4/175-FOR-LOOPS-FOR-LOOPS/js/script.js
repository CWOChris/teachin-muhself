var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msg = '';
var i;

for (i = 0; i < arrayLength; i++) {
    var score = scores[i]
    roundNumber = (i + 1);
    msg += 'Round ' + roundNumber + ': ';
    msg += scores[i] + '<br />';
}

document.getElementById('answer').innerHTML = msg;


// This is what I discussed with the tutor. Go to the page and look at the console log //
var randNum = Math.random() * scores.length;
var randIndex = Math.floor(randNum);
scores.forEach(function(score, i) {
console.log("Score: ", score);
console.log(i);
})