const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    const response = await fetch('file:///Users/tardes/Documents/GitHub/joser-royectos-javascript.github.io/excepcion/POO/seccion15/ejercicio_2_form/passwords.json');
    const passwords = await response.json();
    fetch(response);
    fetch(response, password);
    if (passwords.includes(password)) {
        alert('La contraseña ingresada no es segura. Por favor, elija otra.');
    } else {
        alert('¡Puede continuar! La contraseña es segura.');
        loginForm.reset();
    }
});
