// main.js

import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties, renderProperties, renderPropertyDetail } from './properties.js'; 
import { showLastViewedProperty } from './property-modal.js';
import { loadExchangeRates } from './exchange-rates.js';
import { initContactForm } from './form-handler.js';
import { initThankYouPage } from './thankyou.js';
import { displayReview, initReviews } from './reviews.js';
import { initCookieConsent } from './cookie-consent.js';
import { initHeaderScroll } from './scroll.js';
import { initScrollReveal } from './scroll-reveal-config.js';
import { initRoiCalculator } from './roi-calculator.js'; 
import { initPropertyFilters } from './property-filters.js'; 


window.displayReview = displayReview;


/**
 * Obtiene el ID de la propiedad desde los parámetros de la URL (e.g., ?id=1).
 * Retorna el ID como un número o null si no existe.
 */
function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null;
}


document.addEventListener("DOMContentLoaded", async () => {
    initMenuToggle();
    highlightCurrentPage();
    initCookieConsent(); 
    initHeaderScroll();
    initScrollReveal();
    initRoiCalculator();

    // ... otros inicializadores ...
    if (document.getElementById('client-portraits')) {
        initReviews();
    }
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
    // ----------------------------
    
    // 🔑 LÓGICA DE PROPIEDADES, FILTROS Y RUTEO DINÁMICO 🔑
    const propertiesContainer = document.getElementById('properties-container');
    const mainElement = document.querySelector('main');
    const propertyId = getPropertyIdFromUrl();

    // Solo cargamos los datos si estamos en la página 'for-sale.html' o similar
    if (mainElement && (window.location.pathname.includes('for-sale.html') || propertyId)) {
        
        // 1. Cargamos el array completo de propiedades (lo necesitamos tanto para el listado como para el detalle)
        const allProperties = await loadProperties(null, 'data/forSale.json');

        if (allProperties.length > 0) {
            if (propertyId) {
                // RUTA DE DETALLE: Hay un ID en la URL
                const property = allProperties.find(p => p.id === propertyId);
                
                // Limpiamos el main para inyectar el detalle (asumiendo que <main> contiene el #properties-container)
                mainElement.innerHTML = ''; 

                if (property) {
                    renderPropertyDetail(property, mainElement);
                } else {
                    mainElement.innerHTML = `<h1>Propiedad no encontrada. ID: ${propertyId}</h1>`;
                    document.title = 'Error 404 | TuCasa Caribe Realty';
                }
                
            } else if (propertiesContainer) {
                // RUTA DE LISTADO: No hay ID en la URL, y el contenedor existe (mostramos el listado principal)
                
                // 1. Renderizamos el listado en el contenedor #properties-container
                renderProperties(allProperties, propertiesContainer); 

                // 2. Pasamos los datos cargados al módulo de filtrado y ordenamiento
                initPropertyFilters(allProperties);
            }
        } else if (propertiesContainer) {
            propertiesContainer.innerHTML = '<p>Lo sentimos, no hay propiedades disponibles en este momento.</p>';
        }
    }

    // Última Propiedad Vista (Esta funcionalidad debe ser revisada ya que antes usabas un modal)
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
    
    // Inicialización final de ScrollReveal
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.reveal', { 
            delay: 200,     
            duration: 800, 
            easing: 'ease-in-out',
            interval: 60,   
            origin: 'bottom',
            distance: '20px',
            mobile: true 
        });
    }
});