import { renderProperties } from './render.js'; 

let allProperties = [];
const containerId = 'properties-container';


function getFilteredAndSortedProperties() {
    const sortBy = document.getElementById('sort-by').value;
    const filterType = document.getElementById('filter-type').value;

    let filteredProperties = [...allProperties]; 

    // --- NUEVA LÓGICA DE FILTRADO ---
    if (filterType !== 'all') {
        filteredProperties = filteredProperties.filter(prop => {
            // Normalizamos los valores del JSON por si no existen (evitar errores)
            const pType = prop.type ? prop.type.toLowerCase() : '';
            const pStatus = prop.status ? prop.status.toLowerCase() : '';
            
            // Si el cliente busca pre-venta, buscamos en 'type' y en 'status', con o sin guion
            if (filterType === 'pre-venta') {
                return pType.includes('preventa') || 
                       pType.includes('pre-venta') || 
                       pStatus.includes('preventa') || 
                       pStatus.includes('pre-venta');
            }
            
            // Para el resto (house, condo, land), filtramos normal por tipo
            return pType === filterType.toLowerCase();
        });
    }

    // --- LÓGICA DE ORDENAMIENTO (Intacta) ---
    filteredProperties.sort((a, b) => {
        if (sortBy === 'name-asc') {
            return a.title.localeCompare(b.title);
        }

        // Limpiamos el precio (quitamos signos de dólar y comas)
        const priceA = parseFloat(a.price.replace(/[$,]/g, ''));
        const priceB = parseFloat(b.price.replace(/[$,]/g, ''));

        if (sortBy === 'price-asc') {
            return priceA - priceB;
        } else if (sortBy === 'price-desc') {
            return priceB - priceA;
        }
        return 0; 
    });

    return filteredProperties;
}


 
function handleFilterChange() {
    const container = document.getElementById(containerId);
    if (container) {
        const propertiesToRender = getFilteredAndSortedProperties();
        renderProperties(propertiesToRender, container);
    }
}

/**
 * 3. Inicializa los controles de filtrado y ordenamiento.
 * @param {Array} properties 
 */
export function initPropertyFilters(properties) {
    allProperties = properties; 

    
    handleFilterChange(); 

    const sortByElement = document.getElementById('sort-by');
    const filterTypeElement = document.getElementById('filter-type');

    
    if (sortByElement) {
        sortByElement.addEventListener('change', handleFilterChange);
    }
    if (filterTypeElement) {
        filterTypeElement.addEventListener('change', handleFilterChange);
    }
}