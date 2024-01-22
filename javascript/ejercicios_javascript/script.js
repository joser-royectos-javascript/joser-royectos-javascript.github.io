// script.js

var xmlHttp = new XMLHttpRequest();

function encuentraPeli(titel) {
    const API_KEY = `841286e`;
    const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${titel}`;

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            processResponse(JSON.parse(xmlHttp.responseText));
        } else {
            console.error("Ha ocurrido un error: " + xmlHttp.status);
            document.querySelector("#title").innerHTML = "Error: " + xmlHttp.status;
        }
    }

    xmlHttp.open("GET", encodeURI(URL), true);
    xmlHttp.send();
}

function processResponse(peli) {
    console.log(peli);
    // Aquí puedes hacer algo con la respuesta, por ejemplo, mostrar el título y la imagen
    document.querySelector("#title").innerHTML = peli.Title;
    document.querySelector("#imagen").src = peli.Poster;
}
