// Test 1
let str = 'abcd';
// Test 2
let str = 'abcdefg';

function solution(str){
  let arr = new Array();
  let i = 0;
  
  if (str.length % 2 !== 0) {
    str = str + '_';
  } while (i < str.length) {
    arr.push(str[i] + str[i+1]);
    i +=2;
  }
  return arr;
  
  
//   str.split("");
//   for (let i = 0; i < str.length; i += 2) {
//     return str[i] + str[i+1];
//   }
  
}

console.log(solution(str));