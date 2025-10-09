// La función initPropertyModal ahora solo tiene una función de inicialización.
// Su uso principal ya NO es agregar el listener a las tarjetas, sino configurar
// el modal si fuera necesario. 
export function initPropertyModal(properties) {
    // ⚠️ Importante: Eliminamos el document.querySelectorAll('.property-card').forEach(...)
    // y el listener document.querySelector('.properties-grid').addEventListener('click', ...)
    // para evitar que el clic en la tarjeta abra el modal o el tour en miniatura.

    // Si tuvieras un botón de "Ver Detalles" (que abre el modal con detalles y NO el tour), 
    // su lógica se añadiría aquí. 
    
    // Por ahora, esta función queda vacía o se enfoca en otras inicializaciones
    // que requieran los datos de 'properties'.
    
    // Ejemplo de cómo podrías inicializar un botón de "Ver Detalles" si lo tuvieras:
    // document.querySelectorAll('.btn-details').forEach(button => {
    //     button.addEventListener('click', (e) => {
    //          // ... lógica para mostrar el modal con detalles de la propiedad
    //     });
    // });
}


export function showLastViewedProperty() {
    // ... (Tu función showLastViewedProperty permanece sin cambios) ...
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