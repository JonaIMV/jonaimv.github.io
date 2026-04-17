// 1. IMPORTAMOS tu función real
import { renderProperties } from './render.js';

export async function initCuratedPage() {
    const container = document.getElementById('options-container');
    if (!container) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const idsString = urlParams.get('ids');
    const expDateString = urlParams.get('exp'); // <-- Leemos la fecha de expiración
    
    if (!idsString) {
        container.innerHTML = "<h2 style='text-align:center; grid-column: 1/-1;'>No hay propiedades seleccionadas.</h2>";
        return;
    }

    // --- LÓGICA DE CADUCIDAD REAL ---
    if (expDateString) {
        // Convertimos la fecha de la URL a un objeto de tiempo real
        const creationDate = new Date(expDateString);
        creationDate.setHours(0, 0, 0, 0); // Normalizamos a la medianoche

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Calculamos la diferencia en milisegundos y la pasamos a días
        const diffTime = today - creationDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Si han pasado más de 3 días (o si pusieron una fecha inválida)
        if (diffDays > 3 || isNaN(creationDate)) {
            container.innerHTML = `
                <div style="text-align:center; grid-column: 1/-1; padding: 50px 20px;">
                    <i class="fas fa-lock" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                    <h2 style="color: #333;">Este enlace ha caducado</h2>
                    <p style="color: #666; max-width: 500px; margin: 0 auto 20px;">
                        Por seguridad y actualización de precios, esta propuesta personalizada ya no está disponible.
                    </p>
                    <a href="contact-us.html" style="background-color: var(--primary-color); color: white; padding: 10px 20px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
                        Solicitar una nueva propuesta
                    </a>
                </div>
            `;
            return; // 🛑 Detiene la ejecución, no dibuja ninguna propiedad
        }
    }
    // ---------------------------------

    const selectedIds = idsString.split(',').map(id => id.trim().toLowerCase());

    try {
        const response = await fetch('data/forSale.json'); 
        const allProperties = await response.json();

        const filteredProperties = allProperties.filter(prop => {
            const propId = String(prop.id).toLowerCase();
            return selectedIds.includes(propId);
        });

        if (filteredProperties.length === 0) {
            container.innerHTML = "<h2 style='text-align:center; grid-column: 1/-1;'>No encontramos las propiedades solicitadas.</h2>";
            return;
        }

        renderProperties(filteredProperties, container);

    } catch (error) {
        console.error("Error cargando la propuesta personalizada:", error);
        container.innerHTML = "<h2 style='text-align:center; grid-column: 1/-1;'>Hubo un error al cargar las opciones.</h2>";
    }
}