

export function initFooter() {
    // Buscamos el elemento del año
    const yearSpan = document.getElementById('year');
    
   
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
} 