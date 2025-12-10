import { loadProperties } from './properties.js'; 

// --- Funciones Auxiliares ---

function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    return id ? parseInt(id) : null; 
}

/**
 * Convierte URL de YouTube a formato embed
 */
function getEmbedUrl(url) {
    if (!url || url.includes('/embed/')) return url;
    const videoId = url.split('v=')[1];
    if (videoId) {
        const cleanId = videoId.split('&')[0]; 
        return `https://www.youtube.com/embed/${cleanId}`;
    }
    return url;
}

/**
 * Genera la estructura HTML para la galería tipo Mosaico (Bento Grid)
 */
function generateBentoGalleryHtml(photos, title) {
    if (!photos || photos.length === 0) return '';

    // 1. Contenedor Principal
    let html = '<div class="bento-grid-container">';

    // 2. Imagen Principal (Índice 0)
    html += `
        <div class="bento-main">
            <img src="${photos[0]}" alt="Vista principal de ${title}">
        </div>
    `;

    // 3. Imágenes Secundarias (Índices 1 al 4)
    if (photos.length > 1) {
        html += '<div class="bento-sub">';
        
        // Fotos 1, 2, 3 (Simples)
        for (let i = 1; i < Math.min(photos.length, 4); i++) {
            html += `<img src="${photos[i]}" alt="Foto ${i+1} de ${title}">`;
        }

        // Foto 4 (Con Overlay "Ver más" si hay más fotos, o simple si es la última)
        if (photos.length >= 5) {
            html += `
                <div class="view-all-wrapper">
                    <img src="${photos[4]}" alt="Ver más fotos">
                    <div class="view-all-overlay">
                        <span>+ Ver todas las fotos</span>
                    </div>
                </div>
            `;
        } else if (photos.length === 5) {
             // Caso raro donde hay exactamente 5 fotos, mostramos la 5ta normal
             html += `<img src="${photos[4]}" alt="Foto 5 de ${title}">`;
        }
        
        html += '</div>'; // Cierre bento-sub
    }

    // 4. Imágenes Ocultas (Índice 5 en adelante) para el Lightbox
    if (photos.length > 5) {
        html += '<div class="hidden-gallery-photos" style="display: none;">';
        for (let i = 5; i < photos.length; i++) {
            html += `<img src="${photos[i]}" alt="Foto ${i+1} oculta">`;
        }
        html += '</div>';
    }

    html += '</div>'; // Cierre container
    return html;
}

/**
 * Genera el HTML de la página de detalle
 */
function generateDetailHtml(property) {
    
    // 1. Galería de Fotos (Estilo Mosaico)
    const galleryHtml = generateBentoGalleryHtml(property.galleryPhotos, property.title);

    // 2. Features y Amenities
    const featuresList = [
        ...(property.features || []), 
        ...(property.amenities || [])
    ];
    const featuresHtml = featuresList.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');

    // 3. Video Promocional de YouTube
    const embedUrl = getEmbedUrl(property.youtubeUrl);
    const youtubeHtml = embedUrl ? `
        <section class="video-section reveal-bottom">
            <h2>Video Promocional</h2>
            <div class="youtube-iframe-wrapper">
                <iframe 
                    src="${embedUrl}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen 
                    title="Video de ${property.title}">
                </iframe>
            </div>
        </section>
    ` : '';
    
    // 4. Recorrido Virtual 360°
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
    
    // 5. Mapa
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

            ${tourHtml}
            ${mapHtml}
        </article>
    `;
}

// --- Función Principal de Carga ---

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
    
    // Actualizar Título de la Pestaña
    document.title = `${property.title} | TuCasa Caribe Realty`;

    // Inyectar HTML
    container.innerHTML = generateDetailHtml(property);
    
    // Actualizar Botón de Contacto
    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) {
        contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}&price=${encodeURIComponent(property.price)}`;
    }
    
    // Sincronizar Animaciones
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().sync(); 
    }

    // 🚨 Forzar traducción de Weglot para contenido dinámico 🚨
    if (typeof Weglot !== 'undefined') {
        setTimeout(() => {
            Weglot.translate(container);
        }, 500);
    }
}

// Ejecutar
loadPropertyDetails();