function findOutlier(integers){
    let even = [];
    let odd = [];
    
    for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 !== 0) {
        odd.push(integers[i]);
      } else {
        even.push(integers[i]);
      }
    }
    
    if (odd.length === 1) {
      return odd[0];
    } else {
      return even[0];
    }
  }
  
  // Can create two arrays.
  // One array for odd numbers.
  // One array for even numbers.
  // Value can be divided using % and if the remainder is not 0 then pushed to odd array.
  // Value is pushed to even if remainder is 0.
  // Write a method that takes the array as an argument and returns this "outlier" N.