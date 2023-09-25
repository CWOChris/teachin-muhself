function createBest(length) {
    var zero = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()_+-=';
    var msg = '';
    for (i = 0; i < length; i++) {
        var randoChars = Math.floor(Math.random() * zero.length);
        msg += zero.charAt(randoChars);
    }
    return msg;
}

var pwdLength = 12;  //Need this to respond to a user prompt text input that only allows 8-128

var finalBest = createBest(pwdLength);





console.log("This is strongest");
console.log(finalBest);
console.log("This is middle");
console.log(finalBetter);
console.log("This is weakest");
console.log(finalWeak);