// scripts/scroll.js
export function initHeaderScroll() {
    const header = document.querySelector('header');
    
    // Si no existe el header, salimos para evitar errores
    if (!header) return;

    // Función que detecta el scroll
    const handleScroll = () => {
        // Si bajamos más de 50px, agregamos la clase "scrolled"
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            // Si subimos al tope, quitamos la clase (vuelve a ser transparente/blanco)
            header.classList.remove('scrolled');
        }
    };

    // Escuchamos el evento de movimiento
    window.addEventListener('scroll', handleScroll);
}