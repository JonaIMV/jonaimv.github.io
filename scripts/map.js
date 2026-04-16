
export function initMap(properties) {
    if (!document.getElementById('map')) return;

    // Verificar si Leaflet está cargado
    if (typeof L === 'undefined') {
        console.error("Leaflet (L) no está definido. Revisa tus imports en el HTML.");
        return;
    }

    const map = L.map('map').setView([20.85, -86.90], 10); // Coordenadas Puerto Morelos aprox

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markers = [];

    properties.forEach(prop => {
        if (prop.lat && prop.lng) {
            const marker = L.marker([prop.lat, prop.lng]).addTo(map);
            
            marker.bindPopup(`
                <div style="text-align:center; min-width: 160px;">
                    <img src="${prop.image}" style="width:100%; height:80px; object-fit:cover; border-radius:4px; margin-bottom:5px;">
                    <h4 style="margin: 5px 0; font-size:14px;">${prop.title}</h4>
                    <span style="font-weight:bold; color:#2c3e50;">${prop.price}</span><br>
                    
                    <a href="?id=${prop.id}" style="color: #007bff; font-size:12px;" onclick="gtag('event', 'clic_mapa_propiedad', { 'nombre_propiedad': '${prop.title}' }); if(typeof fbq !== 'undefined') fbq('track', 'ViewContent', {content_name: '${prop.title}', content_ids: ['${prop.id}']});">Ver Propiedad</a>
                </div>
            `);
            markers.push(marker);
        }
    });

    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
    
    // Fix para que el mapa cargue bien si estaba oculto
    setTimeout(() => { map.invalidateSize(); }, 500);
}
export function initToursMap(tours) {
    if (!document.getElementById('map')) return;

    if (typeof L === 'undefined') {
        console.error("Leaflet (L) no está definido.");
        return;
    }

    const map = L.map('map').setView([20.85, -86.90], 13); // Zoom un poco más cercano

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markers = [];

    tours.forEach(tour => {
        if (tour.lat && tour.lng) {
            const marker = L.marker([tour.lat, tour.lng]).addTo(map);
            
            // Popup adaptado para Tours (sin precio, con categoría)
            marker.bindPopup(`
                <div style="text-align:center; min-width: 160px;">
                    <img src="${tour.image}" style="width:100%; height:80px; object-fit:cover; border-radius:4px; margin-bottom:5px;">
                    <h4 style="margin: 5px 0; font-size:14px; font-family: var(--font-heading);">${tour.title}</h4>
                    <span style="font-size:12px; color: var(--accent-color); text-transform: uppercase;">${tour.category}</span>
                </div>
            `);
            markers.push(marker);
        }
    });

    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds(), { padding: [50, 50] });
    }
    
    setTimeout(() => { map.invalidateSize(); }, 500);
}