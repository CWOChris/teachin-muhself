var allCarsEl = document.querySelector(".allcars");

allCarsEl.addEventListener("click", function(event){
    var carClicked = event.target;
    var carID = carClicked.getAttribute("class");
    alert("carID" + carID);
});