// scripts/featured-modal.js

// Datos de la Propiedad Destacada
const featuredData = {
    title: "VIVE EN PUNTARENA", 
    subtitle: "Puerto Morelos",
    description: "Casa completamente equipada con alberca propia y área de yoga. Ubicada en una zona tranquila y segura, ideal para disfrutar con tu familia.",
    image: "images/puntarena/fachada-1.webp",
    link: "for-sale.html?id=11"
};

function getFeaturedContent() {
    return `
    <div class="luxury-popup-inner">
        <h3 class="popup-title">${featuredData.title}</h3>
        <div class="popup-script-accent">${featuredData.subtitle}</div>
        <p class="popup-description">${featuredData.description}</p>
        
        <div class="popup-image-container">
            <img src="${featuredData.image}" alt="Propiedad Destacada" decoding="sync">
        </div>
        
        <a href="${featuredData.link}" class="popup-cta-btn">Ver Detalles</a>
        
        <button class="popup-close-link" id="btn-close-text">No gracias, solo quiero ver</button>
    </div>
    `;
}

function handleModal(action) {
    const modal = document.getElementById('featuredModal');
    if (!modal) return;

    if (action === 'show') {
        // Verificamos sesión
        if (!sessionStorage.getItem('modalShown')) {
            const contentContainer = document.getElementById('featured-content');
            if (contentContainer) {
                contentContainer.innerHTML = getFeaturedContent();
                
                // Listener para el texto "No gracias"
                const textCloseBtn = document.getElementById('btn-close-text');
                if(textCloseBtn) {
                    textCloseBtn.addEventListener('click', () => handleModal('hide'));
                }
            }
            modal.style.display = 'block'; // O 'flex' según CSS móvil
            sessionStorage.setItem('modalShown', 'true');
        }
    } else if (action === 'hide') {
        modal.style.display = 'none';
    }
}

export function initFeaturedModal() {
    const modal = document.getElementById('featuredModal');
    if (!modal) return;

    // --- CORRECCIÓN 1: LIMPIEZA DE "FANTASMAS" ---
    // Si la sesión dice que ya lo vimos, nos aseguramos de OCULTARLO.
    // Esto arregla el bug de regresar y ver el cuadro blanco.
    if (sessionStorage.getItem('modalShown')) {
        modal.style.display = 'none';
        return; // Salimos y no hacemos nada más
    }

    // Si no se ha visto, programamos la aparición
    setTimeout(() => {
        handleModal('show');
    }, 2000);

    // Listeners básicos de cierre
    const closeBtn = document.querySelector('.close-featured-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => handleModal('hide'));
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) handleModal('hide');
    });

    // --- CORRECCIÓN 2: CERRAR AL NAVEGAR ---
    // Si el usuario hace clic en el botón azul para ir a la propiedad,
    // cerramos el modal ANTES de que cambie de página.
    // Así, si da clic en "Atrás", el navegador recordará que estaba cerrado.
    modal.addEventListener('click', (e) => {
        // Usamos .closest por si el clic cae en un elemento interno del botón
        if (e.target.closest('.popup-cta-btn')) {
            handleModal('hide');
        }
    });
}