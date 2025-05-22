var favoritoIcon = document.getElementById("favoritoIcon");
if (favoritoIcon) {
    favoritoIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='tITULOSUMARPUNTOS']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}


var carteraIcon = document.getElementById("carteraIcon");
if (carteraIcon) {
    carteraIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion3Info']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}


var cuentaIcon = document.getElementById("cuentaIcon");
if (cuentaIcon) {
    cuentaIcon.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='seccion1Comunidad']");
        if (anchor) {
            anchor.scrollIntoView({ "block": "start", "behavior": "smooth" })
        }
    });
}
