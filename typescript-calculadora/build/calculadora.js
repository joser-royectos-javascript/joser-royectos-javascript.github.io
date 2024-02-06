class Calculadora {
}
class CalculadoraBasica extends Calculadora {
    sumar(a, b) {
        return a + b;
    }
}
const calculadora = new CalculadoraBasica();
console.log(`LA suma es`+ calculadora.sumar(5, 3)); // Salida: 8
