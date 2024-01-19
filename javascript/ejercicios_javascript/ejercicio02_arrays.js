

//Ejercicio
let mascotas = ['perrito.jpg','gatito.avi','loro.mp3', 'galápago.docx', 'gallo.jpg'];
//Obtener una lista con los nombres de las mascotas que tienen la extensión jpg
//La nueva lista no debe tener la extensión, solo los nombres.
//Los nombres deben estar en mayúsuclas
//Utilizar slice, map y filter.



console.log(mascotas);

//Opción 2 - Función arrow
let mascoEjpg = mascotas.filter(masco => {
    return masco.toUpperCase().includes('JPG');
});

console.log(mascoEjpg);

let posPunto = mascoEjpg.lastIndexOf(".");
console.log(mascoEjpg.slice(0,posPunto));

