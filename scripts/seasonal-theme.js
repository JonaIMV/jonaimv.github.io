
function determineAndApplySeason() {
    const month = new Date().getMonth(); 
    let themeClass = '';

    
    if (month >= 2 && month <= 4) {
        // Marzo (2), Abril (3), Mayo (4)
        themeClass = 'theme-spring';
    } else if (month >= 5 && month <= 7) {
        // Junio (5), Julio (6), Agosto (7)
        themeClass = 'theme-summer';
    } else if (month >= 8 && month <= 10) {
        // Septiembre (8), Octubre (9), Noviembre (10)
        themeClass = 'theme-fall'; 
    } else {
        // Diciembre (11), Enero (0), Febrero (1)
        themeClass = 'theme-winter';
    }

    
    document.body.classList.add(themeClass);
    console.log(`Tema aplicado: ${themeClass}`);
}

export { determineAndApplySeason };