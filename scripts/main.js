

import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties, renderProperties, renderPropertyDetail, initMap } from './properties.js'; // <--- CAMBIO 1: Agregamos initMap
import { loadExchangeRates } from './exchange-rates.js';
import { initCookieConsent } from './cookie-consent.js';
import { initHeaderScroll } from './scroll.js';
import { initScrollReveal } from './scroll-reveal-config.js';
import { initRoiCalculator } from './roi-calculator.js'; 
import { initPropertyFilters } from './property-filters.js';
import { initFeaturedModal } from './featured-modal.js';
import { initLightbox } from './lightbox.js';
import { initWhatsApp } from './whatsapp.js';
import { initFAQ } from './faq.js';
import { initTestimonialMarquee } from './marquee.js';
import { initFooter } from './footer.js';   

function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null;
}

document.addEventListener("DOMContentLoaded", async () => {
    
    // 1. Inicializaciones Globales y Estacionales
    initMenuToggle();
    highlightCurrentPage();
    initCookieConsent(); 
    initHeaderScroll();
    initScrollReveal();
    initWhatsApp();
    initLightbox();
    initFAQ();
    initFooter();
    // Si estamos en la Home Page (index.html)
    if (document.getElementById('testimonial-track')) {
        
        // 3. CAMBIO: Llamar a la nueva función en lugar de initReviews()
        initTestimonialMarquee(); 
        
        initFeaturedModal();
        
        if (document.getElementById('calculate-roi-home-btn')) {
            initRoiCalculatorHome();
        }
    }
    // Si estamos en la Contact Page
    if (document.getElementById('calculate-roi-btn')) { 
        initRoiCalculator(); 
    }
    
    if (document.getElementById('usd-rate')) { 
        loadExchangeRates();
    }
    
    const propertiesContainer = document.getElementById('properties-container');
    const mainElement = document.querySelector('main');
    const propertyId = getPropertyIdFromUrl();
    
    // 2. LÓGICA DE PROPIEDADES, FILTROS Y RUTEO DINÁMICO
    if (window.location.pathname.includes('for-sale.html') || propertyId) { 
        
        const allProperties = await loadProperties(null, 'data/forSale.json'); // Asegúrate que la ruta al JSON sea correcta

        if (allProperties.length > 0) {
            
            if (propertyId && mainElement) { // PÁGINA DE DETALLE
                const property = allProperties.find(p => p.id === propertyId);
                
                if (property) {
                    mainElement.innerHTML = ''; 
                    renderPropertyDetail(property, mainElement);
                } else {
                    mainElement.innerHTML = `<h1>Propiedad no encontrada. ID: ${propertyId}</h1>`;
                }
            
            } else if (propertiesContainer) { // PÁGINA DE LISTADO (AQUÍ VA EL MAPA)
                renderProperties(allProperties, propertiesContainer); 
                initPropertyFilters(allProperties);
                
                // 2. INICIALIZAMOS EL MAPA AQUÍ:
                initMap(allProperties); // <--- CAMBIO 2: Inicializamos el mapa con las propiedades cargadas
            }
        }
    }
    if (typeof ScrollReveal !== 'undefined') {
        initScrollReveal(); 
        ScrollReveal().sync();
    }
    
});