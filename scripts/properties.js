
// --- 1. FUNCIONES AUXILIARES ---

function getEmbedUrl(url) {
    if (!url || url.includes('/embed/')) return url;
    const videoId = url.split('v=')[1];
    if (videoId) {
        const cleanId = videoId.split('&')[0]; 
        return `https://www.youtube.com/embed/${cleanId}`;
    }
    return url;
}

function generateBentoGalleryHtml(photos, title) {
    if (!photos || photos.length === 0) return '';

    let html = '<div class="bento-grid-container">';

    // 1. Imagen Principal
    html += `
        <div class="bento-main">
            <img src="${photos[0]}" alt="Vista principal">
        </div>
    `;

    // 2. Imágenes Secundarias
    if (photos.length > 1) {
        html += '<div class="bento-sub">';
        
        // Mostramos hasta 4 fotos en la columna derecha (índices 1, 2, 3, 4)
        const limit = Math.min(photos.length, 5); 

        for (let i = 1; i < limit; i++) {
            // Si es la última posición visible (índice 4) Y sobran fotos
            if (i === 4 && photos.length > 5) {
                const remaining = photos.length - 5; // Cuántas faltan
                html += `
                    <div class="view-all-wrapper">
                        <img src="${photos[i]}" alt="Foto extra">
                        <div class="view-all-overlay">
                            <span>+${remaining} fotos</span>
                        </div>
                    </div>
                `;
            } else {
                html += `<img src="${photos[i]}" alt="Foto ${i+1}">`;
            }
        }
        html += '</div>';
    }

    // 3. Imágenes Ocultas (Para el Lightbox)
    if (photos.length > 5) {
        html += '<div class="hidden-gallery-photos" style="display: none;">';
        for (let i = 5; i < photos.length; i++) {
            html += `<img src="${photos[i]}" alt="Foto oculta ${i+1}">`;
        }
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function generateDetailHtml(property) {
    // A. Galería Mosaico
    const galleryHtml = generateBentoGalleryHtml(property.galleryPhotos, property.title);

    // B. Features
    const featuresList = [...(property.features || []), ...(property.amenities || [])];
    const featuresHtml = featuresList.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');

    // C. Video YouTube
    const embedUrl = getEmbedUrl(property.youtubeUrl);
    const youtubeHtml = embedUrl ? `
        <section class="video-section reveal-bottom">
            <h2>Video Promocional</h2>
            <div class="youtube-iframe-wrapper">
                <iframe src="${embedUrl}" frameborder="0" allowfullscreen title="Video"></iframe>
            </div>
        </section>
    ` : '';
    
    // D. Mapa
    const mapHtml = property.googleMapsEmbedUrl ? `
        <section class="location-section reveal-bottom">
            <h2>Ubicación</h2>
            <div class="map-container">
                <iframe src="${property.googleMapsEmbedUrl}" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
    ` : '';

    return `
        <article class="property-detail-article">
            <button class="back-button" onclick="window.location.href='for-sale.html'">← Volver al Listado</button>
            <h1 class="reveal-bottom">${property.title}</h1>
            <p class="property-price-tag reveal-bottom">${property.price}</p>
            
            <section class="gallery-section reveal-bottom">
                <h2>Galería de Fotos</h2>
                ${galleryHtml}
            </section>
            
            ${youtubeHtml} 

            <section class="description-section reveal-bottom">
                <h2>Descripción Completa</h2>
                <p>${property.extendedDescription || property.description}</p> 
            </section>
            
            <section class="features-section reveal-bottom">
                <h2>Características y Amenidades</h2>
                <ul class="features-list">${featuresHtml}</ul>
            </section>

            ${mapHtml}
        </article>
    `;
}

// --- 2. FUNCIONES EXPORTADAS ---

export function renderProperties(propertiesArray, container) {
    if (!container) return;
    container.innerHTML = ''; 

    propertiesArray.forEach(prop => {
        const tourButtonHtml = prop.virtualTourUrl 
            ? `<a href="${prop.virtualTourUrl}" target="_blank" class="btn-tour-trigger">Tour Virtual 360°</a>`
            : `<button class="btn-tour-trigger disabled" disabled>Tour No Disponible</button>`;

        const card = document.createElement('div');
        card.classList.add('property-card');
        
        card.innerHTML = `
            <img src="${prop.image}" alt="${prop.alt}" loading="lazy" />
            <div class="property-card-content">
                <h3>${prop.title}</h3> 
                <p>${prop.description}</p>
                <p class="price">${prop.price}</p>
                <p class="location">${prop.location}</p> 
            </div>
            <div class="card-actions-group">
                <a href="?id=${prop.id}" class="btn-detail-trigger">Más detalles</a>
                ${tourButtonHtml}
            </div>
        `;
        container.appendChild(card);
    });

    if (typeof Weglot !== 'undefined') {
        setTimeout(() => { Weglot.translate(container); }, 1000);
    }
}

export function renderPropertyDetail(property, mainContainer) {
    if (!mainContainer) return;
    document.title = `${property.title} | Detalles`;
    mainContainer.innerHTML = generateDetailHtml(property);

    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) {
        contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}`;
    }
    
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().sync(); 
    }

    if (typeof Weglot !== 'undefined') {
        setTimeout(() => { Weglot.translate(mainContainer); }, 500);
    }
}

export async function loadProperties(containerId, jsonUrl) {
    const container = containerId ? document.getElementById(containerId) : null;
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Error HTTP');
        const properties = await response.json();
        if (container) renderProperties(properties, container); 
        return properties; 
    } catch (error) {
        console.error(error);
        if (container) container.innerHTML = '<p>Error cargando propiedades.</p>';
        return [];
    }
}