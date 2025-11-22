
/**
 * 
 * @param {number} value 
 * @returns {string} 
 */
function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
}

export function initRoiCalculatorHome() {
    // 🚨 NOTA: Todos los IDs buscan el sufijo '-home' 🚨
    const calculateBtn = document.getElementById('calculate-roi-home-btn');
    
    // Verificación de existencia del botón principal
    if (!calculateBtn) {
        return; 
    }
    
    // Obtener elementos de entrada
    const priceInput = document.getElementById('property-price-home');
    const rentInput = document.getElementById('monthly-rent-home');
    const occupancyInput = document.getElementById('occupancy-rate-home');
    
    // Obtener elementos de salida
    const annualGrossOutput = document.getElementById('annual-gross-home');
    const annualRoiOutput = document.getElementById('annual-roi-home');
    const paybackPeriodOutput = document.getElementById('payback-period-home'); 
    
    // Verificación de existencia de todos los elementos requeridos
    if (!priceInput || !rentInput || !occupancyInput || !annualGrossOutput || !annualRoiOutput || !paybackPeriodOutput) {
        console.error("ROI Calculator: Missing required input/output elements in HTML. Check IDs for -home suffix.");
        return;
    }
    
    function calculateRoi() {
        // La lógica de cálculo es idéntica a la que proporcionaste:
        const price = parseFloat(priceInput.value) || 0;
        const monthlyRent = parseFloat(rentInput.value) || 0;
        const occupancyRate = (parseFloat(occupancyInput.value) / 100) || 0; 
        
        let annualGrossIncome = 0;
        let annualROI = 0;
        let paybackPeriod = 0;
        
        if (price > 0 && monthlyRent > 0 && occupancyRate > 0) {
            annualGrossIncome = monthlyRent * 12 * occupancyRate;
            annualROI = (annualGrossIncome / price) * 100;
            
            if (annualROI > 0) {
                // Cálculo del Período de Recuperación (100 / ROI Anual)
                paybackPeriod = 100 / annualROI;
            }
        }

        // Formatear Salida de Ingreso Bruto
        annualGrossOutput.textContent = formatCurrency(annualGrossIncome);

        if (annualROI > 0) {
            // Formatear Salida de ROI y Payback Period
            annualRoiOutput.textContent = annualROI.toFixed(1) + '%';
            paybackPeriodOutput.textContent = paybackPeriod.toFixed(1) + ' años';
        } else {
            // Mostrar -- si no hay datos válidos
            annualRoiOutput.textContent = '--';
            paybackPeriodOutput.textContent = '--';
        }
    }

    // Agregar Event Listeners
    calculateBtn.addEventListener('click', calculateRoi);
    priceInput.addEventListener('input', calculateRoi);
    rentInput.addEventListener('input', calculateRoi);
    occupancyInput.addEventListener('input', calculateRoi);
    
    // Ejecutar al inicio para mostrar --
    calculateRoi();
}