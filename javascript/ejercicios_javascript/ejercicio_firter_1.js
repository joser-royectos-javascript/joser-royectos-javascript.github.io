/*

Crear un Array con 5 objetos Cerveza que tienen los atributos:
- tipo.
- Número de temporadas.
- Plataformas (N,P,H)

com Map, añadir un atributo 

/*
Creando Array con los Cervezas
*/
    let serie = [
    {tipo : "Serie_A", numeroTemporada : "3", plataforma : "N"},
    {tipo : "Serie_B", numeroTemporada : "4", plataforma : "N"},
    {tipo : "Serie_C", numeroTemporada : "5", plataforma : "H"},
    {tipo : "Serie_D", numeroTemporada : "3", plataforma : "P"},
    {tipo : "Serie_F", numeroTemporada : "2", plataforma : "T"}
];

//añadir atributo

function agregarAtributo(item) {
    serie.push(item);//Agregar elemento al array
}

for (let i=0;i<serie.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
}


function convertirAMayusculas(palabra){
    console.log("Convirtiendo a mayúsculas");
    let palabraMayusculas =  palabra.toUpperCase();
    return palabraMayusculas;
}

let lista = ["palabra1", "palabra2", "palabra3"];

//Modo tracicional
for (let i=0;i<lista.length;i++){
    lista[i] = convertirAMayusculas(lista[i]);
}
console.log(lista);

//Modo map con función 'con nombre'
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(convertirAMayusculas);
console.log(lista);

//Modo map con función anónima
lista = ["palabra1", "palabra2", "palabra3"];
lista = lista.map(function(elemento){
    elemento = elemento.toUpperCase();
    return elemento;
});
console.log(lista);

