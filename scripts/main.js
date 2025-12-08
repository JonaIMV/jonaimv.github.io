

import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties, renderProperties, renderPropertyDetail } from './properties.js';

import { loadExchangeRates } from './exchange-rates.js';

import { displayReview, initReviews } from './reviews.js';
import { initCookieConsent } from './cookie-consent.js';
import { initHeaderScroll } from './scroll.js';
import { initScrollReveal } from './scroll-reveal-config.js';
import { initRoiCalculator } from './roi-calculator.js'; // Contact Page ROI
import { initPropertyFilters } from './property-filters.js';
import { determineAndApplySeason } from './seasonal-theme.js';
import { initFeaturedModal } from './featured-modal.js';
import { initRoiCalculatorHome } from './initRoiCalculatorHome.js'; // Homepage ROI
 


window.displayReview = displayReview;

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
    determineAndApplySeason();
    
    // Si estamos en la Home Page (index.html)
    if (document.getElementById('client-portraits')) {
        initReviews();
        initFeaturedModal();
        
        // INTEGRACIÓN SEGURA DE ROI HOME 
        if (document.getElementById('calculate-roi-home-btn')) {
            initRoiCalculatorHome(); // Solo se inicializa si el botón existe
        }
    }

    // Si estamos en la Contact Page (Calculadora de Contacto y Exchange Rates)
    if (document.getElementById('calculate-roi-btn')) { // Botón principal de ROI en Contacto
        initRoiCalculator(); 
    }
    
    if (document.getElementById('usd-rate')) { // Indicador de que estamos en una página con herramientas
        loadExchangeRates();
    }
    
    
    const propertiesContainer = document.getElementById('properties-container');
    const mainElement = document.querySelector('main');
    const propertyId = getPropertyIdFromUrl();
    
    // 2. LÓGICA DE PROPIEDADES, FILTROS Y RUTEO DINÁMICO
    if (window.location.pathname.includes('for-sale.html') || propertyId) { 
        
        const allProperties = await loadProperties(null, 'data/forSale.json');

        if (allProperties.length > 0) {
            
            if (propertyId && mainElement) { // PÁGINA DE DETALLE
                const property = allProperties.find(p => p.id === propertyId);
                
                if (property) {
                    mainElement.innerHTML = ''; 
                    renderPropertyDetail(property, mainElement);
                } else {
                    mainElement.innerHTML = `<h1>Propiedad no encontrada. ID: ${propertyId}</h1>`;
                }
            
            } else if (propertiesContainer) { // PÁGINA DE LISTADO
                renderProperties(allProperties, propertiesContainer); 
                initPropertyFilters(allProperties);
            }
        }
    }
    
});