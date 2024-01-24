"use strict";

//función 
//recibe objeto Cerveza con tres atributos
//recibe como argumento nombre de la fichero de los datos de la Cerveza
/*
creando objeto Cerveza
*/
let  peli_1 = {
    nombre : "Tor",
    duracion : 2,
    actoMenores : false,
}   

let fichombrePorDefecto = "Cerveza.txt"
console.log(peli_1.nombre);
console.log(peli_1.duracion);
console.log(peli_1.actoMenores);


/* ============================================================================ */
//
function guardaPeli(peli_1,fichombrePorDefecto){

}

/* ============================================================================ */
const fs = require(`node:fs`);

const contenido = `Soy un texto.`;

fs.writeFile("./salida.txt", contenido, err=>{
    if (err){
        console.error(err);
    } else {
        console.log("Ok");
    }  
})
