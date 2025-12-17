// scripts/marquee.js

export function initTestimonialMarquee() {
    const track = document.getElementById('testimonial-track');
    
    // Si no existe el track (ej. estamos en otra página), no hacemos nada
    if (!track) return;
    
    // Evitamos duplicar infinitamente si la función se llama varias veces
    if (track.getAttribute('data-cloned') === 'true') return;

    // Clonamos el contenido exacto (las 4 tarjetas) y lo pegamos al final
    // Esto crea la ilusión de infinito: [A B C D] + [A B C D]
    const items = track.innerHTML;
    track.innerHTML += items; 
    
    // Marcamos que ya fue clonado
    track.setAttribute('data-cloned', 'true');
}