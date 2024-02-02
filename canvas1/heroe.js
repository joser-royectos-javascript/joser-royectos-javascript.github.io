class Heroe {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 550;
        this.y = 500;
        this.ancho = 50;
        this.alto = 50;
        this.velocidad = 2;
    }

    mover() {
        this.x -= this.velocidad;
        if (this.x < -this.ancho) {
            this.x = 600;
        }
    }

    dibujar() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }
}
