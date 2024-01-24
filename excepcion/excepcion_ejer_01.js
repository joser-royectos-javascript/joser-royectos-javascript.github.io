function calcularCuadrado(numero) {
    if (numero < 0) {
        throw new Error("No se puede calcular el cuadrado de un número negativo");
    }

    if (numero % 2 === 0) {
        throw new Error("No se puede calcular el cuadrado de un número par");
    }

    return numero * numero;
}

try {
    let resultado = calcularCuadrado(5);
    console.log("El cuadrado es:", resultado);

        // Intenta calcular el cuadrado de un número par (esto lanzará otra excepción)
        resultado = calcularCuadrado(4);
        console.log("Este mensaje no se imprimirá"); // Esta línea no se ejecutará debido a la excepción
    
        resultado = calcularCuadrado(7);
        console.log("El cuadrado es:", resultado);
    
    // Intenta calcular el cuadrado de un número negativo (esto lanzará una excepción)
    resultado = calcularCuadrado(-3);
    console.log("Este mensaje no se imprimirá"); // Esta línea no se ejecutará debido a la excepción
    


} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("¡Se ejecutó el bloque finally!");
}

console.log("Continuación del programa después del bloque try-catch-finally");
