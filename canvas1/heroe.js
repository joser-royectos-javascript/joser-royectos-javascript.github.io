class Heroe {
    constructor(x, y, ancho, alto, ctx) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.velocidad = 5; // Velocidad de movimiento del héroe
        this.ctx = ctx;

        // Manejar eventos de teclado
        document.addEventListener('keydown', this.teclaPresionada.bind(this));
    }

    update() {
        // No hay necesidad de lógica de movimiento aquí, se manejará con eventos de teclado
    }

    draw() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }

    // Método para manejar eventos de teclado
    teclaPresionada(evento) {
        switch (evento.keyCode) {
            case 37: // Flecha izquierda
                this.x -= this.velocidad;
                break;
            case 39: // Flecha derecha
                this.x += this.velocidad;
                break;
            case 32: // Barra espaciadora
                this.disparar();
                break;
        }
    }

    // Método para disparar
    disparar() {
        // Crear un objeto disparo
        let disparo = new Disparo(this.x + this.ancho / 2, this.y, 5, 10, this.ctx);
        // Agregar el disparo a un arreglo o manejarlo según sea necesario en tu juego
    }
}
