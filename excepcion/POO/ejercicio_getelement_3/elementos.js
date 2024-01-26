document.addEventListener('DOMContentLoaded', function() {
    const botonContador = document.getElementById('botonContador');
    const contadorDiv = document.getElementById('contadorDiv');
    const contadorH1 = document.getElementById('contadorH1');
    const contadorUl = document.getElementById('contadorUl');

    botonContador.addEventListener('click', function() {
        const divs = document.querySelectorAll('div').length;
        const h1s = document.querySelectorAll('h1').length;
        const uls = document.querySelectorAll('ul').length;

        contadorDiv.textContent = divs;
        contadorH1.textContent = h1s;
        contadorUl.textContent = uls;
    });
});
