// scripts/puerto-morelos-360.js

// Importamos tu función existente de API y la NUEVA función del mapa
import { loadProperties } from './api.js'; 
import { initToursMap } from './map.js';

export async function initPuertoMorelos360() {
    const container = document.getElementById('tours-grid');
    if (!container) return; // Si no estamos en la página de tours, no hace nada

    // ¡Reciclamos tu función! Le pasamos null al contenedor y la ruta de tu nuevo JSON
    const toursData = await loadProperties(null, 'data/tours.json'); 
    
    if (!toursData || toursData.length === 0) return;

    // 1. Renderizar tarjetas
    container.innerHTML = toursData.map(tour => `
        <div class="tour-card">
            <img src="${tour.image}" alt="${tour.title}" class="tour-cover" loading="lazy">
            <div class="tour-overlay">
                <div class="tour-category">
                    <i class="fas fa-map-marker-alt" data-wg-notranslate></i> ${tour.category}
                </div>
                <h3 class="tour-title">${tour.title}</h3>
                <button class="btn-explore" data-url="${tour.tourUrl}">
                    Explorar Tour <i class="fas fa-arrow-right" data-wg-notranslate></i>
                </button>
            </div>
        </div>
    `).join('');

    // 2. Inicializar Mapa con la función adaptada
    initToursMap(toursData);

    // 3. Inicializar el modal inmersivo
    setupTourModal();
}

function setupTourModal() {
    const modal = document.getElementById('tourModal');
    const iframe = document.getElementById('tourIframe');
    const toursGrid = document.getElementById('tours-grid');

    if (!modal || !toursGrid) return;

    toursGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-explore');
        if (btn) {
            iframe.src = btn.getAttribute('data-url');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            if (typeof gtag === 'function') {
                gtag('event', 'abrir_tour_360', { 'lugar': btn.previousElementSibling.textContent });
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-tour-btn') || e.target === modal) {
            modal.style.display = 'none';
            iframe.src = ''; 
            document.body.style.overflow = '';
        }
    });
}