function addToDisplay(value) {
    var display = document.getElementById('display');
    if (display.innerText === '0' && value !== '+' && value !== '-' && value !== '*' && value !== '/' && value !== '%') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.innerText);
    display.innerText = result;
}

function clearDisplay() {
    var display = document.getElementById('display');
    display.innerText = '0';
}
