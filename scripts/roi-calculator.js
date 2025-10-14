export function initRoiCalculator() {
    const calculateBtn = document.getElementById('calculate-roi-btn');
    
    // 🚨 CRUCIAL CHECK: Only proceed if the main calculator button exists
    if (!calculateBtn) {
        return; 
    }
    
    // --- Rest of the function only runs if the button is found ---
    
    // 1. Get all other elements (they should now exist if the button does)
    const priceInput = document.getElementById('property-price');
    const rentInput = document.getElementById('monthly-rent');
    const occupancyInput = document.getElementById('occupancy-rate');
    
    // Elements de salida
    const annualGrossOutput = document.getElementById('annual-gross');
    const annualRoiOutput = document.getElementById('annual-roi');
    
    // ... (Your formatter function) ...
    
    function calculateRoi() {
        // ... (Your ROI calculation logic) ...
    }

    // 2. Attach Listeners (This is the section that was failing before the check)
    calculateBtn.addEventListener('click', calculateRoi);
    priceInput.addEventListener('input', calculateRoi);
    rentInput.addEventListener('input', calculateRoi);
    occupancyInput.addEventListener('input', calculateRoi);
    
    // Run an initial calculation/check to clear placeholders if needed
    calculateRoi();
}