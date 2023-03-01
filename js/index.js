document.getElementById('login-id').addEventListener('click', function () {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if ( email == 'admin@admin.com' && password == 'password') {
        window.location.href = './shopping.html';
    }
})