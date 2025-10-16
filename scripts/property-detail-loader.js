import { loadProperties } from './properties.js'; // Necesitamos la función para cargar datos

function getPropertyIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id'); // Busca el valor de '?id=X'
}

/**
 * Función principal para cargar y renderizar los detalles de la propiedad.
 */
async function loadPropertyDetails() {
    const container = document.getElementById('property-detail-container');
    const propertyId = getPropertyIdFromUrl();

    if (!propertyId) {
        container.innerHTML = "<h1>Error: Propiedad no especificada.</h1>";
        return;
    }

    // Usamos loadProperties para obtener el array completo de propiedades
    // Nota: Necesitas modificar loadProperties para que no renderice al cargar
    const allProperties = await loadProperties(null, 'data/forSale.json'); 
    
    // Encontrar la propiedad específica por ID
    const property = allProperties.find(p => p.id === parseInt(propertyId));

    if (!property) {
        container.innerHTML = "<h1>Error: Propiedad no encontrada.</h1>";
        return;
    }

    // 🚨 3. RENDERIZAR LA PÁGINA 🚨
    container.innerHTML = generateDetailHtml(property);
    
    // Opcional: Actualizar el botón de contacto con el título de la propiedad
    const contactBtn = document.getElementById('detail-contact-btn');
    if (contactBtn) {
        contactBtn.href = `contact-us.html?title=${encodeURIComponent(property.title)}`;
    }
}

/**
 * Genera el HTML para mostrar los detalles y el Tour Virtual.
 */
function generateDetailHtml(property) {
    const tourHtml = property.virtualTourUrl ? `
        <div class="virtual-tour-display">
            <h2>Recorrido Virtual 360°</h2>
            <div class="virtual-tour-iframe-wrapper">
                <iframe src="${property.virtualTourUrl}" frameborder="0" allowfullscreen allow="vr; gyroscope; accelerometer" title="Tour Virtual de ${property.title}"></iframe>
            </div>
        </div>
    ` : '';

    return `
        <article class="property-detail-article">
            <h1>${property.title}</h1>
            <h2 class="price-tag">${property.price}</h2>
            <div class="detail-summary">
                <p>📍 ${property.location}</p>
                <p>🛏️ [Camas]</p>
                <p>🛁 [Baños]</p>
            </div>

            ${tourHtml}
            
            <div class="full-description">
                <h3>Descripción Completa</h3>
                <p>${property.description}</p>
                </div>
        </article>
    `;
}

loadPropertyDetails();