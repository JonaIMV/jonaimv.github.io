export function initLightbox() {
    // 1. Inyectar el HTML del Modal (Ahora incluye un reproductor de <video>)
    const modalHtml = `
        <div id="lightbox-modal" class="lightbox">
            <span class="lightbox-close">&times;</span>
            <button class="lightbox-prev">&#10094;</button>
            <div class="lightbox-content" style="overflow: hidden; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
                
                <img id="lightbox-img" src="" alt="Vista ampliada" style="cursor: zoom-in; transition: transform 0.3s ease, opacity 0.2s ease;">
                
                <video id="lightbox-video" controls playsinline style="display: none; max-width: 90vw; max-height: 90vh; border-radius: 8px; transition: opacity 0.2s ease; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></video>
                
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
    const modalVideo = document.getElementById('lightbox-video'); // <-- NUEVO
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const counter = document.querySelector('.lightbox-counter');
    
    // Variables de estado
    let mediaItems = []; // <-- Cambiamos 'images' por 'mediaItems' para que abarque todo
    let currentIndex = 0;
    let isZoomed = false;

    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; 

    // --- 3. Funciones de Control ---

    const resetZoom = () => {
        isZoomed = false;
        modalImg.style.transform = 'scale(0.95)';
        modalImg.style.cursor = 'zoom-in';
        setTimeout(() => {
            modalImg.style.transformOrigin = 'center center';
        }, 300);
    };

    const updateMedia = () => {
        // Animación de salida y apagar videos anteriores
        modalImg.style.opacity = 0;
        modalVideo.style.opacity = 0;
        modalVideo.pause(); // 🚨 CLAVE: Pausar el video si el usuario avanza de foto
        resetZoom();

        setTimeout(() => {
            const currentMedia = mediaItems[currentIndex];
            if (!currentMedia) return;

            // Revisar si el elemento actual es un VIDEO
            if (currentMedia.tagName.toUpperCase() === 'VIDEO') {
                modalImg.style.display = 'none'; // Ocultar imagen
                modalVideo.style.display = 'block'; // Mostrar video
                
                // Extraer la ruta del video (ya sea desde src o desde un tag <source>)
                const videoSrc = currentMedia.src || (currentMedia.querySelector('source') && currentMedia.querySelector('source').src);
                modalVideo.src = videoSrc;
                
                // Opcional: Reproducir automáticamente al abrir (sin sonido por default para no asustar)
                modalVideo.play().catch(e => console.log("Autoplay evitado por el navegador")); 
                modalVideo.style.opacity = 1;

            } else {
                // Es una IMAGEN normal
                modalVideo.style.display = 'none';
                modalImg.style.display = 'block';
                
                modalImg.src = currentMedia.src;
                modalImg.style.opacity = 1;
                modalImg.style.transform = 'scale(1)';
            }

            counter.textContent = `${currentIndex + 1} / ${mediaItems.length}`;
        }, 200);
    };

    const openModal = (index) => {
        const container = document.querySelector('.bento-grid-container') || document.querySelector('.photo-grid');
        if (!container) return; 

        // 🚨 NUEVO: Buscar tanto imágenes como videos en la galería
        mediaItems = container.querySelectorAll('img, video');
        if (mediaItems.length === 0) return;

        currentIndex = index;
        updateMedia();
        
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        modal.classList.remove('active');
        resetZoom();
        modalVideo.pause(); // Pausar video al cerrar
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }, 300);
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % mediaItems.length; 
        updateMedia();
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length; 
        updateMedia();
    };

    function handleGesture() {
        if (isZoomed) return; 
        let swipedDistance = touchEndX - touchStartX;
        if (Math.abs(swipedDistance) > minSwipeDistance) {
            swipedDistance < 0 ? showNext() : showPrev();
        }
    }

    modal.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, { passive: true });
    modal.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, { passive: true });

    // Zoom solo para imágenes
    modalImg.addEventListener('click', (e) => {
        e.stopPropagation();
        isZoomed = !isZoomed;
        if (isZoomed) {
            const rect = e.target.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            modalImg.style.transformOrigin = `${x}% ${y}%`;
            modalImg.style.transform = 'scale(2.5)';
            modalImg.style.cursor = 'zoom-out';
        } else {
            modalImg.style.transform = 'scale(1)';
            modalImg.style.cursor = 'zoom-in';
        }
    });

    // --- 5. Event Listeners (Clicks) ---
    document.addEventListener('click', (e) => {
        // Detectar si hicieron clic en una IMAGEN o en un VIDEO en la cuadrícula
        const mediaTarget = e.target.closest('.bento-grid-container img, .bento-grid-container video');
        const viewAllTarget = e.target.closest('.view-all-wrapper');

        if (mediaTarget) {
            // Prevenir que el video empiece a reproducirse en la cuadrícula pequeña
            if (mediaTarget.tagName.toUpperCase() === 'VIDEO') {
                e.preventDefault(); 
            }

            const container = document.querySelector('.bento-grid-container') || document.querySelector('.photo-grid');
            const allMedia = Array.from(container.querySelectorAll('img, video'));
            const index = allMedia.indexOf(mediaTarget);
            
            if (index !== -1) openModal(index);
        } 
        else if (viewAllTarget) {
            const mediaInside = viewAllTarget.querySelector('img, video');
            const container = document.querySelector('.bento-grid-container');
            const allMedia = Array.from(container.querySelectorAll('img, video'));
            const index = allMedia.indexOf(mediaInside);
            
            if (index !== -1) openModal(index);
        }
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === document.querySelector('.lightbox-content')) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        }
    });
}