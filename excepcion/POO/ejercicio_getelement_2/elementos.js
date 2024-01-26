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
$(document).ready(function() {
    $('#boton').click(function() {
        // Reiniciar contadores
        let contadorDiv = 0;
        let contadorH1 = 0;
        let contadorUl = 0;

        // Obtener todos los elementos div, h1 y ul
        const divs = $('div');
        const h1s = $('h1');
        const uls = $('ul');

        // Actualizar contadores
        contadorDiv = divs.length;
        contadorH1 = h1s.length;
        contadorUl = uls.length;

        // Mostrar valores en consola
        console.log('Número de elementos div:', contadorDiv);
        console.log('Número de elementos h1:', contadorH1);
        console.log('Número de elementos ul:', contadorUl);

        // Mostrar valores en la página
        $('#valores').html(
            `<p>Número de elementos div: ${contadorDiv}</p>` +
            `<p>Número de elementos h1: ${contadorH1}</p>` +
            `<p>Número de elementos ul: ${contadorUl}</p>`
        );

        // Actualizar contadores en la tabla
        $('#contador-div').text(contadorDiv);
        $('#contador-h1').text(contadorH1);
        $('#contador-ul').text(contadorUl);
    });
});
