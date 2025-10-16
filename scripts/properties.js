// properties.js

/**
 * Función para renderizar el contenido HTML de una lista de propiedades.
 * @param {Array<Object>} propertiesArray - El array de objetos de propiedades.
 * @param {HTMLElement} container - El contenedor donde se inyectarán las tarjetas.
 */
function renderProperties(propertiesArray, container) {
    if (!container) return;
    container.innerHTML = ''; 

    propertiesArray.forEach(prop => {
        // Lógica condicional para el botón de Tour Virtual
        const tourButtonHtml = prop.virtualTourUrl 
            ? `<a href="${prop.virtualTourUrl}" target="_blank" rel="noopener noreferrer" class="btn-tour-trigger">Tour Virtual 360°</a>`
            : `<button class="btn-tour-trigger disabled" disabled>Tour No Disponible</button>`;

        const card = document.createElement('div');
        card.classList.add('property-card');
        // Usamos el ID para construir el enlace de detalle
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
 * Renderiza la vista detallada de una propiedad específica en el elemento <main>.
 * @param {object} property - El objeto de la propiedad con datos extendidos.
 * @param {HTMLElement} mainContainer - El elemento <main> donde se inyectará el HTML.
 */
function renderPropertyDetail(property, mainContainer) {
    if (!mainContainer) return;

    // Actualiza el título del documento para SEO
    document.title = `${property.title} | Detalles | TuCasa Caribe Realty`;

    // 1. Manejo de fotos de la galería
    const photosHtml = (property.galleryPhotos || []).map(photo => 
        `<img src="${photo}" alt="Galería de ${property.title}" loading="lazy">`
    ).join('');

    // 2. Manejo de features y amenities
    const featuresList = [
        ...(property.features || []), 
        ...(property.amenities || [])
    ];
    const featuresHtml = featuresList.map(item => `<li>${item}</li>`).join('');

    // 3. Generación del HTML de la "página" de detalle
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
    
    // Opcional: Re-inicializar ScrollReveal para que las animaciones funcionen en el contenido dinámico
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().sync(); 
    }
}

/**
 * Carga las propiedades del JSON y las renderiza inicialmente.
 * Retorna el array de propiedades.
 */
export async function loadProperties(containerId, jsonUrl) {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const properties = await response.json();
        const container = document.getElementById(containerId);
        
        // Solo renderiza si el contenedor existe (la lógica de ruteo lo manejará)
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