import { loadProperties } from './api.js';
import { renderProperties, renderPropertyDetail } from './render.js';
import { initMap } from './map.js';
import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
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
import { initRoadAnimation } from './animations.js'; // <--- ¡Perfecto!

// Helper para obtener ID de la URL
function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null;
}

document.addEventListener("DOMContentLoaded", async () => {
    
    // --- 1. Inicializaciones Globales ---
    initMenuToggle();
    highlightCurrentPage();
    initCookieConsent(); 
    initHeaderScroll();
    initScrollReveal();
    initWhatsApp();
    initLightbox();
    initFAQ();
    initFooter();
    initRoadAnimation(); // <--- Aquí se ejecuta la animación (seguro porque tiene check interno)

    // --- 2. Lógica Específica por Página ---
    
    // HOME PAGE
    // Verificamos si existe algún elemento único del home para no ejecutar errores
    if (document.querySelector('.buying-process-sticky') || document.getElementById('testimonial-track')) {
        
        // A. Carrusel de Testimonios
        if (document.getElementById('testimonial-track')) {
            initTestimonialMarquee(); 
        }

        // B. Modal de Propiedad Destacada
        initFeaturedModal();

        // C. Calculadora ROI del Home (si existe)
        if (document.getElementById('calculate-roi-home-btn')) {
            if (typeof initRoiCalculatorHome !== 'undefined') initRoiCalculatorHome();
        }

        // D. Lógica Visual del Proceso de Compra (Highlight al hacer click)
        const processSteps = document.querySelectorAll('.process-step-item');
        if (processSteps.length > 0) {
            processSteps.forEach((step) => {
                step.addEventListener('click', () => {
                    // Quita la clase activa de todos y se la pone al que hiciste click
                    processSteps.forEach(s => s.classList.remove('active-step'));
                    step.classList.add('active-step');
                });
            });
        }
    }

    // CONTACT PAGE
    if (document.getElementById('calculate-roi-btn')) { 
        initRoiCalculator(); 
    }
    
    // WIDGET TIPO DE CAMBIO
    if (document.getElementById('usd-rate')) { 
        loadExchangeRates();
    }
    
    // --- 3. Lógica Principal de Propiedades (Carga, Mapa, Detalle) ---
    
    const propertiesContainer = document.getElementById('properties-container');
    const mainElement = document.querySelector('main');
    const propertyId = getPropertyIdFromUrl();
    
    // Detectamos si estamos en la sección de "Venta" o viendo un detalle
    if (window.location.pathname.includes('for-sale.html') || propertyId) { 
        
        // Carga de datos (desde api.js)
        const allProperties = await loadProperties(null, 'data/forSale.json');

        if (allProperties.length > 0) {
            
            if (propertyId && mainElement) { 
                // A. MODO DETALLE
                const property = allProperties.find(p => p.id === propertyId);
                
                if (property) {
                    mainElement.innerHTML = ''; 
                    renderPropertyDetail(property, mainElement); // (desde render.js)
                } else {
                    mainElement.innerHTML = `<h1>Propiedad no encontrada. ID: ${propertyId}</h1>`;
                }
            
            } else if (propertiesContainer) { 
                // B. MODO LISTADO
                renderProperties(allProperties, propertiesContainer); // (desde render.js)
                initPropertyFilters(allProperties);
                
                // Inicializar Mapa (desde map.js)
                initMap(allProperties); 
            }
        }
    }

    // Sincronizar animaciones al final
    if (typeof ScrollReveal !== 'undefined') {
        initScrollReveal(); 
        ScrollReveal().sync();
    }
    
});