// Get input and buttons
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// Operation buttons
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const mulBtn = document.getElementById('mulBtn');
const divBtn = document.getElementById('divBtn');

// Function to calculate
function calculate(op) {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "⚠️ Please enter both numbers!";
    result.style.color = "red";
    return;
  }

  let ans;
  switch (op) {
    case '+': ans = a + b; break;
    case '-': ans = a - b; break;
    case '*': ans = a * b; break;
    case '/': ans = b !== 0 ? a / b : "❌ Cannot divide by zero"; break;
  }

  result.textContent = "Result: " + ans;
  result.style.color = "green";
}

// Add event listeners
addBtn.addEventListener('click', () => calculate('+'));
subBtn.addEventListener('click', () => calculate('-'));
mulBtn.addEventListener('click', () => calculate('*'));
divBtn.addEventListener('click', () => calculate('/'));
// Clear button functionality
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function() {
  num1.value = "";
  num2.value = "";
  result.textContent = "Result: ";
  result.style.color = "#333"; // reset color
});
