export function initLightbox() {
    // 1. Inyectar el HTML del Modal en el DOM (si no existe)
    const modalHtml = `
        <div id="lightbox-modal" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-prev">&#10094;</button>
            <div class="lightbox-content">
                <img id="lightbox-img" src="" alt="Vista ampliada">
            </div>
            <button class="lightbox-next">&#10095;</button>
            <div class="lightbox-counter"></div>
        </div>
    `;
    
    if (!document.getElementById('lightbox-modal')) {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // 2. Selección de elementos del DOM
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const counter = document.querySelector('.lightbox-counter');
    
    // Variables de estado
    let images = [];
    let currentIndex = 0;

    // Variables para el Swipe (Táctil)
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; 

    // --- 3. Funciones de Control ---

    const updateImage = () => {
        // Animación de salida (fade out)
        modalImg.style.opacity = 0;
        modalImg.style.transform = 'scale(0.95)';

        setTimeout(() => {
            if (images[currentIndex]) {
                modalImg.src = images[currentIndex].src;
                // Actualizar texto del contador (ej: 1 / 15)
                counter.textContent = `${currentIndex + 1} / ${images.length}`;
            }
            // Animación de entrada (fade in)
            modalImg.style.opacity = 1;
            modalImg.style.transform = 'scale(1)';
        }, 200);
    };

    const openModal = (index) => {
        // 🚨 CLAVE: Buscar TODAS las imágenes dentro del contenedor del mosaico
        // Esto incluye las visibles y las que están en el div oculto (.hidden-gallery-photos)
        const container = document.querySelector('.bento-grid-container') || document.querySelector('.photo-grid');
        
        if (!container) return; // Si no hay galería, no hacer nada

        // Seleccionar solo las imágenes directas o anidadas
        images = container.querySelectorAll('img');
        
        if (images.length === 0) return;

        currentIndex = index;
        updateImage();
        
        modal.style.display = 'flex';
        // Pequeño delay para que la transición CSS de opacidad funcione
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; // Bloquear el scroll de la página de fondo
    };

    const closeModal = () => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Reactivar scroll
        }, 300);
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % images.length; // Loop infinito al final
        updateImage();
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop infinito al inicio
        updateImage();
    };

    // --- 4. Lógica del Swipe (Touch Events) ---

    function handleGesture() {
        let swipedDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipedDistance) > minSwipeDistance) {
            if (swipedDistance < 0) {
                showNext(); // Deslizar a la izquierda -> Siguiente
            } else {
                showPrev(); // Deslizar a la derecha -> Anterior
            }
        }
    }

    // Configuración pasiva para mejor rendimiento en scroll
    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, { passive: true });


    // --- 5. Event Listeners (Clicks) ---
    
    // Delegación de eventos: Detectar click en cualquier parte de la galería
    // Esto es mejor que poner onclick="" en cada foto HTML
    document.addEventListener('click', (e) => {
        // A. Si se hace clic en una imagen dentro de la galería
        const imgTarget = e.target.closest('.bento-grid-container img');
        
        // B. Si se hace clic en el overlay de "Ver más"
        const viewAllTarget = e.target.closest('.view-all-wrapper');

        if (imgTarget) {
            // Recalcular lista de imágenes actual
            const container = document.querySelector('.bento-grid-container') || document.querySelector('.photo-grid');
            const allImages = Array.from(container.querySelectorAll('img'));
            const index = allImages.indexOf(imgTarget);
            
            if (index !== -1) openModal(index);
        } 
        else if (viewAllTarget) {
            // Si clickean en "Ver más", abrimos la imagen que está debajo de ese overlay
            const imgInside = viewAllTarget.querySelector('img');
            const container = document.querySelector('.bento-grid-container');
            const allImages = Array.from(container.querySelectorAll('img'));
            const index = allImages.indexOf(imgInside);
            
            if (index !== -1) openModal(index);
        }
    });

    // Botones del Modal
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    // Cerrar al dar click en el fondo negro (fuera de la imagen)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navegación con Teclado
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
}