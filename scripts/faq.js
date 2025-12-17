export function initFAQ() {
    const accordions = document.querySelectorAll('.accordion-header');

    if (accordions.length === 0) return;

    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            // 1. Alternar clase active
            this.classList.toggle('active');

            // 2. Desplegar contenido
            const content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
}