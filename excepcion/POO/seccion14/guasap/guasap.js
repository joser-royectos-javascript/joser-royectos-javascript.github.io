import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import { getDatabase, ref, set, child, push, update, onValue } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js'

const firebaseConfig = {
    databaseURL: "https://joserafael-86ad8-default-rtdb.europe-west1.firebasedatabase.app/",
    
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
    data[newKey]={'emisor':emisor,'receptor':receptor,'mensaje':texto,'fecha':new Date()};
    update(ref(database), data);
}

//Suscripción a la rama /
const mensajes = ref(database, '/');
onValue(mensajes, (snapshot) => {
    let divMensajes = document.querySelector("#mensajes");
    divMensajes.innerHTML="";
  const data = snapshot.forEach(element => {
    console.log(element.val().emisor);
    divMensajes.innerHTML+=`<br><strong>${element.val().emisor}</strong>:${element.val().mensaje}`;
  });
});