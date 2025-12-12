export function initScrollReveal() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn("ScrollReveal library not loaded.");
        return;
    }
    
    // Configuración base
    const sr = ScrollReveal({
        duration: 1000, 
        distance: '30px', 
        easing: 'cubic-bezier(0.5, 0, 0, 1)', // Curva suave y elegante
        mobile: true,
        viewFactor: 0.1 // CLAVE: Con que se asome un poquito, se activa
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
        distance: '60px', // Un poco más de recorrido
        duration: 2000,   // 2 segundos (Lento y elegante)
        delay: 0 
    });

    sr.reveal('.reveal-right', { 
        origin: 'right', 
        distance: '60px',
        duration: 2000,   // Igual que la izquierda
        delay: 200 
    });

    // LOS PASOS 1, 2, 3 (Tu problema anterior)
    sr.reveal('.reveal-up-stagger', {
        origin: 'bottom',
        distance: '30px',
        duration: 1500,  // 1.5 segundos (Antes tenías 600, esto es mucho más suave)
        delay: 200,    
        interval: 300,   // Más tiempo entre uno y otro para que se aprecie el "escalonado"
        viewFactor: 0.1, // CRÍTICO: Mantenemos esto para que no desaparezcan
        reset: false     // Aseguramos que no se escondan al subir
    });
}