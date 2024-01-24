function* generador(index) {
    while (index <= 10) {
        yield index;
        index++;
    }
}

const iterator = generador(-50); // Corregido: usar generador en lugar de foo
let valor;
while ((valor = iterator.next().value) !== undefined) {
    console.log(valor);
}
