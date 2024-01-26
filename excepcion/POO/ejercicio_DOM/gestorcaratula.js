const URL = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";

async function getJSONFromURL(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta del servidor');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los datos JSON:', error);
        return null;
    }
}

async function mostrarCaratulas() {
    const tabla = document.getElementById('caratulasBody');
    const data = await getJSONFromURL(URL);
    if (data) {
        console.log('Datos JSON obtenidos:', data);
        data.forEach(caratula => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${caratula.id}</td>
                <td>${caratula.titulo}</td>
                <td>${caratula.autor}</td>
                <td>${caratula.editorial}</td>
                <td>${caratula.anio}</td>
            `;
            tabla.appendChild(fila);
        });
        
}


function generaFicha(juego) {
    let articulo = document.createElement("article");
    articulo.setAttribute("class", "vj");
    
    let titulo = document.createElement("h1");
    let textoTitulo = document.createTextNode(juego.title); // Corregido: juego.title sin comillas
    titulo.appendChild(textoTitulo);

    let imagen = document.createElement("img");
    imagen.src = juego.image; // Asignar la URL de la imagen del juego

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);

    // Agregar el artículo al cuerpo del documento HTML
    document.body.appendChild(articulo);
}

// Llamar a la función mostrarCaratulas() al cargar la página

mostrarCaratulas();
