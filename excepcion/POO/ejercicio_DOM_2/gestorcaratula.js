const URL_CARATULAS = "https://demo6481436.mockable.io/caratulas";
const URL_IMAGENES = "https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/covers_gameboy/";

const caratulasDiv = document.getElementById("caratulas");
const mostrarTodosBtn = document.getElementById("mostrarTodos");
const buscarInput = document.getElementById("buscarInput");
const buscarBtn = document.getElementById("buscarBtn");

mostrarTodosBtn.addEventListener("click", mostrarTodasCaratulas);
buscarBtn.addEventListener("click", buscarPorNombre);

async function mostrarTodasCaratulas() {
    const caratulas = await obtenerCaratulas();
    mostrarCaratulas(caratulas);
}

async function buscarPorNombre() {
    const nombre = buscarInput.value.trim().toLowerCase();
    const caratulas = await obtenerCaratulas();
    const caratulasFiltradas = caratulas.filter(juego => juego.title.toLowerCase().includes(nombre));
    mostrarCaratulas(caratulasFiltradas);
}

async function obtenerCaratulas() {
    try {
        const response = await fetch(URL_CARATULAS);
        if (!response.ok) {
            throw new Error("No se pudo obtener la lista de carátulas.");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las carátulas:", error);
        return [];
    }
}

function mostrarCaratulas(caratulas) {
    caratulasDiv.innerHTML = "";
    caratulas.forEach(juego => {
        const articulo = generaFicha(juego);
        caratulasDiv.appendChild(articulo);
    });
}

function generaFicha(juego) {
    const articulo = document.createElement("article");
    articulo.setAttribute("class", "vj");

    const titulo = document.createElement("h1");
    titulo.textContent = juego.title;

    const imagen = document.createElement("img");
    imagen.src = `${URL_IMAGENES}${juego.image}`;

    articulo.appendChild(titulo);
    articulo.appendChild(imagen);

    return articulo;
}
