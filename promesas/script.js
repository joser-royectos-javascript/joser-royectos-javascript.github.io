const contentDiv = document.getElementById('content');

async function fetchData(url, proceso) {
    const startTime = new Date();
    const response = await fetch(url);
    const endTime = new Date();
    const tiempoTranscurrido = endTime - startTime;

    const data = await response.json();
    console.log(`Proceso ${proceso}: Tiempo de respuesta: ${tiempoTranscurrido}ms`);
    console.log(data);

    return { proceso, tiempoTranscurrido, data };
}

async function main() {
    contentDiv.innerHTML = '<p>Ejecutando procesos...</p>';

    // Simulando procesos de comunicación con un retardo de 3 segundos
    const resultados = await Promise.all([
        fetchData("http://192.168.1.107:8080/playstation_covers.json", 1),
        fetchData("http://192.168.1.107:8080/playstation_covers.json", 2),
        fetchData("http://192.168.1.107:8080/playstation_covers.json", 3),
    ]);

    // Mostrar resultados en la página
    contentDiv.innerHTML = '';
    resultados.forEach(resultado => {
        contentDiv.innerHTML += `<p>Proceso ${resultado.proceso}: Tiempo de respuesta: ${resultado.tiempoTranscurrido}ms</p>`;
        contentDiv.innerHTML += `<pre>${JSON.stringify(resultado.data, null, 2)}</pre>`;
    });
}

main();
