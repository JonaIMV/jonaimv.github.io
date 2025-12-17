
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
            <div class="multilingual-content-wrapper reveal-bottom" data-wg-notranslate="true">

        
        <div class="lang-tabs-container">
            <span class="lang-label" style="font-weight:bold; margin-right:10px; color: var(--text-dark);">Idioma:</span>
            <div class="lang-tabs">
                
                <button class="lang-btn active" onclick="switchPropertyLanguage('es')">
                    <img src="https://flagcdn.com/w40/mx.png" alt="MX" class="flag-icon" style="width:20px; vertical-align:middle; margin-right:5px;">
                    Español
                </button>
                
                <button class="lang-btn" onclick="switchPropertyLanguage('en')">
                    <img src="https://flagcdn.com/w40/us.png" alt="US" class="flag-icon" style="width:20px; vertical-align:middle; margin-right:5px;">
                    English
                </button>
                
                <button class="lang-btn" onclick="switchPropertyLanguage('fr')">
                    <img src="https://flagcdn.com/w40/fr.png" alt="FR" class="flag-icon" style="width:20px; vertical-align:middle; margin-right:5px;">
                    Français
                </button>

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

window.switchPropertyLanguage = function(lang) {
    // 1. Ocultar todos los contenidos
    document.querySelectorAll('.lang-content').forEach(el => {
        el.classList.remove('active-content');
        el.style.display = 'none'; 
        el.style.opacity = 0;      
    });

    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    
    const selectedContent = document.getElementById(`content-${lang}`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        
        
        setTimeout(() => {
            selectedContent.classList.add('active-content'); 
            selectedContent.style.opacity = 1; // 
        }, 10);
    }

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
        // A. Lógica del Tour Virtual
        const tourButtonHtml = prop.virtualTourUrl 
            ? `<a href="${prop.virtualTourUrl}" target="_blank" class="btn-tour-trigger">Tour Virtual 360°</a>`
            : `<button class="btn-tour-trigger disabled" disabled>Tour No Disponible</button>`;

        // B. Lógica del Badge
        let badgeHtml = '';
        if (prop.status) {
            const statusClass = 'badge-' + prop.status.toLowerCase().replace(/\s+/g, '-');
            badgeHtml = `<span class="property-badge ${statusClass}">${prop.status}</span>`;
        } else if (prop.virtualTourUrl) {
            badgeHtml = `<span class="property-badge badge-tour"></span>`;
        }

        const card = document.createElement('div');
        card.classList.add('property-card');
        
        // C. HTML de la tarjeta CORREGIDO
        // 1. Agregamos la clase 'skeleton-loading' al div image-container
        // 2. La imagen inicia con opacidad 0
        // 3. El evento onload quita el skeleton y sube la opacidad a 1
        card.innerHTML = `
            <div class="image-container skeleton-loading" style="position: relative; overflow: hidden; min-height: 200px; background-color: #e0e0e0;">
                ${badgeHtml}
                <img 
                    src="${prop.image}" 
                    alt="${prop.alt}" 
                    loading="lazy" 
                    style="width:100%; display:block; opacity: 0; transition: opacity 0.5s ease-in-out;"
                    onload="this.style.opacity='1'; this.parentElement.classList.remove('skeleton-loading');"
                    onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'padding:20px; text-align:center;\'>Imagen no disponible</div>';"
                />
            </div>
            
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

    // 1. Título del documento
    document.title = `${property.title} | Detalles`;

    // 2. Render del HTML dinámico
    mainContainer.innerHTML = generateDetailHtml(property);

    // 3. Forzar a Weglot a ignorar el contenido inyectado
    if (window.Weglot) {
        Weglot.refresh();
    }

    // 4. Botón de contacto
    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) {
        contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}`;
    }

    // 5. ScrollReveal (re-sincronizar animaciones)
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
export function initMap(properties) {
    // Si no existe el div del mapa en el HTML, no hacemos nada
    if (!document.getElementById('map')) return;

    // Coordenadas iniciales (Centro de la Riviera Maya aprox.)
    const map = L.map('map').setView([20.75, -87.00], 9);

    // Capa del mapa (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const markers = [];

    // Loop para crear pines
    properties.forEach(prop => {
        // Solo creamos pin si la propiedad tiene lat y lng en el JSON
        if (prop.lat && prop.lng) {
            const marker = L.marker([prop.lat, prop.lng]).addTo(map);
            
            // Popup al hacer click en el pin
            marker.bindPopup(`
                <div style="text-align:center; min-width: 160px;">
                    <img src="${prop.image}" style="width:100%; height:80px; object-fit:cover; border-radius:4px; margin-bottom:5px;">
                    <h4 style="margin: 5px 0; font-size:14px;">${prop.title}</h4>
                    <span style="font-weight:bold; color:#2c3e50;">${prop.price}</span><br>
                    <a href="?id=${prop.id}" style="color: #007bff; font-size:12px;">Ver Propiedad</a>
                </div>
            `);
            markers.push(marker);
        }
    });

    // Auto-ajustar el zoom para ver todos los pines
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
    setTimeout(() => {
        map.invalidateSize();
    }, 500)
}