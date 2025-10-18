
/**
 @param {Array<Object>} propertiesArray 
 * @param {HTMLElement} container 
 */
function renderProperties(propertiesArray, container) {
    if (!container) return;
    container.innerHTML = ''; 

    propertiesArray.forEach(prop => {
        
        const tourButtonHtml = prop.virtualTourUrl 
            ? `<a href="${prop.virtualTourUrl}" target="_blank" rel="noopener noreferrer" class="btn-tour-trigger">Tour Virtual 360°</a>`
            : `<button class="btn-tour-trigger disabled" disabled>Tour No Disponible</button>`;

        const card = document.createElement('div');
        card.classList.add('property-card');
       
        card.dataset.propId = prop.id; 

        card.innerHTML = `
            <img src="${prop.image}" alt="${prop.alt}" loading="lazy" />
            <div class="property-card-content">
                <h3>${prop.title}</h3> 
                <p>${prop.description}</p>
                <p class="price">${prop.price}</p>
                <p class="location">${prop.location}</p> 
            </div>
            <div class="card-actions-group">
                <a href="?id=${prop.id}" class="btn-detail-trigger">
                    Más detalles
                </a>
                ${tourButtonHtml}
            </div>
        `;

        container.appendChild(card);
    });
}

/**
 *
 * @param {object} property - 
 * @param {HTMLElement} mainContainer 
 */
function renderPropertyDetail(property, mainContainer) {
    if (!mainContainer) return;

    
    document.title = `${property.title} | Detalles | TuCasa Caribe Realty`;

    
    const photosHtml = (property.galleryPhotos || []).map(photo => 
        `<img src="${photo}" alt="Galería de ${property.title}" loading="lazy">`
    ).join('');

    
    const featuresList = [
        ...(property.features || []), 
        ...(property.amenities || [])
    ];
    const featuresHtml = featuresList.map(item => `<li>${item}</li>`).join('');

    
    mainContainer.innerHTML = `
        <article class="property-detail-page">
            <button class="back-button" onclick="window.location.href='for-sale.html'">← Volver al Listado</button>
            <h1 class="reveal">${property.title}</h1>
            <p class="property-price reveal">${property.price}</p>
            
            <section class="gallery reveal">
                <h2>Galería de Fotos</h2>
                <div class="photo-grid">${photosHtml}</div>
            </section>

            <section class="description-section reveal">
                <h2>Descripción Completa</h2>
                <p>${property.extendedDescription || property.description}</p> 
            </section>
            
            <section class="features-section reveal">
                <h2>Características y Amenidades</h2>
                <ul class="features-list">${featuresHtml}</ul>
            </section>
            
            <section class="location-section reveal">
                <h2>Ubicación</h2>
                <p>${property.location}</p>
                <div class="map-container">
                    <iframe 
                        src="${property.googleMapsEmbedUrl || ''}" 
                        width="100%" 
                        height="400" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy">
                    </iframe>
                </div>
            </section>
        </article>
    `;
    
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().sync(); 
    }
}


 
export async function loadProperties(containerId, jsonUrl) {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const properties = await response.json();
        const container = document.getElementById(containerId);
        
        
        if (container) {
            renderProperties(properties, container); 
        }

        return properties; 
    } catch (error) {
        console.error('Error loading properties:', error);
        return [];
    }
}

export { renderProperties, renderPropertyDetail };