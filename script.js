let currentDisplay = '';
    let memory = 0;

    // Update display
    function updateDisplay() {
      document.querySelector('#display').value = currentDisplay;
    }

    // Clear display  (AC)
    function clearDisplay() {
      currentDisplay = '';
      updateDisplay();
    }

    // Add to display
    function addToDisplay(value) {
      currentDisplay += value;
      updateDisplay();
    }

    // Backspace (*)
    function backspace() {
      currentDisplay = currentDisplay.slice(0, -1);
      updateDisplay();
    }

    // Calculate result
    function calculateResult() {
      try {
        currentDisplay = eval(currentDisplay).toString();
      } catch (e) {
        currentDisplay = 'undefined';
      }
      updateDisplay();
    }

    // Square
    function square() {
      try {
        currentDisplay = Math.pow(eval(currentDisplay), 2).toString();
      } catch (e) {
        currentDisplay = 'Error';
      }
      updateDisplay();
    }

    // Square Root
    function squareRoot() {
      try {
        currentDisplay = Math.sqrt(eval(currentDisplay)).toString();
      } catch (e) {
        currentDisplay = 'Error';
      }
      updateDisplay();
    }

    // Memory Save
    function memorySave() {
      memory = eval(currentDisplay) || 0;
    }

    // Memory Recall
    function memoryRecall() {
      currentDisplay = memory.toString();
      updateDisplay();
    }

    // Memory Clear
    function memoryClear() {
      memory = 0;
    }