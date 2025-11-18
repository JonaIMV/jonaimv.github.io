// main.js

import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties, renderProperties, renderPropertyDetail } from './properties.js'; 
import { showLastViewedProperty } from './property-modal.js';
import { loadExchangeRates } from './exchange-rates.js';
import { initContactForm } from './form-handler.js';
import { displayReview, initReviews } from './reviews.js';
import { initCookieConsent } from './cookie-consent.js';
import { initHeaderScroll } from './scroll.js';
import { initScrollReveal } from './scroll-reveal-config.js';
import { initRoiCalculator } from './roi-calculator.js'; 
import { initPropertyFilters } from './property-filters.js';
import { determineAndApplySeason } from './seasonal-theme.js';


window.displayReview = displayReview;

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
    determineAndApplySeason();
    
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
    
    
    //  LÓGICA DE PROPIEDADES, FILTROS Y RUTEO DINÁMICO 
    const propertiesContainer = document.getElementById('properties-container');
    const mainElement = document.querySelector('main');
    const propertyId = getPropertyIdFromUrl();

    
    if (mainElement && (window.location.pathname.includes('for-sale.html') || propertyId)) {
        
        
        const allProperties = await loadProperties(null, 'data/forSale.json');

        if (allProperties.length > 0) {
            if (propertyId) {
                
                const property = allProperties.find(p => p.id === propertyId);
                
                
                mainElement.innerHTML = ''; 

                if (property) {
                    renderPropertyDetail(property, mainElement);
                } else {
                    mainElement.innerHTML = `<h1>Propiedad no encontrada. ID: ${propertyId}</h1>`;
                    document.title = 'Error 404 | TuCasa Caribe Realty';
                }
                
            } else if (propertiesContainer) {
                
                
                
                renderProperties(allProperties, propertiesContainer); 

                
                initPropertyFilters(allProperties);
            }
        } else if (propertiesContainer) {
            propertiesContainer.innerHTML = '<p>Lo sentimos, no hay propiedades disponibles en este momento.</p>';
        }
    }

   
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