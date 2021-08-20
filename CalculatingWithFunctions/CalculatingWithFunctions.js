// Calculation consists of one operation and two numbers
function calculation (numbers, operation)

// Function for each number
function zero(operation) {}
function one(operation) {}
function two(operation) {}
function three(operation) {}
function four(operation) {}
function five(operation) {}
function six(operation) {}
function seven(operation) {}
function eight(operation) {}
function nine(operation) {}

// Function for each operation
function plus(firstNumber) {
    return function(secondNumber) {
      return secondNumber + firstNumber;
    }
  }
  
  function minus(firstNumber) {
    return function(secondNumber) {
      return secondNumber - firstNumber;
    }
  }
                                                                                                                                                                                                       
  function times(firstNumber) {
    return function(secondNumber) {
      return secondNumber * firstNumber;   
    }
  }
  
  // Division should be integer division '/' and NOT '%'
  function dividedBy(firstNumber) {
    return function(secondNumber) {
      return secondNumber / firstNumber;
    }
  }