function smoothScrollTo(element, duration = 1200) {
  const targetPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
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

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.addEventListener("DOMContentLoaded", () => {
  // Formulario de registro
  const formulario = document.getElementById("formulario");
  const inputNombre = document.getElementById("nombre");
  const mensajeError = document.getElementById("mensaje-error");
  const bloqueExito = document.getElementById("exito");
  const saludoNombre = document.getElementById("bienvenida-nombre");

  const nombreGuardado = localStorage.getItem("nombre");
  if (nombreGuardado) {
    formulario.style.display = "none";
    mostrarExito(nombreGuardado);
  }

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    if (nombre === "") {
      mensajeError.textContent = "Por favor, ingresá tu nombre.";
      return;
    }

    localStorage.setItem("nombre", nombre);
    mensajeError.textContent = "";
    formulario.style.display = "none";
    mostrarExito(nombre);
    formulario.reset();
  });

  function mostrarExito(nombre) {
    if (saludoNombre) {
      saludoNombre.textContent = `¡Bienvenido, ${nombre}!`;
    }
    if (bloqueExito) {
      bloqueExito.style.display = "block";
    }
  }

  const botonCerrar = document.getElementById("cerrar-sesion");
  if (botonCerrar) {
    botonCerrar.addEventListener("click", () => {
      localStorage.removeItem("nombre");
      location.reload();
    });
  }

  // Carruseles múltiples con dots y botones
  const carruseles = [
    { scrollId: "carrusel", dotsId: "dots-comunidad", buttons: "comunidad" },
    { scrollId: "carrusel-puntos", dotsId: "dots-puntos", buttons: "puntos" },
    { scrollId: "carrusel-merch", dotsId: "dots-merch", buttons: "merch" },
  ];

  carruseles.forEach(({ scrollId, dotsId, buttons }) => {
    const carrusel = document.getElementById(scrollId);
    const dotsContainer = document.getElementById(dotsId);
    const items = carrusel?.querySelectorAll(".carrusel-item");
    if (!carrusel || !dotsContainer || !items.length) return;

    let currentIndex = 0;

    // Crear puntos
    items.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.classList.add("carrusel-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        carrusel.scrollTo({ left: items[i].offsetLeft, behavior: "smooth" });
      });
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll(".carrusel-dot");

    carrusel.addEventListener("scroll", () => {
      const scrollLeft = carrusel.scrollLeft;
      const itemWidth = items[0].offsetWidth;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== currentIndex) {
        dots[currentIndex]?.classList.remove("active");
        dots[newIndex]?.classList.add("active");
        currentIndex = newIndex;
      }
    });

    // Flechas
    if (buttons) {
      const prev = document.querySelector(`.carrusel-btn.prev[data-target="${buttons}"]`);
      const next = document.querySelector(`.carrusel-btn.next[data-target="${buttons}"]`);

      prev?.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        carrusel.scrollTo({ left: items[currentIndex].offsetLeft, behavior: "smooth" });
      });

      next?.addEventListener("click", () => {
        currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        carrusel.scrollTo({ left: items[currentIndex].offsetLeft, behavior: "smooth" });
      });
    }
  });
});
