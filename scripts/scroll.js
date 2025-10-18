
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    
    const scrollThreshold = 50; 

   
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

export function initHeaderScroll() {
    handleHeaderScroll(); 
    
    window.addEventListener('scroll', handleHeaderScroll);
}