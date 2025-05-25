var cTAContainer = document.getElementById("cTAContainer");
if (cTAContainer) {
    cTAContainer.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion4Forms']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
var puntosVectorIcon = document.getElementById("puntosVectorIcon");
if (puntosVectorIcon) {
    puntosVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion2SumarPuntos']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
var shopVectorIcon = document.getElementById("shopVectorIcon");
if (shopVectorIcon) {
    shopVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion3Info']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
var comunidadVectorIcon = document.getElementById("comunidadVectorIcon");
if (comunidadVectorIcon) {
    comunidadVectorIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion1Comunidad']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}