document.addEventListener("DOMContentLoaded", function() {
    const emoticono_1 = document.getElementById("emoticono_1");
    const numero_1 = document.getElementById("numero_1");
    const bodyHeight = document.body.offsetHeight ;
    const minimo = 10; // Valor mínimo permitido para la posición del emoticono
    const maximo = 100; // Valor máximo permitido para la posición del emoticono
    const posicion = Math.min(Math.max(0.1 * bodyHeight, minimo), maximo);

    // Función para mover el emoticono al 55% del body
    function moverEmoticonoAbajo() {
        const posicion = Math.min(Math.max(0.1 * bodyHeight, minimo), maximo);

        emoticono_1.style.transform = `translateX(${posicion}px),translateY(${posicion}px)`;
    }

    // Función para hacer saltar el emoticono hacia arriba 300px
    function saltarEmoticonoArriba() {
        emoticono_1.style.transition = "transform 2s";
        emoticono_1.style.transform = "translateY(300px)";
        emoticono_1.style.transform = "translateX(300px)";
    }

    // Función para volver el emoticono a la posición inicial
    function volverPosicionInicial() {
        setTimeout(() => {
            emoticono_1.style.transition = "transform 0s";
            emoticono_1.style.transform = "translateY(0px)";
        }, 500);
    }

    // Llamar a las funciones al cambiar el valor del rango
    numero_1.addEventListener("input", () => {
        moverEmoticonoAbajo();
        saltarEmoticonoArriba();
        volverPosicionInicial();
    });
});
