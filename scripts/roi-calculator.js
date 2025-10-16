// roi-calculator.js

/**
 * Función para formatear un número como moneda USD, sin decimales.
 * (Definida en el ámbito superior del módulo para evitar el ReferenceError)
 * @param {number} value El número a formatear.
 * @returns {string} El valor formateado (ej: $1,500).
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

/**
 * Inicializa la Calculadora de ROI, asignando listeners y la lógica de cálculo.
 */
export function initRoiCalculator() {
    const calculateBtn = document.getElementById('calculate-roi-btn');
    
    // Si el botón principal no existe, la calculadora no está en la página; salimos.
    if (!calculateBtn) {
        return; 
    }
    
    // 1. Obtener elementos de entrada
    const priceInput = document.getElementById('property-price');
    const rentInput = document.getElementById('monthly-rent');
    const occupancyInput = document.getElementById('occupancy-rate');
    
    // 2. Obtener elementos de salida
    const annualGrossOutput = document.getElementById('annual-gross');
    const annualRoiOutput = document.getElementById('annual-roi');
    const paybackPeriodOutput = document.getElementById('payback-period'); 
    
    // Comprobación de que todos los elementos clave existen
    if (!priceInput || !rentInput || !occupancyInput || !annualGrossOutput || !annualRoiOutput || !paybackPeriodOutput) {
        console.error("ROI Calculator: Missing required input/output elements in HTML. Check IDs.");
        return;
    }
    
    function calculateRoi() {
        // Obtener valores y convertirlos a números. Tasa de ocupación / 100 para trabajar con decimales.
        const price = parseFloat(priceInput.value) || 0;
        const monthlyRent = parseFloat(rentInput.value) || 0;
        const occupancyRate = (parseFloat(occupancyInput.value) / 100) || 0; 
        
        let annualGrossIncome = 0;
        let annualROI = 0;
        let paybackPeriod = 0;
        
        if (price > 0 && monthlyRent > 0 && occupancyRate > 0) {
            
            // CÁLCULO 1: Ingreso Anual Bruto
            annualGrossIncome = monthlyRent * 12 * occupancyRate;
            
            // CÁLCULO 2: Retorno Anual (ROI) en porcentaje
            annualROI = (annualGrossIncome / price) * 100;
            
            // CÁLCULO 3: Período de Recuperación (Años)
            if (annualROI > 0) {
                paybackPeriod = 100 / annualROI;
            }
        }

        // MOSTRAR RESULTADOS
        
        // 1. Ingreso Anual Bruto (Formato de moneda)
        annualGrossOutput.textContent = formatCurrency(annualGrossIncome);

        if (annualROI > 0) {
            // 2. Retorno Anual (Porcentaje)
            annualRoiOutput.textContent = annualROI.toFixed(1) + '%';
            
            // 3. Período de Recuperación (Años)
            paybackPeriodOutput.textContent = paybackPeriod.toFixed(1) + ' años';
        } else {
            // Si no hay datos válidos, mostramos valores por defecto
            annualRoiOutput.textContent = '--';
            paybackPeriodOutput.textContent = '--';
        }
    }

    // 3. Asignar Listeners
    // Calcula al hacer clic en el botón y automáticamente al cambiar los valores
    calculateBtn.addEventListener('click', calculateRoi);
    priceInput.addEventListener('input', calculateRoi);
    rentInput.addEventListener('input', calculateRoi);
    occupancyInput.addEventListener('input', calculateRoi);
    
    // Ejecutar un cálculo inicial para poblar la tabla con valores iniciales
    calculateRoi();
}