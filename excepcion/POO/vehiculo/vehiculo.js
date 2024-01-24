class Vehiculo {
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.encendido = false;
    }

    arrancar() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`${this.marca} ${this.modelo} arrancó. ¡Vroom, vroom!`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está en marcha.`);
        }
    }

    detener() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`${this.marca} ${this.modelo} se detuvo.`);
        } else {
            console.log(`${this.marca} ${this.modelo} ya está detenido.`);
        }
    }
}

// Ejemplo de uso
const miCoche = new Vehiculo("Toyota", "Camry", "Azul");
miCoche.arrancar();   // Imprime: Toyota Camry arrancó. ¡Vroom, vroom!
miCoche.detener();    // Imprime: Toyota Camry se detuvo.
miCoche.arrancar();   // Imprime: Toyota Camry arrancó. ¡Vroom, vroom!
