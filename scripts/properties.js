
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

/* --- properties.js --- */

// (Asumo que tus funciones generateBentoGalleryHtml y getEmbedUrl están definidas arriba o importadas en este archivo)

export function generateDetailHtml(property) {
    
    // 1. Galería
    const galleryHtml = generateBentoGalleryHtml(property.galleryPhotos, property.title);

    // --- PREPARACIÓN DE DATOS TRILINGÜES (ES / EN / FR) ---

    // A. Listas de Características (ES vs EN vs FR)
    // Asumimos que en tu JSON usas "_fr" para las propiedades en francés
    const featuresListES = [...(property.features || []), ...(property.amenities || [])];
    const featuresListEN = [...(property.features_en || []), ...(property.amenities_en || [])];
    const featuresListFR = [...(property.features_fr || []), ...(property.amenities_fr || [])]; 
    
    // Fallbacks: 
    // Si no hay inglés, usa español.
    const finalFeaturesEN = featuresListEN.length > 0 ? featuresListEN : featuresListES;
    // Si no hay francés, dejamos la lista vacía (o podrías poner featuresListEN si prefieres)
    const finalFeaturesFR = featuresListFR.length > 0 ? featuresListFR : [];

    // Generación de HTML (Los <li>)
    const featuresHtmlES = featuresListES.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');
    const featuresHtmlEN = finalFeaturesEN.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');
    const featuresHtmlFR = finalFeaturesFR.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');

    // B. Descripciones (ES vs EN vs FR)
    const descriptionES = property.extendedDescription || property.description;
    const descriptionEN = property.extendedDescription_en || property.description_en || "Description available soon.";
    const descriptionFR = property.extendedDescription_fr || property.description_fr || "Description à venir bientôt...";

    // ... AQUÍ SIGUE TU "return `...`" CON EL HTML QUE VIMOS ANTES ...
    // --- FIN PREPARACIÓN ---

    // 2. Video YouTube
    const embedUrl = getEmbedUrl(property.youtubeUrl);
    const youtubeHtml = embedUrl ? `
        <section class="video-section reveal-bottom">
            <h2>Video Promocional</h2>
            <div class="youtube-iframe-wrapper">
                <iframe src="${embedUrl}" frameborder="0" allowfullscreen title="Video"></iframe>
            </div>
        </section>
    ` : '';
    
    // 3. Mapa
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
            <div class="multilingual-content-wrapper reveal-bottom weglot-exclude" translate="no" style="pointer-events: auto;">
                        
                <div class="lang-tabs-container">
                    <span class="lang-label">Idioma / Language:</span>
                    <div class="lang-tabs">
                        <button class="lang-btn active" onclick="switchPropertyLanguage('es')">Español 🇲🇽</button>
                        <button class="lang-btn" onclick="switchPropertyLanguage('en')">English 🇺🇸</button>
                        <button class="lang-btn" onclick="switchPropertyLanguage('fr')">Français 🇫🇷</button>
                    </div>
                </div>

                <div id="content-es" class="lang-content active-content">
                    <section class="description-section">
                        <h2>Descripción Completa</h2>
                        <p>${descriptionES}</p> 
                    </section>
                    
                    <section class="features-section">
                        <h2>Características y Amenidades</h2>
                        <ul class="features-list">${featuresHtmlES}</ul>
                    </section>
                </div>

                <div id="content-en" class="lang-content">
                    <section class="description-section">
                        <h2>Full Description</h2>
                        <p>${descriptionEN}</p> 
                    </section>
                    
                    <section class="features-section">
                        <h2>Features & Amenities</h2>
                        <ul class="features-list">${featuresHtmlEN}</ul>
                    </section>
                </div>

                <div id="content-fr" class="lang-content">
                    <section class="description-section">
                        <h2>Description Complète</h2>
                        <p>${descriptionFR || "Description à venir..."}</p> 
                    </section>
                    
                    <section class="features-section">
                        <h2>Caractéristiques et Équipements</h2>
                        <ul class="features-list">${featuresHtmlFR || ""}</ul>
                    </section>
                </div>

            </div>
            ${mapHtml}
        </article>
        `;
        }

// --- FUNCIÓN GLOBAL PARA EL CAMBIO DE IDIOMA ---
// Al estar en un módulo, necesitamos asignarla a 'window' explícitamente
window.switchPropertyLanguage = function(lang) {
    // 1. Ocultar todos los contenidos
    document.querySelectorAll('.lang-content').forEach(el => {
        el.classList.remove('active-content');
        el.style.display = 'none'; // Mantenemos tu lógica de ocultar manual
        el.style.opacity = 0;      // Reseteamos opacidad
    });

    // 2. Desactivar todos los botones (quitar color)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Mostrar el contenido seleccionado
    const selectedContent = document.getElementById(`content-${lang}`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        
        // Pequeño retraso para permitir que el navegador procese el 'display: block' 
        // antes de cambiar la opacidad (necesario para la transición visual)
        setTimeout(() => {
            selectedContent.classList.add('active-content'); // Si usas clases CSS
            selectedContent.style.opacity = 1; // Tu animación manual
        }, 10);
    }

    // 4. Activar botón (CORREGIDO PARA 3 O MÁS IDIOMAS)
    // En lugar de adivinar el índice (0, 1...), buscamos exactamente el botón 
    // que tiene el onclick correspondiente a este idioma.
    const activeBtn = document.querySelector(`button[onclick="switchPropertyLanguage('${lang}')"]`);
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
};
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