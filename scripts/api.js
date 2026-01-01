export async function loadProperties(containerId, jsonUrl) {
    // Nota: containerId ya no es estrictamente necesario aquí, pero lo mantenemos por compatibilidad
    // si alguna lógica vieja lo pasaba. Lo ideal es que esta función SOLO retorne datos.
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Error HTTP: ' + response.status);
        const properties = await response.json();
        return properties; 
    } catch (error) {
        console.error(error);
        const container = containerId ? document.getElementById(containerId) : null;
        if (container) container.innerHTML = '<p>Error cargando propiedades.</p>';
        return [];
    }
}