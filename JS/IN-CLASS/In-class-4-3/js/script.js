var clickMeEl = document.querySelector("#clickme");
var counterEl = document.querySelector("#counter");

counter = 0;

clickMeEl.addEventListener("click", function(){
    counter++;
    counterEl.textContent = counter;

})