const URL_CARATULAS = "https://demo6481436.mockable.io/caratulas";
const URL_IMAGENES = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";

// Función para obtener y mostrar las carátulas
async function mostrarCaratulas() {
    try {
        const response = await fetch(URL_CARATULAS);
        const data = await response.json();

        const caratulasDiv = document.getElementById("caratulas");
        data.forEach(juego => {
            const ficha = generaFicha(juego);
            caratulasDiv.appendChild(ficha);
        });
    } catch (error) {
        console.error("Error al obtener las carátulas:", error);
    }
}

// Función para generar una ficha de juego
function generaFicha(juego) {
    const articulo = document.createElement("article");
    articulo.classList.add("caratula");

    const titulo = document.createElement("h2");
    titulo.textContent = juego.title;

    const imagen = document.createElement("img");
    imagen.src = `${URL_IMAGENES}${juego.image}`;

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);

    return articulo;
}

// Mostrar las carátulas al cargar la página
mostrarCaratulas();
