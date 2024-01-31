const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const response = await fetch('https://lucidar.me/en/security/files/100000-most-common-passwords.json');
    const passwords = await response.json();

    if (passwords.includes(password)) {
        alert('La contraseña ingresada no es segura. Por favor, elija otra.');
    } else {
        alert('¡Puede continuar! La contraseña es segura.');
        loginForm.reset();
    }
});
