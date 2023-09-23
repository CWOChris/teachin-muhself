function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length <5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;


// using a function that is declared up top we are able to verify the contents of the username box is > 5
// first, function is declared with checkUsername() as it's name
// second, elMsg is declared to target the "feedback" id tag in the DOM
// next, if is used to check 'this' value's length is less than 5 and if returns a 'true'...
// ...then in line 4 elMsg that was declared earlier to go in div id feedback is displayed on user's DOM
// next, 'else' means 'otherwise continue'
// next, because it's possible for something to be displayed in the user's DOM if the text.length < 5...
// ...then elMsg is told to create textContent of '' aka nothing/0
// then, elUsername is declared to target id tag "username" in the DOM
// finally, declared elUsername uses onblur to run the function declared first for checking length