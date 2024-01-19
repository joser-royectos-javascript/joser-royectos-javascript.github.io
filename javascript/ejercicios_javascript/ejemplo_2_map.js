/*
Crear un array con tres producto

*/


let productos = [
    {titulo : "Arroz", precioUnitario : "5.5", numeroUnidad : "5"},
    {titulo : "Frijol", precioUnitario : "7.3", numeroUnidad : "3"},
    {titulo : "Agua", precioUnitario : "8.6", numeroUnidad : "2"}
];

function informeProducto(producto){
    console.log(`-> ${producto.titulo}. ${producto.numeroUnidad}. unidades. Total  ${producto.precioUnitario*producto.numeroUnidad}€.`);                    
}



productos.map(informeProducto);