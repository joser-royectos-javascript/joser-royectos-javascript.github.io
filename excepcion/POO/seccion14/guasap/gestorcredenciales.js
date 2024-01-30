const ID_APP = "guasap.id";
//INTENTAR RECUPERAR EL ID
var id = localStorage.getItem(ID_APP);
if (id!=null){
    document.querySelector("#identificador").value = id;
}

document.querySelector("#bLogin").onclick = ()=> {
    console.log("Guardando credenciales");
    localStorage.setItem(ID_APP,document.querySelector("#identificador").value);
    id = document.querySelector("#identificador").value;
}