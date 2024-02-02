function actualizarHora() {
    const horaActual = new Date();

    // Obtener horas para Madrid, La Habana y Moscú
    const horaMadrid = horaActual.toLocaleTimeString('es-ES', { timeZone: 'Europe/Madrid' });
    const horaHabana = horaActual.toLocaleTimeString('es-ES', { timeZone: 'America/Havana' });
    const horaMoscú = horaActual.toLocaleTimeString('es-ES', { timeZone: 'Europe/Moscow' });

    // Actualizar los elementos HTML con las horas correspondientes
    document.getElementById('hora_madrid').innerText = horaMadrid;
    document.getElementById('hora_habana').innerText = horaHabana;
    document.getElementById('hora_moscu').innerText = horaMoscú;

    // Mostrar mensaje por consola
    console.log('Hora actualizada:', horaActual.toLocaleTimeString('es-ES'));

    // Programar la próxima actualización de la hora
    setTimeout(actualizarHora, 1000); // Actualizar cada segundo
}

// Llamar a la función para iniciar el reloj
actualizarHora();
