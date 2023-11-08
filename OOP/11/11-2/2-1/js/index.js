const fetch = require
var url = "https://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&apikey=9fa6058b";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (var i = 0; < data.Episodes.length; i++) {
            console.log(data.Episodes[i].Title);
        }
    });

async function getMovieData() {
    const response = await fetch(url);
    const data = await response.json();
    for (var i = 0; < data.Episodes.length; i++) {
        console.log(data.Episodes[i].Title);
    }
};