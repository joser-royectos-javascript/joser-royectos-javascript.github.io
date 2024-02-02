class Enemigo {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 550;
        this.y = 200;
        this.ancho = 50;
        this.alto = 50;
        this.velocidad = 1;
    }

    mover() {
        this.x -= this.velocidad;
        if (this.x < -this.ancho) {
            this.x = 600;
        }
    }

    dibujar() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }
}
