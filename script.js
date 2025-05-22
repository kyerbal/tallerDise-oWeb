window.addEventListener('DOMContentLoaded', () => {
    const marquee = document.getElementById('marquee');
    const container = marquee.parentElement;
    let position = container.offsetWidth;

    function scroll() {
        position -= 2; // Cambia este valor para la velocidad
        marquee.style.transform = `translateX(${position}px)`;
        if (position < -marquee.offsetWidth) {
            position = container.offsetWidth;
        }
        requestAnimationFrame(scroll);
    }

    scroll();
});
