function mostrarHora() {
  const horaMadrid = new Date().toLocaleTimeString('es-ES', {timeZone: 'Europe/Madrid'});
  const horaLaHabana = new Date().toLocaleTimeString('es-ES', {timeZone: 'America/Havana'});
  const horaMoscú = new Date().toLocaleTimeString('es-ES', {timeZone: 'Europe/Moscow'});

  console.log('Hora en Madrid:', horaMadrid);
  console.log('Hora en La Habana:', horaLaHabana);
  console.log('Hora en Moscú:', horaMoscú);
}

// Mostrar la hora cada segundo
setInterval(mostrarHora, 1000);
