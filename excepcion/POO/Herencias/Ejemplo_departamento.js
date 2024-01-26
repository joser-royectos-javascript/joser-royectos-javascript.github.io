///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

"use strict";

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método toString para representar la información de la persona como una cadena de texto
    toString() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}`;
    }
}

// Creamos una instancia de la clase Persona
let persona = new Persona("Juan", 30);

// Llamamos al método toString() para obtener una representación de la persona como cadena de texto
console.log(persona.toString()); // Imprime: Nombre: Juan, Edad: 30




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
