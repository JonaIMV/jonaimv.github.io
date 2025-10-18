import { renderProperties } from './properties.js'; 

let allProperties = [];
const containerId = 'properties-container';


function getFilteredAndSortedProperties() {
    const sortBy = document.getElementById('sort-by').value;
    const filterType = document.getElementById('filter-type').value;

    let filteredProperties = [...allProperties]; 

    
    if (filterType !== 'all') {
        filteredProperties = filteredProperties.filter(prop => 
            prop.type && prop.type.toLowerCase() === filterType.toLowerCase()
        );
    }

 
    filteredProperties.sort((a, b) => {
        if (sortBy === 'name-asc') {
            return a.title.localeCompare(b.title);
        }

        
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