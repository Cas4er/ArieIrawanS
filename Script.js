class Calculator {
    constructor() {
      this.currentValue = '';
    }
  
    append(character) {
      this.currentValue += character;
      this.updateDisplay();
    }
  
    delete() {
      this.currentValue = this.currentValue.slice(0, -1);
      this.updateDisplay();
    }
  
    clear() {
      this.currentValue = '';
      this.updateDisplay();
    }
  
    calculate() {
      try {
        const result = eval(this.currentValue); 
        this.currentValue = isNaN(result) ? 'Error' : result; 
        this.updateDisplay();
      } catch (error) {
        this.currentValue = 'Error';
        this.updateDisplay();
      }
    }
  
    updateDisplay() {
      document.getElementById('result').value = this.currentValue;
    }
  }
  
  const calculator = new Calculator();