// share.js

export async function compartirPropiedad(titulo) {
    const urlActual = window.location.href; 
    const textoCompartir = `¡Mira esta increíble propiedad en la Riviera Maya! - ${titulo}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: 'TuCasa Caribe Realty',
                text: textoCompartir,
                url: urlActual
            });
        } catch (err) {
            console.log('El usuario canceló o hubo un error al compartir.');
        }
    } else {
        // Fallback para computadoras
        navigator.clipboard.writeText(`${textoCompartir} ${urlActual}`).then(() => {
            alert('¡Enlace copiado al portapapeles! Ya puedes pegarlo donde quieras.');
        });
    }
    
}
    export function imprimirFichaPropiedad() {
        window.print();
    }