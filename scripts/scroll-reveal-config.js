
export function initScrollReveal() {
    if (typeof ScrollReveal === 'undefined') {
        console.warn("ScrollReveal library not loaded.");
        return;
    }

    
    const sr = ScrollReveal({
        duration: 900,
        distance: '50px',
        easing: 'ease-in-out',
        mobile: true 
    });

    
    sr.reveal('.reveal-left', { origin: 'left', interval: 150 });
    sr.reveal('.reveal-right', { origin: 'right', interval: 150 });
    sr.reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });
}