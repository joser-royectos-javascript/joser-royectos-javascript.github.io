function dividirNumeros(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    // Intentamos ejecutar el código que podría lanzar una excepción
    let resultado = dividirNumeros(10, 0);
    console.log("El resultado de la división es:", resultado);
} catch (err) {
    // Capturamos la excepción y manejamos el error
    console.error("Error:", err.message);
    throw err; // Puedes lanzar la excepción nuevamente si es necesario
} finally {
    // Este bloque se ejecutará siempre, ya sea que se lance una excepción o no
    console.log("¡Se ejecutó el bloque finally!");
}

// El programa continúa aquí después de manejar la excepción
console.log("Continuación del programa después del bloque catch");
