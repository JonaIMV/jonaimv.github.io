import { renderProperties } from './properties.js'; // Importamos la función para re-renderizar

let allProperties = [];
const containerId = 'properties-container';

/**
 * 1. Aplica el filtrado y el ordenamiento.
 */
function getFilteredAndSortedProperties() {
    const sortBy = document.getElementById('sort-by').value;
    const filterType = document.getElementById('filter-type').value;

    let filteredProperties = [...allProperties]; // Clonar para no modificar el original

    // 1. FILTRADO (Por Tipo)
    if (filterType !== 'all') {
        filteredProperties = filteredProperties.filter(prop => 
            prop.type && prop.type.toLowerCase() === filterType.toLowerCase()
        );
    }

    // 2. ORDENAMIENTO (Por Precio o Nombre)
    filteredProperties.sort((a, b) => {
        if (sortBy === 'name-asc') {
            return a.title.localeCompare(b.title);
        }

        // Convertir precio a número (asumiendo formato "$XXX,XXX")
        const priceA = parseFloat(a.price.replace(/[$,]/g, ''));
        const priceB = parseFloat(b.price.replace(/[$,]/g, ''));

        if (sortBy === 'price-asc') {
            return priceA - priceB;
        } else if (sortBy === 'price-desc') {
            return priceB - priceA;
        }
        return 0; // Sin cambios si no hay orden
    });

    return filteredProperties;
}


/**
 * 2. Maneja el evento de cambio en los selectores.
 */
function handleFilterChange() {
    const container = document.getElementById(containerId);
    if (container) {
        const propertiesToRender = getFilteredAndSortedProperties();
        renderProperties(propertiesToRender, container);
    }
}

/**
 * 3. Inicializa los controles de filtrado y ordenamiento.
 * @param {Array} properties - El array completo de propiedades cargadas.
 */
export function initPropertyFilters(properties) {
    allProperties = properties; // Guarda la lista original

    // Ejecuta la primera renderización
    handleFilterChange(); 

    const sortByElement = document.getElementById('sort-by');
    const filterTypeElement = document.getElementById('filter-type');

    // Escucha eventos de cambio en los selectores
    if (sortByElement) {
        sortByElement.addEventListener('change', handleFilterChange);
    }
    if (filterTypeElement) {
        filterTypeElement.addEventListener('change', handleFilterChange);
    }
}