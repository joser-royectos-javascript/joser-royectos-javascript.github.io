///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"use strict";
class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    calcularArea() {
        throw new Error("Método calcularArea no implementado");
    }

    calcularPerimetro() {
        throw new Error("Método calcularPerimetro no implementado");
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Cuadrado extends FiguraGeometrica {
    constructor(lado) {
        super("Cuadrado");
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }

    calcularPerimetro() {
        return 4 * this.lado;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Triángulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro() {
        return (this.base + this.altura + Math.sqrt((this.base**2) + (this.altura**2)));
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Rectángulo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.base + this.altura);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Circulo extends FiguraGeometrica {
    constructor(radio) {
        super("Círculo");
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * this.radio ** 2;
    }

    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ejemplo de uso
const cuadrado = new Cuadrado(5);
console.log("Área del cuadrado:", cuadrado.calcularArea());
console.log("Perímetro del cuadrado:", cuadrado.calcularPerimetro());

const triangulo = new Triangulo(4, 6);
console.log("Área del triángulo:", triangulo.calcularArea());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
try {
    console.log("Perímetro del triángulo:", triangulo.calcularPerimetro());
} catch (error) {
    console.log(error.message);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const rectangulo = new Rectangulo(3, 7);
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());

const circulo = new Circulo(4);
console.log("Área del círculo:", circulo.calcularArea());
console.log("Perímetro del círculo:", circulo.calcularPerimetro());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
