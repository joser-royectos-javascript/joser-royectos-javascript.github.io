var cesta =[];

function mostrarCestas(){
    console.log(cesta);
}

function mostrarProducto(indice){
    console.log(cesta[indice]);
}

function agregarProducto(item){
    cesta.push(item);
}

agregarProducto("Queso");
mostrarCestas();
mostrarProducto(1);
