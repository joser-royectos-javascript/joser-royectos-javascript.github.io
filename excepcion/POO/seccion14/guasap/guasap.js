import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, set, child, push, update } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const firebaseConfig = {
    databaseURL: "https://guasap-8535a-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


document.querySelector("#bEnviar").onclick = function(){
    console.log("Leyendo mensaje...");
    const texto = document.querySelector("#mensaje").value;
    document.querySelector("#mensaje").value = "";
    enviarTexto(texto, id);
};

function enviarTexto(texto, emisor, receptor="EVERYBODY"){
    console.log(id + ":Enviando texto:" + texto);
    const newKey = push(child(ref(database), 'mensajes')).key;
    const data = {};
    data[newKey]=texto;
    update(ref(database), data);
}