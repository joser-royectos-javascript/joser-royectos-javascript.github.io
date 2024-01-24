"use strict";

//función



const fs = require(`node:fs`);

const contenido = `Soy un texto.`;

fs.writeFile("./salida.txt", contenido, err=>{
    if (err){
        console.error(err);
    } else {
        console.log("Ok");
    }  
})