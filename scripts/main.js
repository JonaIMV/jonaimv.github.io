import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties } from './properties.js';
import { showLastViewedProperty } from './property-modal.js';
import { loadExchangeRates } from './exchange-rates.js';
import { initContactForm } from './form-handler.js';
import { initThankYouPage } from './thankyou.js';
import { displayReview, initReviews } from './reviews.js';
import { initCookieConsent } from './cookie-consent.js';

// AGREGADO: Importar la futura lógica de filtrado
import { initPropertyFilters } from './property-filters.js'; 


window.displayReview = displayReview;


document.addEventListener("DOMContentLoaded", async () => {
    initMenuToggle();
    highlightCurrentPage();
    initCookieConsent(); 


    // La inicialización del Hero Slider solo se llama en la página principal (index.html)
    // Usamos una verificación condicional para evitar errores en for-sale.html
    if (document.querySelector('.hero-slider')) {
        // Debes reimportar initHeroSlider si lo necesitas en index.html,
        // pero lo quitamos aquí para la limpieza de for-sale.html. 
        // Si el archivo principal es para ambas páginas, podemos añadir la verificación aquí:
        // initHeroSlider(); 
    }
    
    // Inicialización de la lógica de reviews (solo en index.html)
    if (document.getElementById('client-portraits')) {
        initReviews();
    }


    // Lógica de Tasa de Cambio (si los elementos existen)
    if (
        document.getElementById('usd-rate') ||
        document.getElementById('eur-rate') ||
        document.getElementById('cad-rate')
    ) {
        loadExchangeRates();
    }

    initContactForm();

    if (window.location.pathname.endsWith('thankyou.html')) {
        initThankYouPage();
    }

    // 🔑 LÓGICA CLAVE DE PROPIEDADES Y FILTROS 🔑
    const propertiesContainer = document.getElementById('properties-container');
    if (propertiesContainer) {
        // 1. Cargamos las propiedades. Ya no llamamos a initPropertyModal.
        const allProperties = await loadProperties('properties-container', 'data/forSale.json');

        // 2. Pasamos los datos cargados al nuevo módulo de filtrado y ordenamiento
        if (allProperties) {
            initPropertyFilters(allProperties);
        }
    }

    // Última Propiedad Vista
    const lastViewedContainer = document.getElementById('lastViewedPropertyContainer');
    if (lastViewedContainer) {
        showLastViewedProperty();
    }

    // Lógica del Footer
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = `Last Modified: ${document.lastModified}`;
    }

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});