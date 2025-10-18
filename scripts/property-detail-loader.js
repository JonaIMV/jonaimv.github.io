import { loadProperties } from './properties.js'; 

function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); 
}

/**
 * Genera el HTML de la página de detalle usando TODAS las claves del JSON extendido.
 * @param {Object} property - El objeto de propiedad con todos los detalles.
 * @returns {string} HTML de la página de detalle.
 */
function generateDetailHtml(property) {
    
    const photosHtml = (property.galleryPhotos || []).map(photo => 
        `<img src="${photo}" alt="Galería de ${property.title}" loading="lazy" class="reveal-bottom">`
    ).join('');

   
    const featuresList = [
        ...(property.features || []), 
        ...(property.amenities || [])
    ];
    
    const featuresHtml = featuresList.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');

    const tourHtml = property.virtualTourUrl ? `
    
        <section class="location-section reveal-bottom">
            <h2>Recorrido Virtual 360°</h2>
            <div class="virtual-tour-iframe-wrapper">
                <iframe 
                    src="${property.virtualTourUrl}" 
                    frameborder="0" 
                    allowfullscreen 
                    allow="gyroscope; accelerometer; vr; webvr; fullscreen"
                    title="Tour Virtual de ${property.title}">
                </iframe>
            </div>
        </section>
    ` : '';
    
    const mapHtml = property.googleMapsEmbedUrl ? `
    
        <section class="location-section reveal-bottom">
            <h2>Ubicación en el Mapa</h2>
            <div class="map-container">
                <iframe 
                    src="${property.googleMapsEmbedUrl}" 
                    width="100%" 
                    height="400" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </section>
    ` : '';

    return `
    
        <article class="property-detail-article">
            <h1 class="reveal-bottom">${property.title}</h1>
            <p class="property-price-tag reveal-bottom">${property.price}</p>
            
            <section class="gallery-section reveal-bottom">
                <h2>Galería de Fotos</h2>
                <div class="photo-grid">${photosHtml}</div>
            </section>
            
            <section class="description-section reveal-bottom">
                <h2>Descripción Completa</h2>
                <p>${property.extendedDescription || property.description}</p> 
            </section>
            
            <section class="features-section reveal-bottom">
                <h2>Características y Amenidades</h2>
                <ul class="features-list">${featuresHtml}</ul>
            </section>

            ${tourHtml}
            ${mapHtml}
        </article>
    `;
}

async function loadPropertyDetails() {
    const container = document.getElementById('property-detail-container');
    const propertyId = getPropertyIdFromUrl();

    if (!container) return; 
    
    if (!propertyId) {
        container.innerHTML = "<h1>Error: Propiedad no especificada.</h1>";
        return;
    }
    
    
    const allProperties = await loadProperties(null, 'data/forSale.json'); 
    
    const property = allProperties.find(p => p.id === parseInt(propertyId));

    if (!property) {
        container.innerHTML = "<h1>Error: Propiedad no encontrada.</h1>";
        return;
    }
    
   
    document.title = `${property.title} | TuCasa Caribe Realty`;

   
    container.innerHTML = generateDetailHtml(property);
    
    
    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) {
        contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}&price=${encodeURIComponent(property.price)}`;
    }
    
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().sync(); 
    }
}


loadPropertyDetails();