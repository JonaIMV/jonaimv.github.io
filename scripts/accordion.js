export function initAccordionScroll() {
    // 1. Verificamos que GSAP y ScrollTrigger existan
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn("GSAP o ScrollTrigger no están cargados.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // 2. Seleccionamos las imágenes (izq) y las tarjetas de texto (der)
    const accordionItems = document.querySelectorAll('.accordion-item');
    const textSteps = document.querySelectorAll('.process-step-item');

    if (accordionItems.length === 0 || textSteps.length === 0) return;

    // 3. Creamos el "vigilante" del scroll para cada tarjeta de texto
    textSteps.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: step,
            // El evento se dispara cuando la parte superior de la tarjeta 
            // llega al 60% de la altura de la pantalla (un poco más abajo de la mitad)
            start: "top 60%", 
            end: "bottom 40%",
            
            // Cuando la tarjeta entra en la zona, activamos la imagen correspondiente
            onEnter: () => activateImage(index),
            
            // Si el usuario hace scroll hacia arriba, también reactivamos la imagen correcta
            onEnterBack: () => activateImage(index),
        });
    });

    // 4. Función que hace la magia de expandir la imagen
    function activateImage(index) {
        // Removemos la clase 'active' de todas
        accordionItems.forEach(item => item.classList.remove('active'));
        
        // Se la ponemos solo a la que toca
        if(accordionItems[index]) {
            accordionItems[index].classList.add('active');
        }
    }
}