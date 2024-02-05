class Enemigo {
    constructor(x, y, width, height, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.speed = 2;
        this.direction = 1;
    }

    update() {
        this.x += this.speed * this.direction;

        if (this.x <= 0 || this.x >= canvas.width - this.width) {
            this.direction *= -1;
        }

        // Mover hacia abajo
        if (this.y + this.height < canvas.height - 30) {
            this.y += 2;
        }
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    disparar() {
        const disparoX = this.x + this.width / 2;
        const disparoY = this.y + this.height / 2;
        const disparoWidth = 5;
        const disparoHeight = 20;
        const disparoSpeed = 5;

        const disparo = new Disparo(disparoX, disparoY, disparoWidth, disparoHeight, disparoSpeed, this.ctx);
        disparo.draw();

        const timer = setInterval(() => {
            disparo.update();
            disparo.draw();

            if (disparo.y >= canvas.height) {
                clearInterval(timer);
            }
        }, 20);
    }
}

class Disparo {
    constructor(x, y, width, height, speed, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.ctx = ctx;
    }

    update() {
        this.y += this.speed;
    }

    draw() {
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
