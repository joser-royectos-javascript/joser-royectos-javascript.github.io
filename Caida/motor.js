/*const hoja = document.querySelector(`#div-hoja`);

var x=200;
var y=-100;
setInterval(()=>{hoja.computedStyleMap.top = (y+DELTA)+"px"},17,17)
*/
// motor.js

document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia al elemento de la hoja
    const hoja = document.getElementById("div-hoja");
    const DELTA =1;
    // Iniciar la animación
    setInterval(function () {
        // Generar una posición vertical aleatoria
        const posY = Math.random() * window.innerHeight;

        // Asignar la nueva posición a la hoja
        hoja.style.top = (posY+DELTA) + "px",17;
    }, 2000); // Cambia la velocidad ajustando el intervalo (en milisegundos)
});
