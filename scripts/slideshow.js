// slideshow.js

export function initSlideshow() {
    // Buscamos todas las imágenes dentro del contenedor
    const slides = document.querySelectorAll('.image-slideshow .slide');
    
    // Si no estamos en la página que tiene el slideshow, detenemos la función
    if (slides.length === 0) return; 
    
    let currentSlide = 0;

    // Función que se encarga de hacer la transición
    const nextSlide = () => {
        // Oculta la imagen actual
        slides[currentSlide].classList.remove('active');
        
        // Calcula cuál es la siguiente (si llega al final, vuelve a 0)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Muestra la nueva imagen
        slides[currentSlide].classList.add('active');
    };

    // Ejecuta la transición cada 4 segundos (4000 milisegundos)
    setInterval(nextSlide, 4000);
}