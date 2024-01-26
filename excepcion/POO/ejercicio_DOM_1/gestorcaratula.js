const URL = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";

document.getElementById("btnMostrar").addEventListener("click", mostrarCaratulas);

document.getElementById("btnFiltrar").addEventListener("click", filtrarPorNombre);

async function mostrarCaratulas() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        const container = document.getElementById("caratulasContainer");
        container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevas carátulas
        data.forEach(juego => {
            const ficha = generaFicha(juego);
            container.appendChild(ficha);
        });
    } catch (error) {
        console.error("Error al cargar las carátulas:", error);
    }
}

function generaFicha(juego) {
    const articulo = document.createElement("article");
    articulo.setAttribute("class", "vj");

    const titulo = document.createElement("h1");
    titulo.textContent = juego.title;

    const imagen = document.createElement("img");
    imagen.src = `${URL}${juego.image}`;

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);

    return articulo;
}

function filtrarPorNombre() {
    const nombre = prompt("Ingrese el nombre del juego a buscar:");
    // Realizar lógica de filtrado por nombre aquí
}
