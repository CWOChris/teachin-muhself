$("#genresForm").on("submit", function(e){
    e.preventDefault();
    var musicValue = $("input[name='music']").val(); //val() is .value in JS
   // var musicValue = $("#musicID") //does the same thing as the code on line 3
    console.log("musicValue", musicValue)
    var musicItem = $("<li>");
    musicItem.text(musicValue);
    $("ul").append(musicItem);
    $("input[name='music']").val("");


});