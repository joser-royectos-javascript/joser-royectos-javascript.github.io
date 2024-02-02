let canvas = document.getElementById("miCanvas");
let ctx = canvas.getContext("2d");

let enemigo = new Enemigo("Alien", "enemigo", 100, 100, 100, 100, 50, 1, ctx);

function dibujarJuego() {
    // Limpiar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar enemigo
    enemigo.dibujar();

    // Actualizar posición del enemigo
    enemigo.mover();

    // Volver a dibujar en el siguiente cuadro
    requestAnimationFrame(dibujarJuego);
}

// Iniciar el bucle de dibujo del juego
dibujarJuego();
