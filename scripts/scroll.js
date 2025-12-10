export function initHeaderScroll() {
    // CAMBIO: Seleccionamos .navbar en lugar de header
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
}