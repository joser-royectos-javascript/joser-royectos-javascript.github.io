let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

let enemigo = new Enemigo(ctx);
let heroe = new Heroe(ctx);

function dibujarJuego() {
    // Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar enemigo
    enemigo.dibujar();

    // Dibujar héroe
    heroe.dibujar();

    // Actualizar posición del enemigo
    enemigo.mover();

    // Actualizar posición del héroe
    heroe.mover();

    // Volver a dibujar en el siguiente cuadro
    requestAnimationFrame(dibujarJuego);
}

// Iniciar el bucle de dibujo del juego
dibujarJuego();
