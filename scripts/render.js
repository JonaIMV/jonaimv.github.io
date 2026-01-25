// js/render.js

// --- FUNCIONES INTERNAS (Helpers) ---
// --- CONFIGURACIÓN CLOUDFLARE ---
const CDN_URL = "https://cdn.tucasacariberealty.com/";

// Función mágica para convertir rutas locales a Nube + WebP
function toCloudflare(path, isImage = true) {
    if (!path) return "";
    if (path.includes("http") || path.includes("https")) return path; // Si ya es un link web, no tocar

    // Si la ruta empieza con virtualtours, la mandamos a la nube
    if (path.includes("virtualtours/")) {
        let newPath = CDN_URL + path; // Agrega https://cdn.tucasacariberealty.com/
        
        // Solo si es imagen, cambiamos .jpg por .webp
        if (isImage && newPath.includes(".jpg")) {
            newPath = newPath.replace(".jpg", ".webp");
        }
        return newPath;
    }
    return path;
}

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
    
    // 1. Principal
    html += `<div class="bento-main"><img src="${photos[0]}" alt="Vista principal"></div>`;

    // 2. Secundarias
    if (photos.length > 1) {
        html += '<div class="bento-sub">';
        const limit = Math.min(photos.length, 5); 
        for (let i = 1; i < limit; i++) {
            if (i === 4 && photos.length > 5) {
                const remaining = photos.length - 5;
                html += `
                    <div class="view-all-wrapper">
                        <img src="${photos[i]}" alt="Foto extra">
                        <div class="view-all-overlay"><span>+${remaining} fotos</span></div>
                    </div>`;
            } else {
                html += `<img src="${photos[i]}" alt="Foto ${i+1}">`;
            }
        }
        html += '</div>';
    }
    
    // 3. Ocultas
    if (photos.length > 5) {
        html += '<div class="hidden-gallery-photos" style="display: none;">';
        for (let i = 5; i < photos.length; i++) html += `<img src="${photos[i]}" alt="Foto oculta">`;
        html += '</div>';
    }

    html += '</div>';
    return html;
}

function generateDetailHtml(property) {
    const galleryHtml = generateBentoGalleryHtml(property.galleryPhotos, property.title);
    
    // Listas trilingües
    const featuresES = [...(property.features || []), ...(property.amenities || [])];
    const featuresEN = [...(property.features_en || []), ...(property.amenities_en || [])];
    const featuresFR = [...(property.features_fr || []), ...(property.amenities_fr || [])];
    const finalFeaturesEN = featuresEN.length > 0 ? featuresEN : featuresES;
    const finalFeaturesFR = featuresFR.length > 0 ? featuresFR : [];

    const featuresHtmlES = featuresES.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');
    const featuresHtmlEN = finalFeaturesEN.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');
    const featuresHtmlFR = finalFeaturesFR.map(item => `<li class="reveal-bottom">✅ ${item}</li>`).join('');

    const descriptionES = property.extendedDescription || property.description;
    const descriptionEN = property.extendedDescription_en || property.description_en || "Description available soon.";
    const descriptionFR = property.extendedDescription_fr || property.description_fr || "Description à venir bientôt...";

    const embedUrl = getEmbedUrl(property.youtubeUrl);
    const youtubeHtml = embedUrl ? `<section class="video-section reveal-bottom"><h2>Video Promocional</h2><div class="youtube-iframe-wrapper"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe></div></section>` : '';
    const mapHtml = property.googleMapsEmbedUrl ? `<section class="location-section reveal-bottom"><h2>Ubicación</h2><div class="map-container"><iframe src="${property.googleMapsEmbedUrl}" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div></section>` : '';

    return `
        <article class="property-detail-article">
            <button class="back-button" onclick="window.location.href='for-sale.html'">← Volver al Listado</button>
            <h1 class="reveal-bottom">${property.title}</h1>
            <p class="property-price-tag reveal-bottom">${property.price}</p>
            
            <section class="gallery-section reveal-bottom"><h2>Galería de Fotos</h2>${galleryHtml}</section>
            
            ${youtubeHtml}
            
            <div class="multilingual-content-wrapper reveal-bottom" data-wg-notranslate="true">
                <div class="lang-tabs-container">
                    <span class="lang-label" style="font-weight:bold; margin-right:10px;">Idioma:</span>
                    <div class="lang-tabs">
                        <button class="lang-btn active" onclick="switchPropertyLanguage('es')"><img src="https://flagcdn.com/w40/mx.png" style="width:20px;"> Español</button>
                        <button class="lang-btn" onclick="switchPropertyLanguage('en')"><img src="https://flagcdn.com/w40/us.png" style="width:20px;"> English</button>
                        <button class="lang-btn" onclick="switchPropertyLanguage('fr')"><img src="https://flagcdn.com/w40/fr.png" style="width:20px;"> Français</button>
                    </div>
                </div>

                <div id="content-es" class="lang-content active-content">
                    <section><h2>Descripción Completa</h2><p>${descriptionES}</p></section>
                    <section><h2>Características</h2><ul class="features-list">${featuresHtmlES}</ul></section>
                </div>
                <div id="content-en" class="lang-content">
                    <section><h2>Full Description</h2><p>${descriptionEN}</p></section>
                    <section><h2>Features</h2><ul class="features-list">${featuresHtmlEN}</ul></section>
                </div>
                <div id="content-fr" class="lang-content">
                    <section><h2>Description Complète</h2><p>${descriptionFR}</p></section>
                    <section><h2>Caractéristiques</h2><ul class="features-list">${featuresHtmlFR}</ul></section>
                </div>
            </div>
            ${mapHtml}
        </article>
    `;
}

