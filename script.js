let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculateResult() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = 'Error';
    document.getElementById('display').value = displayValue;
  }
}

function clearLastCharacter() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').value = displayValue;
}

document.addEventListener('keydown', function (event) {
  const key = event.key;

  // Check if the pressed key is a number, operator, or other special keys
  if (/[0-9\+\-\*\/]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    clearLastCharacter();
  } else if (key === 'Delete') {
    clearDisplay();
  }
});
