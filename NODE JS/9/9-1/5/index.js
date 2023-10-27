const soda = ["Pepsi", "Coke", "Sprite", "Fanta", "Mountain Dew", "Surge",];

function bestSoda(eachSoda) {
    if (eachSoda==="Surge" || eachSoda==="Mountain Dew") {
        return true;
    }
}

const favoriteSoda = soda.filter(bestSoda);

console.log(favoriteSoda);






// const startsWithCSoda = soda.filter(function(eachSoda) {
//     return eachSoda.startsWith("C");
// });

// console.log(startsWithCSoda);