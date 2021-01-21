// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    // Arrange array from smallest to largest integers
    numbers.sort((a,b) => a-b);
    
    // Remove nonpositive integers
    numbers = numbers.filter((x) => {return x>=0});
    
    // Sum of index 0 & 1
    sum = numbers[0] + numbers[1];
    
    return sum;
  }

  const chai = require("chai");
const assert = chai.assert;


// Tests
describe("Your function", function() {
  it("should work for basic tests", function() {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
});  

// Test Results:
// Your function
// should work for basic tests
// Test Passed
// Completed in 1ms
// should work for more fixed tests as well
// Test Passed
// should finally work for random tests
// Test Passed
// Completed in 4ms
// Completed in 5ms
// You have passed all of the tests! :)