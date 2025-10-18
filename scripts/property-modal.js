
export function initPropertyModal(properties) {
 
}


export function showLastViewedProperty() {
   
    const container = document.getElementById('lastViewedPropertyContainer');
    if (!container) return;

    const lastViewed = localStorage.getItem('lastViewedProperty');
    if (!lastViewed) {
        container.innerHTML = '<p>No property viewed yet.</p>';
        return;
    }

    const property = JSON.parse(lastViewed);

    
    const formUrl = `contact-us.html?title=${encodeURIComponent(property.title)}&price=${encodeURIComponent(property.price)}`;

    container.innerHTML = `
        <h2>Última Propiedad Vista</h2>
        <div class="last-viewed-property-card">
            <img src="${property.images[0] || ''}" alt="${property.title}" loading="lazy">
            <div class="last-viewed-property-info">
                <h3>${property.title}</h3>
                <p>${property.description.substring(0, 100)}...</p>
                <p class="price">${property.price || 'N/A'}</p>
                <a href="${formUrl}" class="buy-now-btn">¡Me Interesa!</a>
            </div>
        </div>
    `;
}