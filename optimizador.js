const fs = require('fs');
const path = require('path');


const carpetaPropiedad = 'selva-5-e'; 
const nombreSEO = 'Casa en Venta Selva 5E Puerto Morelos'; 

// Rutas basadas en la estructura
const rutaImagenes = path.join('./images', carpetaPropiedad);
const rutaRaiz = './'; 

function generarSlug(texto) {
    return texto.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

const slugBase = generarSlug(nombreSEO);
let mapaReemplazos = {};
let contenidoCSV = "Archivo,Alt_Text\n";

// 1. Leer imágenes en la subcarpeta
const archivos = fs.readdirSync(rutaImagenes);
const imagenes = archivos.filter(archivo => {
    const ext = path.extname(archivo).toLowerCase();
    return ext === '.webp' || ext === '.jpg' || ext === '.png';
});

// 2. Renombrar imágenes
console.log(`\n🔄 Renombrando imágenes en /images/${carpetaPropiedad}...`);
imagenes.forEach((archivoViejo, index) => {
    const numero = (index + 1).toString().padStart(2, '0');
    const extension = path.extname(archivoViejo).toLowerCase();
    const archivoNuevo = `${slugBase}-${numero}${extension}`;
    
    // Guardar para el reemplazo en HTML (incluyendo la ruta de la carpeta para ser exactos)
    const rutaViejaHTML = `images/${carpetaPropiedad}/${archivoViejo}`;
    const rutaNuevaHTML = `images/${carpetaPropiedad}/${archivoNuevo}`;
    mapaReemplazos[rutaViejaHTML] = rutaNuevaHTML;

    // Renombrar archivo físico
    fs.renameSync(path.join(rutaImagenes, archivoViejo), path.join(rutaImagenes, archivoNuevo));
    
    // Agregar al CSV
    contenidoCSV += `${archivoNuevo},"${nombreSEO} - Imagen ${numero}"\n`;
    console.log(`✅ ${archivoViejo} -> ${archivoNuevo}`);
});

// Guardar CSV en la carpeta de la propiedad
fs.writeFileSync(path.join(rutaImagenes, 'seo-alt-texts.csv'), contenidoCSV);
console.log(`📄 CSV de Textos ALT generado en la carpeta de la propiedad.`);


/* ==============================
   ACTUALIZAR JSON
============================== */
console.log('\n📝 Actualizando forSale.json...');

const rutaJson = path.join(rutaRaiz, 'data/forSale.json');

if (fs.existsSync(rutaJson)) {
    let contenidoJson = fs.readFileSync(rutaJson, 'utf8');
    let jsonModificado = false;

    Object.entries(mapaReemplazos).forEach(([viejo, nuevo]) => {
        // Usamos split y join, es 100% seguro contra puntos y barras diagonales
        if (contenidoJson.includes(viejo)) {
            contenidoJson = contenidoJson.split(viejo).join(nuevo);
            jsonModificado = true;
        }
    });

    if (jsonModificado) {
        fs.writeFileSync(rutaJson, contenidoJson, 'utf8');
        console.log(`✅ Nombres de imágenes actualizados exitosamente en: forSale.json`);
    } else {
        console.log(`ℹ️ No se encontraron coincidencias. Revisa que las rutas en el JSON y la carpeta coincidan.`);
    }
} else {
    console.log(`❌ Error: No se encontró el archivo forSale.json en la ruta: ${rutaJson}`);
}

console.log('\n🚀 PROCESO COMPLETADO');