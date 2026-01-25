import os
from PIL import Image

# CONFIGURACIÓN
CARPETA_ORIGEN = 'virtualtours'  # Tu carpeta con los tours
CALIDAD = 80  # 80 es un buen balance entre peso y calidad para WebP

def convertir_a_webp():
    contador = 0
    ahorro_total = 0
    
    print(f"🚀 Iniciando conversión en '{CARPETA_ORIGEN}'...")

    for root, dirs, files in os.walk(CARPETA_ORIGEN):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg')):
                ruta_completa_jpg = os.path.join(root, file)
                nombre_sin_ext = os.path.splitext(ruta_completa_jpg)[0]
                ruta_nueva_webp = nombre_sin_ext + ".webp"

                # 1. Abrir y Convertir
                try:
                    with Image.open(ruta_completa_jpg) as img:
                        # Guardar como WebP
                        img.save(ruta_nueva_webp, 'webp', quality=CALIDAD)
                        
                        # Calcular ahorro (solo informativo)
                        peso_jpg = os.path.getsize(ruta_completa_jpg)
                        peso_webp = os.path.getsize(ruta_nueva_webp)
                        ahorro = peso_jpg - peso_webp
                        ahorro_total += ahorro
                        
                        # 2. BORRAR EL JPG ORIGINAL (Para ahorrar espacio)
                        # Si prefieres probar primero, comenta la línea de abajo con un #
                        os.remove(ruta_completa_jpg)
                        
                        contador += 1
                        if contador % 100 == 0:
                            print(f"✅ {contador} imágenes procesadas...")
                            
                except Exception as e:
                    print(f"❌ Error en {file}: {e}")

    mb_ahorrados = ahorro_total / (1024 * 1024)
    print(f"\n🎉 ¡Terminado! Se convirtieron {contador} imágenes.")
    print(f"💾 Espacio liberado estimado: {mb_ahorrados:.2f} MB")

if __name__ == "__main__":
    convertir_a_webp()