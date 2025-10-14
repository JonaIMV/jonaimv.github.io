/**
 * Inicializa y configura las animaciones de Scroll Reveal para toda la aplicación.
 */
export function initScrollReveal() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn("ScrollReveal library not loaded.");
        return;
    }

    // Configuración Base de la Animación
    const sr = ScrollReveal({
        duration: 900,
        distance: '50px',
        easing: 'ease-in-out',
        mobile: true 
    });

    // Animaciones para la Guía de Inversión Local (Movimiento Lateral)
    sr.reveal('.reveal-left', { origin: 'left', interval: 150 });
    sr.reveal('.reveal-right', { origin: 'right', interval: 150 });
    
    // Animación para el Contenido Central/Secundario
    sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });
}