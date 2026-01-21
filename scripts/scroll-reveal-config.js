export function initScrollReveal() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn("ScrollReveal library not loaded.");
        return;
    }
    
    // Configuración base
    const sr = ScrollReveal({
        duration: 1000, 
        distance: '30px', 
        easing: 'cubic-bezier(0.5, 0, 0, 1)', 
        mobile: true,
        viewFactor: 0.1 
    });

    // Elementos generales
    sr.reveal('.reveal', { 
        origin: 'bottom', 
        interval: 100,
        cleanup: true 
    }); 
    
    sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });

    // Imagen y Texto lateral (Más lentos para impacto visual)
    sr.reveal('.reveal-left', { 
        origin: 'left', 
        distance: '60px', 
        duration: 2000, 
        delay: 0 
    });

    sr.reveal('.reveal-right', { 
        origin: 'right', 
        distance: '60px',
        duration: 2000, 
        delay: 200 
    });

    /* --- NUEVO: TARJETAS DE 3 PASOS (.guide-step) --- */
    // Esto crea el efecto cascada (1, 2, 3) subiendo desde abajo
    sr.reveal('.guide-step', {
        origin: 'bottom',     // Vienen de abajo (se ve mejor en columnas)
        distance: '40px',
        duration: 1200,       // Velocidad elegante
        interval: 200,        // CLAVE: Espera 200ms entre cada tarjeta
        viewFactor: 0.2       // Se activa cuando ves el 20% de la tarjeta
    });
    
    // Si usas .reveal-up-stagger en otros lados, déjalo, si no, puedes borrarlo.
    sr.reveal('.reveal-up-stagger', {
        origin: 'bottom',
        distance: '30px',
        duration: 1500,
        delay: 200,    
        interval: 300, 
        viewFactor: 0.1,
        reset: false    
    });
}