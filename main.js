 const display = document.getElementById('display');
 function appendValue(value) { display.value += value; } 
 function clearDisplay() { display.value = ''; } 
 function deleteLastChar() {  display.value = display.value.slice(0, -1); } 
 function calculateResult() { try { display.value = eval(display.value); } catch (error) {
 display.value = 'Error'; } }
 function appendvalue(value) { const display = document.getElementById('display'); 
 }

