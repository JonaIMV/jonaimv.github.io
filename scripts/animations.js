// js/animations.js

/**
 * Inicializa la animación Boutique de la Combi, Sol, Nubes y Palapa con Scroll
 */
export function initRoadAnimation() {
    
    const container = document.querySelector('.road-scene-container');
    // Validamos que existan los elementos clave
    if (!container || !document.querySelector('.van-element')) return;

    if (typeof anime === 'undefined') {
        console.warn('Anime.js no está cargado.');
        return;
    }

    // --- DEFINICIÓN DE ANIMACIONES (Pausadas) ---

    // 1. La Combi (Cruza toda la pantalla)
    let vanAnim = anime({
        targets: '.van-element',
        translateX: ['-20px', '105vw'], // Empieza fuera, termina fuera
        translateY: [
            { value: -1.5, duration: 600, easing: 'easeInOutSine' },
            { value: 0, duration: 600, easing: 'easeInOutSine' }
        ],
        loop: true,
        autoplay: false,
        duration: 10000,
        easing: 'linear'
    });

    // 2. El Sol (CORREGIDO: Sube mucho más alto)
    let sunAnim = anime({
        targets: '.sun-element',
        // Sube 400px para asegurarse de salir del contenedor por arriba
        translateY: ['0px', '-400px'], 
        autoplay: false,
        duration: 10000,
        easing: 'easeOutQuad'
    });

    // 3. Las Nubes (Derivan lentamente hacia la izquierda)
    let cloudsAnim = anime({
        targets: '.cloud-element',
        translateX: ['0%', '-30%'], // Movimiento sutil
        autoplay: false,
        duration: 10000,
        easing: 'linear'
    });

   
    // --- LÓGICA DEL SCROLL ---
    function onScroll() {
        const windowHeight = window.innerHeight;
        const rect = container.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Cálculo del progreso del scroll
        let percent = (windowHeight - elementTop + 100) / (windowHeight + elementHeight + 300);
        percent = Math.min(Math.max(percent, 0), 1);

        // Sincronizamos TODAS las animaciones
        vanAnim.seek(vanAnim.duration * percent);
        sunAnim.seek(sunAnim.duration * percent);
        cloudsAnim.seek(cloudsAnim.duration * percent);

    }

    window.addEventListener('scroll', onScroll);
    setTimeout(onScroll, 100); // Inicialización
}