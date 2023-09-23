var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {
        elMsg.innerHTML ='';
    }
}

elUsername.addEventListener('blur', function() {
    checkUsername(5);
}, false);

// declare that you're creating an element to get the id tag username
// declare that you will use the id tag for the elMsg later
// declare the function to determine the minimum length of checkusername by
// if the elUsername declared first for the username id tag has a value returned that is less than minLength
// then the text content of elMsg is created and displayed
// otherwise, if greater than the minimum length then nothing is displayed
// first declaration used to add event listener which begins on event blur, runs the function for minlength
// ... with minimum value declared as five/5 in order to retrun to first function the info of length
// and finally if false, retruns to the else statment to remove from the DOM the warning message about...
// ... length