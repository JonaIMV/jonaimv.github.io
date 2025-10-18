

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


export function initRoiCalculator() {
    const calculateBtn = document.getElementById('calculate-roi-btn');
    
    
    if (!calculateBtn) {
        return; 
    }
    
   
    const priceInput = document.getElementById('property-price');
    const rentInput = document.getElementById('monthly-rent');
    const occupancyInput = document.getElementById('occupancy-rate');
    
    
    const annualGrossOutput = document.getElementById('annual-gross');
    const annualRoiOutput = document.getElementById('annual-roi');
    const paybackPeriodOutput = document.getElementById('payback-period'); 
    
    
    if (!priceInput || !rentInput || !occupancyInput || !annualGrossOutput || !annualRoiOutput || !paybackPeriodOutput) {
        console.error("ROI Calculator: Missing required input/output elements in HTML. Check IDs.");
        return;
    }
    
    function calculateRoi() {
        
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
                paybackPeriod = 100 / annualROI;
            }
        }

        
        
      
        annualGrossOutput.textContent = formatCurrency(annualGrossIncome);

        if (annualROI > 0) {
         
            annualRoiOutput.textContent = annualROI.toFixed(1) + '%';
            
           
            paybackPeriodOutput.textContent = paybackPeriod.toFixed(1) + ' años';
        } else {
          
            annualRoiOutput.textContent = '--';
            paybackPeriodOutput.textContent = '--';
        }
    }

   
    calculateBtn.addEventListener('click', calculateRoi);
    priceInput.addEventListener('input', calculateRoi);
    rentInput.addEventListener('input', calculateRoi);
    occupancyInput.addEventListener('input', calculateRoi);
    
    calculateRoi();
}