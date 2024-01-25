class Personaje {
    constructor(nombre, salud, fortaleza) {
        this.nombre = nombre;
        this.salud = salud;
        this.fortaleza = fortaleza;
    }

    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo.nombre}!`);
        const danio = Math.floor(Math.random() * this.fortaleza); // Genera un daño aleatorio basado en la fortaleza del personaje
        objetivo.recibirDanio(danio);
    }

    recibirDanio(danio) {
        console.log(`${this.nombre} recibe ${danio} puntos de daño.`);
        this.salud -= danio;
        if (this.salud <= 0) {
            console.log(`${this.nombre} ha sido derrotado.`);
        }
    }
}

// Ejemplo de uso
const jugador1 = new Personaje("Héroe", 100, 20);
const enemigo1 = new Personaje("Enemigo", 80, 15);

jugador1.atacar(enemigo1); // El héroe ataca al enemigo
enemigo1.atacar(jugador1); // El enemigo contraataca al héroe


