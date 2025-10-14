import { initMenuToggle } from './menuToggle.js';
import { highlightCurrentPage } from './wayFinding.js';
import { loadProperties } from './properties.js';
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


document.addEventListener("DOMContentLoaded", async () => {
    initMenuToggle();
    highlightCurrentPage();
    initCookieConsent(); 
    initHeaderScroll();
    initScrollReveal();
    initRoiCalculator();

    
    if (document.querySelector('.hero-slider')) {
       
    }
    
    
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