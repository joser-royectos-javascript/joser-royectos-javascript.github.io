// Definimos una nueva clase de excepción llamada CustomError que hereda de la clase Error
class CustomError extends Error {
    constructor(message) {
        super(message); // Llamamos al constructor de la clase Error con el mensaje proporcionado
        this.name = this.constructor.name; // Establecemos el nombre de la excepción como el nombre de la clase
    }
}


function castNumberToInt(value) {
    try {
        // Intentamos convertir el valor a un entero
        const intValue = parseInt(value);

        // Verificamos si la conversión fue exitosa
        if (isNaN(intValue)) {
            throw new Error("No se pudo convertir el valor a un entero.");
        }

        return intValue; // Devolvemos el valor convertido
    } catch (error) {
        console.error("Error al convertir el valor:", error.message);
        return null; // Devolvemos null en caso de error
    }
}
// Creamos una instancia de CustomError
const error = new CustomError("Este es un mensaje de error personalizado");



// Ejemplo de uso
console.log(castNumberToInt("123")); // Salida: 123
console.log(castNumberToInt("abc")); // Salida: Error al convertir el valor: No se pudo convertir el valor a un entero.
console.log(castNumberToInt(null)); // Salida: Error al convertir el valor: No se pudo convertir el valor a un entero.

// Lanzamos la excepción
//throw error;