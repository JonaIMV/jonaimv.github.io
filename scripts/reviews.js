    // Función principal para mostrar el testimonio y la animación
function displayReview(element) {
    const reviewText = element.dataset.review;
    const reviewerName = element.dataset.name;
    const reviewDisplay = document.getElementById('review-display');

    if (!reviewDisplay) {
        console.error('El contenedor de revisión (review-display) no se encontró.');
        return;
    }

    // 1. Aplica y quita la clase de animación
    reviewDisplay.classList.remove('animate');
    // Forzamos un 'reflow' para que la animación se reinicie
    void reviewDisplay.offsetWidth; 
    reviewDisplay.classList.add('animate');

    // 2. Actualiza el contenido con el texto del cliente
    reviewDisplay.querySelector('blockquote').textContent = `“${reviewText}”`;
    reviewDisplay.querySelector('.reviewer-name').textContent = `– ${reviewerName}`;
}

// Inicializa la sección de reviews con el primer testimonio al cargar la página
function initReviews() {
    const firstPortrait = document.querySelector('.client-portrait');
    if (firstPortrait) {
        // Asegúrate de que la función displayReview esté disponible globalmente (opcional)
        // para que funcione el 'onclick' en el HTML.

        // NOTA: Para hacer el código más limpio y modular, es MEJOR 
        // remover el 'onclick' del HTML y agregar el Event Listener aquí,
        // pero por ahora, llamamos al primer review:
        displayReview(firstPortrait);
    }
}

// Exportamos la función principal o la función de inicialización
export { displayReview, initReviews };