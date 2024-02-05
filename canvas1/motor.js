const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

let heroe;
let enemigo;

function iniciarJuego() {
    heroe = new Heroe(canvas.width / 2, canvas.height - 60, 50, 50, ctx);
    enemigo = new Enemigo(canvas.width / 2, 60, 50, 50, ctx);

    setInterval(() => {
        enemigo.disparar();
    }, 3000);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    heroe.update();
    heroe.draw();

    enemigo.update();
    enemigo.draw();

    requestAnimationFrame(draw);
}

iniciarJuego();
draw();
