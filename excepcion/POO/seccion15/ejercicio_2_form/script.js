document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log(username, password);

        try { 
            const response = await fetch('file:///Users/tardes/Documents/GitHub/joser-royectos-javascript.github.io/excepcion/POO/seccion15/ejercicio_2_form/passwords.json');
            const data = await response.json();

            if (data.includes(password)) {
                alert('La contraseña no puede ser una de las más comunes. Por favor, elija otra.');
                console.log(data);
            } else {
                alert('La contraseña es segura. Puede continuar.');
                form.submit();
            }
        } catch (error) {
            console.error('Error al obtener la lista de contraseñas:', error);
            alert('Se produjo un error al verificar la contraseña. Por favor, inténtelo de nuevo más tarde.');
            alert (data);
            alert (username);
            alert (password);
        }
    }
});
