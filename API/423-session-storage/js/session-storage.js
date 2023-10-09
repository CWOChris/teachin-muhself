if (window.sessionStorage) {
    var txtUsername = document.getElementById('username'); // Get form elements
    var txtAnswer = document.getElementById('answer');

    txtUsername.value = sessionStorage.getItem('username'); // Elements populated
    txtAnswer.value = sessionStorage.getItem('answer'); // by sessionStorage data

    txtUsername.addEventListener('input', function () { // Data saved on keyup
        sessionStorage.setItem('username', txtUsername.value);
    }, false);

    txtAnswer.addEventListener('input', function () { // Data saved on keyup
        sessionStorage.setItem('answer', txtAnswer.value);
    }, false);
}