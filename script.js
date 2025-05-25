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