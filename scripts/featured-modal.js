// Datos de la Propiedad Destacada (Estilo Luxury)
const featuredData = {
    title: "VIVE EN PUNTARENA", 
    subtitle: "Puerto Morelos", // El texto que saldrá en cursiva/dorado
    description: "Casa completamente equipada con alberca propia y área de yoga. Ubicada en una zona tranquila y segura, ideal para disfrutar con tu familia.",
    image: "images/puntarena/fachada-1.webp", // Asegúrate de que esta ruta sea correcta
    link: "for-sale.html?id=11"
};

// Genera el HTML interior del modal con la nueva estructura
function getFeaturedContent() {
    return `
    <div class="luxury-popup-inner">
        <h3 class="popup-title">${featuredData.title}</h3>
        
        <div class="popup-script-accent">${featuredData.subtitle}</div>
        
        <p class="popup-description">${featuredData.description}</p>
        
        <div class="popup-image-container">
            <img src="${featuredData.image}" alt="Propiedad Destacada en Puerto Morelos">
        </div>
        
        <a href="${featuredData.link}" class="popup-cta-btn">Ver Detalles</a>
        
        <button class="popup-close-link" id="btn-close-text">No gracias, solo quiero ver</button>
    </div>
    `;
}

// Función interna para mostrar/ocultar
function handleModal(action) {
    const modal = document.getElementById('featuredModal');
    if (!modal) return;

    if (action === 'show') {
        // Verifica si ya se mostró en esta sesión para no ser molesto
        if (!sessionStorage.getItem('modalShown')) {
            // Inyectamos el contenido
            const contentContainer = document.getElementById('featured-content');
            if (contentContainer) {
                contentContainer.innerHTML = getFeaturedContent();
                
                // Agregamos listener al botón de texto "No gracias" que acabamos de crear
                const textCloseBtn = document.getElementById('btn-close-text');
                if(textCloseBtn) {
                    textCloseBtn.addEventListener('click', () => handleModal('hide'));
                }
            }
            
            // Mostramos el modal
            modal.style.display = 'block';
            
            // Marcamos en sesión que ya se vio
            sessionStorage.setItem('modalShown', 'true');
        }
    } else if (action === 'hide') {
        modal.style.display = 'none';
    }
}

// Función principal que se exporta e inicializa todo
export function initFeaturedModal() {
    const modal = document.getElementById('featuredModal');
    if (!modal) return; // Si no existe el modal en el HTML, no hacemos nada

    // Intentamos mostrarlo (la lógica de sessionStorage decide si se abre o no)
    // Usamos un pequeño timeout para que no sea tan agresivo al cargar la página
    setTimeout(() => {
        handleModal('show');
    }, 2000); // Aparece 2 segundos después de entrar

    // Configurar botón de cierre (la X de la esquina)
    const closeBtn = document.querySelector('.close-featured-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => handleModal('hide'));
    }
    
    // Cerrar al hacer clic fuera del contenido (en el fondo oscuro)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            handleModal('hide');
        }
    });
}