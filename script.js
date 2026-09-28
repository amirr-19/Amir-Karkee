let resultField = document.getElementById('result');


function appendValue(value) {
  const result = document.getElementById('result');
  const lastChar = result.value.slice(-1);

  // Prevent multiple consecutive operators
  if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(lastChar)) {
    return;
  }

  result.value += value;
}

function calculateResult() {
  const result = document.getElementById('result');
  try {
    // Check for division by zero
    if (result.value.includes('/0')) {
      result.value = 'Error: Division by 0';
      return;
    }

    // Evaluate the expression
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  const result = document.getElementById('result');
  result.value = '';
}

function deleteLast() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

// Prevent invalid characters
document.getElementById('result').addEventListener('input', function (e) {
  const invalidChars = /[^0-9+\-*/.]/g;
  if (invalidChars.test(e.target.value)) {
    e.target.value = e.target.value.replace(invalidChars, '');
  }
});