// Función reutilizable para renderizar tarjetas en un contenedor
function renderProperties(propertiesArray, container) {
    container.innerHTML = ''; 

    propertiesArray.forEach(prop => {
        // Lógica condicional para el botón de Tour Virtual
        const tourButton = prop.virtualTourUrl 
            ? `<div class="card-actions">
                <a href="${prop.virtualTourUrl}" target="_blank" rel="noopener noreferrer" class="btn-tour-trigger">
                    Tour Virtual 360°
                </a>
               </div>`
            : `<div class="card-actions">
                <button class="btn-tour-trigger disabled" disabled>
                    Tour No Disponible
                </button>
               </div>`;

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
    ${tourButton}
`;

        container.appendChild(card);
    });
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
        if (!container) {
            console.error(`Container with id ${containerId} not found.`);
            return;
        }

        // Renderiza la lista inicial completa
        renderProperties(properties, container); 

        return properties; 

    } catch (error) {
        console.error('Error loading properties:', error);
        return [];
    }
}

// Exportamos la función de renderizado para que property-filters.js pueda usarla
export { renderProperties };
