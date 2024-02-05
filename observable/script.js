const { from } = rxjs;
const { concatMap, delay } = rxjs.operators;

async function fetchData(url, proceso) {
    const response = await fetch(url);
    const data = await response.json();
    return { proceso, data };
}

function main() {
    const proceso1Url = 'URL_DEL_PROCESO_1';
    const proceso2Url = 'URL_DEL_PROCESO_2';
    const proceso3Url = 'URL_DEL_PROCESO_3';

    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Ejecutando procesos...</p>';

    from([proceso1Url, proceso2Url, proceso3Url]).pipe(
        concatMap((url, index) => fetchData(url, index + 1).pipe(delay(3000 * index)))
    ).subscribe({
        next: resultado => {
            contentDiv.innerHTML += `<p>Proceso ${resultado.proceso}: ${JSON.stringify(resultado.data)}</p>`;
            console.log(`Proceso ${resultado.proceso} completado`);
        },
        error: error => console.error('Error en la solicitud:', error),
        complete: () => console.log('Todos los procesos completados')
    });
}

main();
