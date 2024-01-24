function calcularCuadrado(numero) {
    if (numero < 0) {
        throw new Error("No se puede calcular el cuadrado de un número negativo");
    }

    if (numero % 2 === 0) {
        throw new Error("No se puede calcular el cuadrado de un número par");
    }

    return numero * numero;
}

let resultado;

try {
    resultado = calcularCuadrado(5);
    console.log("El cuadrado es:", resultado);
} finally {
    // Este bloque se ejecutará siempre, ya sea que se lance una excepción o no
    console.log("¡Se ejecutó el bloque finally!");
}

try {
    // Intenta calcular el cuadrado de un número negativo (esto lanzará una excepción)
    resultado = calcularCuadrado(-3);
    console.log("Este mensaje no se imprimirá"); // Esta línea no se ejecutará debido a la excepción
} finally {
    // Este bloque se ejecutará siempre, ya sea que se lance una excepción o no
    console.log("¡Se ejecutó el bloque finally!");
}

try {
    // Intenta calcular el cuadrado de un número par (esto lanzará otra excepción)
    resultado = calcularCuadrado(4);
    console.log("Este mensaje no se imprimirá"); // Esta línea no se ejecutará debido a la excepción
} finally {
    // Este bloque se ejecutará siempre, ya sea que se lance una excepción o no
    console.log("¡Se ejecutó el bloque finally!");
}

console.log("Continuación del programa después de los bloques try-finally");