// --- FUNCIONES EXPORTADAS ---

export function renderProperties(propertiesArray, container) {
    if (!container) return;
    container.innerHTML = ''; 

    propertiesArray.forEach(prop => {
        const tourButtonHtml = prop.virtualTourUrl 
            ? `<a href="${prop.virtualTourUrl}" target="_blank" class="btn-tour-trigger">Tour Virtual 360°</a>`
            : `<button class="btn-tour-trigger disabled" disabled>Tour No Disponible</button>`;

        let badgeHtml = '';
        if (prop.status) {
            const statusClass = 'badge-' + prop.status.toLowerCase().replace(/\s+/g, '-');
            badgeHtml = `<span class="property-badge ${statusClass}">${prop.status}</span>`;
        } else if (prop.virtualTourUrl) {
            badgeHtml = `<span class="property-badge badge-tour"></span>`;
        }

        const card = document.createElement('div');
        card.className = 'property-card';
        card.setAttribute('data-id', prop.id);
        
        card.innerHTML = `
            <div class="image-container skeleton-loading" style="position: relative; overflow: hidden; min-height: 200px; background-color: #e0e0e0;">
                ${badgeHtml}
                <img src="${prop.image}" alt="${prop.alt || prop.title}" loading="lazy" style="width:100%; display:block; opacity: 0; transition: opacity 0.5s;" onload="this.style.opacity='1'; this.parentElement.classList.remove('skeleton-loading');" onerror="this.style.display='none';">
            </div>
            <div class="property-card-content">
                <h3>${prop.title}</h3> 
                <div class="features-row">
                    <div class="feature-item"><i class="fas fa-bed"></i> <span>${prop.bedrooms || 0} Hab.</span></div>
                    <div class="feature-item"><i class="fas fa-bath"></i> <span>${prop.bathrooms || 0} Baños</span></div>
                    <div class="feature-item"><i class="fas fa-ruler-combined"></i> <span>${prop.area || 0} m²</span></div>
                </div>
                <p class="price" style="font-weight: bold;">${prop.price}</p>
                <p class="location" style="font-size: 0.9rem; color: #666;"><i class="fas fa-map-marker-alt"></i> ${prop.location}</p> 
            </div>
            <div class="card-actions-group">
                <a href="?id=${prop.id}" class="btn-detail-trigger" onclick="if(typeof fbq !== 'undefined') fbq('track', 'ViewContent', {content_name: '${prop.title}', content_ids: ['${prop.id}']});">Más detalles</a>
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

    if (window.Weglot) Weglot.refresh();
    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}`;
    if (typeof ScrollReveal !== 'undefined') ScrollReveal().sync();
}

// Función global window (necesaria para el onclick del HTML generado)
window.switchPropertyLanguage = function(lang) {
    document.querySelectorAll('.lang-content').forEach(el => {
        el.classList.remove('active-content');
        el.style.display = 'none'; 
        el.style.opacity = 0;      
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    const selectedContent = document.getElementById(`content-${lang}`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        setTimeout(() => { selectedContent.classList.add('active-content'); selectedContent.style.opacity = 1; }, 10);
    }
    const activeBtn = document.querySelector(`button[onclick="switchPropertyLanguage('${lang}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
};