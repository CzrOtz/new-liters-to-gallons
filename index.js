function display() {
    var userInput = document.getElementById('userInput').value;
    document.getElementById('quantityEntered').textContent = userInput;
}

function gallon() {
    document.getElementById('inputUnitType').textContent = 'gallons';
    document.getElementById('outputUnitType').textContent = 'liters';
}

function liter() {
    document.getElementById('inputUnitType').textContent = 'liters';
    document.getElementById('outputUnitType').textContent = 'gallons';
}

function results() {
    var userInput = parseFloat(document.getElementById('userInput').value);
    var inputUnitType = document.getElementById('inputUnitType').textContent;
    var outputValue = 0;

    if (inputUnitType === 'gallons') {
        outputValue = userInput * 3.78541; // Convert gallons to liters
        document.getElementById('quantityToDisplay').textContent = outputValue.toFixed(2);
    } else if (inputUnitType === 'liters') {
        outputValue = userInput / 3.78541; // Convert liters to gallons
        document.getElementById('quantityToDisplay').textContent = outputValue.toFixed(2);
    }
}

