
const featuredData = {
    title: " ¡¡Propiedad Destacada !!",
    description: "!!Casa completamente equipada y lista para habitar. Justo lo que necesita tu familia, nietos hijos o amigos. Alberca propia y con un área para practicar yoga. Ubicada en una zona tranquila y segura!!!.",
    image: "images/puntarena/fachada-1.webp", // Cambiamos imagen
    link: "for-sale.html?id=11" // Cambiamos ID
};

// Determina el contenido a mostrar
function getFeaturedContent() {
    return `
    <div class="featured-card">
            <h3>${featuredData.title}</h3>
            <p>${featuredData.description}</p>
            
            <img src="${featuredData.image}" alt="Propiedad Destacada" class="featured-img-override">
            
            <a href="${featuredData.link}">Ver Oferta Exclusiva →</a>
        </div>
    `;
}

// Muestra u oculta el modal
function handleModal(action) {
    const modal = document.getElementById('featuredModal');
    if (action === 'show') {
        // Asegurarse de que solo se muestre una vez por sesión
        if (!sessionStorage.getItem('modalShown')) {
            document.getElementById('featured-content').innerHTML = getFeaturedContent();
            // Usamos 'flex'  o 'block' para mostrar
            modal.style.display = 'block';
            sessionStorage.setItem('modalShown', 'true');
        }
    } else if (action === 'hide') {
        modal.style.display = 'none';
    }
}

export function initFeaturedModal() {
    const modal = document.getElementById('featuredModal');
    if (!modal) return; // Salir si el HTML no tiene el modal

    const closeBtn = document.querySelector('.close-featured-btn');

    handleModal('show');

   
    closeBtn.addEventListener('click', () => handleModal('hide'));
    
   
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            handleModal('hide');
        }
    });
}