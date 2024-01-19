let coches = [
    {marca: "VV", precio: 7000, velocidad: 240},
    {marca: "Pe", precio: 800, velocidad: 130},
    {marca: "Vv", precio: 800, velocidad: 120},
    {marca: "Te", precio: 200000, velocidad: 280},
    {marca: "Hy", precio: 18000, velocidad: 120},
    {marca: "To", precio: 20000, velocidad: 130}
];

// Función de comparación para ordenar por precio
coches.sort((a, b) => b.precio - a.precio);

coches.forEach(coche => {
    console.log(coche); // Imprimir cada coche individualmente
});


