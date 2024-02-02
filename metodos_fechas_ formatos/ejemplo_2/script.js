function actualizarHora() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const gradoHora = (horas * 30) + (minutos / 2); // Cada hora representa 30 grados
    const gradoMinuto = minutos * 6; // Cada minuto representa 6 grados
    const gradoSegundo = segundos * 6; // Cada segundo representa 6 grados

    document.getElementById('hora').style.transform = `rotate(${gradoHora}deg)`;
    document.getElementById('minuto').style.transform = `rotate(${gradoMinuto}deg)`;
    document.getElementById('segundo').style.transform = `rotate(${gradoSegundo}deg)`;
}

setInterval(actualizarHora, 1000);
