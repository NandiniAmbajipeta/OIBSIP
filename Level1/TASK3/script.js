function toggleMode() {
    const body = document.body;
    const modeSwitchButton = document.querySelector('.mode-switch button');
    
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        modeSwitchButton.textContent = 'Switch to Light Mode';
    } else {
        modeSwitchButton.textContent = 'Switch to Dark Mode';
    }
}

function convert() {
    const tempInput = document.getElementById('temperature').value;
    const unitInput = document.getElementById('unit').value;
    const result = document.getElementById('result');
    let convertedTemp;
    let convertedUnit;

    if (isNaN(tempInput) || tempInput === '') {
        result.textContent = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(tempInput);

    if (unitInput === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
    } else if (unitInput === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
    } else if (unitInput === 'kelvin') {
        convertedTemp = temp - 273.15;
        convertedUnit = 'Celsius';
    }

    result.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
}














