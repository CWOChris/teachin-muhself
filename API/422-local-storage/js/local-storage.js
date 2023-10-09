if (window.localStorage) {

    var txtUsername = document.getElementById('username'); // Get form elements
    var txtAnswer = document.getElementById('answer');

    textUsername.value = localStorage.getItem('username'); // Elements populated
    textAnswer.value = localStorage.getItem('answer'); // by localStorage data

    txtUsername.addEventListener('input', function () { // Data saved on keyup
        localStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function () { // Data saved on keyup
        localStorage.setItem('answer', txtAnswer.value);
    }, false);
}