// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


var countBits = function (n) {
    // Program Me

    // Make an array with the bit result
    var binary = (n).toString(2).split('');

    // Make a sum with the array and make the index a Number
    var total = binary.reduce((sum, num) => sum + Number(num), 0);
    
    return total;

}



// Tests
Test.assertEquals(countBits(0), 0);
Test.assertEquals(countBits(4), 1);
Test.assertEquals(countBits(7), 3);
Test.assertEquals(countBits(9), 2);
Test.assertEquals(countBits(10), 2);

// Test Results:
// Test Passed: Value == 0
// Test Passed: Value == 1
// Test Passed: Value == 3
// Test Passed: Value == 2
// Test Passed: Value == 2
// You have passed all of the tests! :)


// Different Solutions

countBits = n => n.toString(2).split('0').join('').length;
// ====
function countBits(n) {
    for(c=0;n;n>>=1)c+=n&1
    return c;
}
// ===
var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
};
// ====
var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};
// ===
var countBits = function(n) {
    var count = 0;
    while(n > 0){
      if(n%2 === 1) {
        count++;
      }
      n = Math.floor(n/2);
    }
    return count;
};
// ===
var countBits = function(n) {
    // Program Me
    return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
};
// ===  
var countBits = function(n) {
    return n !== 0 ? n.toString(2).match(/1/g).length:0;
};
// ===
function countBits (n) {
    var arr = [];
    var count = 0;
    
    while (Math.pow(2, count) <= n) {
      arr.push(Math.pow(2, count));
      count++;
    }
    
    arr.reverse();
    count = 0;
    
    for (var i = 0; i < arr.length; i++) {
      if (n - arr[i] >= 0) {
        count++;
        n -= arr[i];
      }
    }
    
    return count;
  }