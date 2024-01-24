/*
Crear un array con tres producto

*/


let productos = [
    {tipo : "Arroz", precioUnitario : "5.5", numeroUnidad : "5"},
    {tipo : "Frijol", precioUnitario : "7.3", numeroUnidad : "3"},
    {tipo : "Agua", precioUnitario : "8.6", numeroUnidad : "2"}
];

function informeProducto(producto){
    console.log(`-> ${producto.tipo}. ${producto.numeroUnidad}. unidades. Total  ${producto.precioUnitario*producto.numeroUnidad}€.`);                    
}



productos.map(informeProducto);