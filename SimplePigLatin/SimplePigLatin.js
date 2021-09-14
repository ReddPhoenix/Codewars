function pigIt(str) {
  const array = str.split(' ');
  
  return array.map((pigLatin) => {
    
    // RegEx
    return pigLatin.match(/[A-z]/i) ? `${pigLatin.substr(1)}${pigLatin.substr(0, 1)}ay` : pigLatin;
  
  }).join(' ')
}