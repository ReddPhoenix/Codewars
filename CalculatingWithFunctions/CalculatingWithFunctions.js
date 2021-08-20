// Calculation consists of one operation and two numbers
function calculation (numbers, operation) {
  if(!operation) {
    return numbers;
  }
  return operation(numbers);
}

// Function for each number
function zero(operation) {
  return calculation(0, operation);
}

function one(operation) {
  return calculation(1, operation);
}

function two(operation) {
  return calculation(2, operation);
}

function three(operation) {
  return calculation(3, operation);
}

function four(operation) {
  return calculation(4, operation);
}

function five(operation) {
  return calculation(5, operation);
}

function six(operation) {
  return calculation(6, operation);
}

function seven(operation) {
  return calculation(7, operation);
}

function eight(operation) {
  return calculation(8, operation);
}

function nine(operation) {
  return calculation(9, operation);
}

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
// Return using floor
function dividedBy(firstNumber) {
    return function(secondNumber) {
      return Math.floor(secondNumber / firstNumber);
    }
  }
  
// Tests
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(seven(times(five())), 35);
Test.assertEquals(four(plus(nine())), 13);
Test.assertEquals(eight(minus(three())), 5);
Test.assertEquals(six(dividedBy(two())), 3);
  });
});

// Test Results:
// Tests
// test
// Test Passed: Value == 35
// Test Passed: Value == 13
// Test Passed: Value == 5
// Test Passed: Value == 3
// Completed in 2ms
// Completed in 5ms
// You have passed all of the tests! :)
