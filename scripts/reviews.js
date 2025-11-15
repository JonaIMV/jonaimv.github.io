/**
 * Muestra el testimonio seleccionado y aplica la animación.
 * Llama a Weglot para traducir el contenido recién inyectado.
 */
function displayReview(element) {
    const reviewText = element.dataset.review;
    const reviewerName = element.dataset.name;
    const reviewDisplay = document.getElementById('review-display');

    if (!reviewDisplay) {
        console.error('El contenedor de revisión (review-display) no se encontró.');
        return;
    }

    // 1. Aplicar animación (reinicio)
    reviewDisplay.classList.remove('animate');
    void reviewDisplay.offsetWidth; 
    reviewDisplay.classList.add('animate');
    
    // 2. Inyectar contenido (Texto original en data-attribute)
    reviewDisplay.querySelector('blockquote').textContent = `“${reviewText}”`;
    reviewDisplay.querySelector('.reviewer-name').textContent = `– ${reviewerName}`;
    
    // -------------------------------------------------------------
    // 🚨 INTEGRACIÓN WEGLOT 🚨
    // 3. Si Weglot está inicializado, fuerza la traducción del bloque inyectado.
    if (typeof Weglot !== 'undefined' && Weglot.initialized) {
        // Usa onContextChange para asegurarse de que la traducción se aplique correctamente
        Weglot.onContextChange(function() {
            // Llama a la función translate() de Weglot para traducir el elemento
            Weglot.translate(reviewDisplay); 
        });
    }
    // -------------------------------------------------------------
}

/**
 * Inicializa la sección de reviews con el primer testimonio.
 */
function initReviews() {
    const firstPortrait = document.querySelector('.client-portrait');
    if (firstPortrait) {
        // Carga el primer review al inicio de la página
        displayReview(firstPortrait);
    }
}


export { displayReview, initReviews };