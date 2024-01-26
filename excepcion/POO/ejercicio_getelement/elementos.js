$(document).ready(function() {
    // Función para mostrar los valores de las etiquetas en la página y en la consola
    function mostrarValores() {
        // Obtener todas las etiquetas del HTML
        const etiquetas = $('*');

        // Limpiar el contenido actual del elemento con id "valores"
        $('#valores').empty();

        // Iterar sobre cada etiqueta y mostrar su nombre y valor en la página
        etiquetas.each(function() {
            const nombre = this.tagName;
            const valor = $(this).text();
            $('#valores').append(`<p><strong>${nombre}</strong>: ${valor}</p>`);
        });

        // Mostrar los valores en la consola del navegador
        console.clear(); // Limpiar la consola antes de mostrar los valores
        etiquetas.each(function() {
            const nombre = this.tagName;
            const valor = $(this).text();
            console.log(`${nombre}: ${valor}`);
        });
    }

    // Agregar un evento de clic al botón "Mostrar Elementos"
    $('#boton').click(function() {
        mostrarValores();
    });
});
