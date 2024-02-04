function convert(toUnit) {
    let temperatureValue = document.getElementById('temperature').value;
    if (temperatureValue !== '') {
        let celsiusValue = parseFloat(temperatureValue);
        let celsiusResult = convertTemperature(celsiusValue, 'Celsius', toUnit);
        document.getElementById(toUnit.toLowerCase() + 'Result').textContent = celsiusResult.toFixed(2);
    } 
    else {
        alert('Please enter a temperature value.');
    }
}
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        return (value * 9/5) + 32;
    } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        return value + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        return (value - 32) * 5/9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        return (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        return value - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        return (value - 273.15) * 9/5 + 32;
    } else {
        return value; 
    }
}

