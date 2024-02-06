abstract class Calculadora {
    abstract sumar(a: number, b: number): number;
}

class CalculadoraBasica extends Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }
}

const calculadora = new CalculadoraBasica();
console.log(calculadora.sumar(5, 3)); // Salida: 8
