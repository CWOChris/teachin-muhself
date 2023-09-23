function checkUsername() {
    var elMsg = document.getElementById('feedback');
    if (this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);

// declare creation of function username
// declare elmsg for feedback id
// if 'this' is less than 5, then elMsg is displayed
// otherwise, nothing is displayed

// declare what to target for the event listener, in this case elUsername is in id tag username
// use elUsername to add event listener using in paranthesis blur trigger, runs checkUsername until, false