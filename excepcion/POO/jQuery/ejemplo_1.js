$(document).ready(function() {
    // Accediendo a elementos del DOM
    const $container = $('#container');
    const $boton = $('#boton');

    // Modificando el contenido de un elemento
    $container.append('<p>Este es otro párrafo.</p>');

    // Agregando un evento de clic al botón
    $boton.click(function() {
        console.log('¡Haz hecho clic en el botón!');
    });

    // Cambiando estilos CSS dinámicamente
    $container.css({
        backgroundColor: 'lightblue',
        padding: '20px'
    });

    // Creando nuevos elementos y agregándolos al DOM
    const $nuevoElemento = $('<p>Este es un nuevo párrafo creado dinámicamente.</p>');
    $container.append($nuevoElemento);
});
