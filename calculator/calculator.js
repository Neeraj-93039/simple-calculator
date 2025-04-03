//calculor program
function showValue(value) {
    const inputField = document.querySelector('.input input');
    inputField.value += value;
}
function deleteSingleValue(){
    const inputField = document.getElementById('inpt');
    inputField.value = inputField.value.slice(0, -1);
}
function clearAll() {
    const inputField = document.getElementById('inpt');
    inputField.value = inputField.value.slice(0, 0);
}
function calculate() {
    const inputField = document.getElementById('inpt');
    const outputField = document.getElementById('out');
    try {
        // Evaluate the expression safely
        const result = eval(inputField.value);
        outputField.textContent = result; // Display the result in the output field
    } catch (error) {
        outputField.textContent = 'Mathmatical error! please provide a valid expression'; // Display error if the expression is invalid
    }
}