

// main.js - VERSIÓN LIMPIA Y MODULAR

// 1. Nuevos Módulos de Propiedades
import { loadProperties } from './api.js';
import { renderProperties, renderPropertyDetail } from './render.js';
import { initMap } from './map.js';

// 2. Módulos Generales (Sin cambios)
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

    // --- 2. Lógica Específica por Página ---
    
    // HOME PAGE
    if (document.getElementById('testimonial-track')) {
        initTestimonialMarquee(); 
        initFeaturedModal();
        if (document.getElementById('calculate-roi-home-btn')) {
            // Nota: Asegúrate de tener esta función o usar initRoiCalculator si es la misma
            if (typeof initRoiCalculatorHome !== 'undefined') initRoiCalculatorHome();
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