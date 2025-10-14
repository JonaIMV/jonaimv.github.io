/**
 * Controla el cambio de estilo del header al hacer scroll.
 */
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    // Define cuántos píxeles debe bajar el usuario para aplicar el cambio
    const scrollThreshold = 50; 

    // Comprueba la posición vertical del scroll
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/**
 * Inicializa los listeners de scroll.
 */
export function initHeaderScroll() {
    // Ejecutar una vez al cargar para establecer el estado inicial
    handleHeaderScroll(); 
    
    // Ejecutar cada vez que el usuario hace scroll
    window.addEventListener('scroll', handleHeaderScroll);
}