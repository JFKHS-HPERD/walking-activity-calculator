// Walking Activity Calculator - JavaScript
document.getElementById('walkingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get input values
    const step1 = parseFloat(document.getElementById('step1').value);
    const step2 = parseFloat(document.getElementById('step2').value);
    const step3 = parseFloat(document.getElementById('step3').value);
    const stepLength = parseFloat(document.getElementById('stepLength').value);
    
    // Validate inputs
    if (!validateInputs(step1, step2, step3, stepLength)) {
        return;
    }
    
    // Calculate Average Steps per Minute
    const averageStepsPerMinute = (step1 + step2 + step3) / 3;
    
    // Calculate Walking Speed (m/min)
    // Formula: Average Steps per Minute × Average Step Length
    const walkingSpeed = averageStepsPerMinute * stepLength;
    
    // Total Walking Time is 3 minutes (three 1-minute intervals)
    const totalWalkingTime = 3;
    
    // Calculate Distance Walked (m)
    // Formula: Walking Speed × Total Walking Time
    const distanceWalked = walkingSpeed * totalWalkingTime;
    
    // Calculate Total Steps
    // Formula: Distance Walked ÷ Average Step Length
    const totalSteps = distanceWalked / stepLength;
    
    // Display results with 2 decimal places
    document.getElementById('avgSteps').textContent = averageStepsPerMinute.toFixed(2);
    document.getElementById('walkingSpeed').textContent = walkingSpeed.toFixed(2);
    document.getElementById('distance').textContent = distanceWalked.toFixed(2);
    document.getElementById('totalSteps').textContent = totalSteps.toFixed(2);
    
    // Show results section
    document.getElementById('resultsSection').style.display = 'block';
    
    // Scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
});

// Input validation function
function validateInputs(step1, step2, step3, stepLength) {
    const inputs = [
        { value: step1, element: document.getElementById('step1'), name: 'Step Count 1' },
        { value: step2, element: document.getElementById('step2'), name: 'Step Count 2' },
        { value: step3, element: document.getElementById('step3'), name: 'Step Count 3' },
        { value: stepLength, element: document.getElementById('stepLength'), name: 'Average Step Length' }
    ];
    
    let isValid = true;
    
    inputs.forEach(input => {
        const errorElement = input.element.nextElementSibling;
        
        if (isNaN(input.value) || input.value === '') {
            errorElement.textContent = `${input.name} is required`;
            errorElement.style.display = 'block';
            isValid = false;
        } else if (input.value < 0) {
            errorElement.textContent = `${input.name} must be positive`;
            errorElement.style.display = 'block';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
        }
    });
    
    return isValid;
}

// Clear error messages when user starts typing
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        const errorElement = this.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.style.display = 'none';
        }
    });
});