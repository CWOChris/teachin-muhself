var lettersEl = document.querySelector("#letters");
var copy = "";
document.addEventListener("keyup", function(e){
    console.log(e.key);
    console.log(e.code);
    copy = copy + e.key;
    lettersEl.textContent = copy;
})


var expLoady = document.getElementsByClassName('spanner');
expLoady.textContent = copy;