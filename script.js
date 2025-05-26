function smoothScrollTo(element, duration = 1200) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Ease function for smooth effect
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Reemplaza scrollIntoView por smoothScrollTo en tus listeners:
var cTAContainer = document.getElementById("cTAContainer");
if (cTAContainer) {
    cTAContainer.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion4Forms']");
        if (anchor) {
            smoothScrollTo(anchor, 1200); // 1200 ms = 1.2 segundos
        }
    });
}
var puntosVectorIcon = document.getElementById("puntosVectorIcon");
if (puntosVectorIcon) {
    puntosVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion2SumarPuntos']");
        if (anchor) {
            smoothScrollTo(anchor, 1200);
        }
    });
}
var shopVectorIcon = document.getElementById("shopVectorIcon");
if (shopVectorIcon) {
    shopVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion3Info']");
        if (anchor) {
            smoothScrollTo(anchor, 1200);
        }
    });
}
var comunidadVectorIcon = document.getElementById("comunidadVectorIcon");
if (comunidadVectorIcon) {
    comunidadVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion1Comunidad']");
        if (anchor) {
            smoothScrollTo(anchor, 1200);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const inputNombre = document.getElementById('nombre');
    const mensajeError = document.getElementById('mensaje-error');
    const bloqueExito = document.getElementById('exito');
    const saludoNombre = document.getElementById('bienvenida-nombre');

    // Mostrar saludo si ya hay un nombre guardado
    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        formulario.style.display = 'none';
        mostrarExito(nombreGuardado);


    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = inputNombre.value.trim();

        if (nombre === '') {
            mensajeError.textContent = 'Por favor, ingresá tu nombre.';
            return;
        }

        localStorage.setItem('nombre', nombre);
        mensajeError.textContent = '';
        formulario.style.display = 'none'; // Oculta el formulario
        mostrarExito(nombre);
        formulario.reset(); // Limpia todos los campos del formulario
    });

    function mostrarExito(nombre) {
        if (saludoNombre) {
            saludoNombre.textContent = `¡Bienvenido, ${nombre}!`;
        }
        if (bloqueExito) {
            bloqueExito.style.display = 'block';
        }
    }
});

const botonCerrar = document.getElementById('cerrar-sesion');
if (botonCerrar) {
    botonCerrar.addEventListener('click', () => {
        localStorage.removeItem('nombre');
        location.reload(); // Refresca la página para reiniciar todo
    });
}
