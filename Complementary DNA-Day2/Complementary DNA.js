// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 


function DNAStrand(dna) {
    // Breakdown into array by separating characters
    var array = dna.split('');

    var newArray = [];

    // Go through array & compare characters w/ if/else statements
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 'A') {
            newArray.push('T')
        } else if(array[i] == 'T') {
            newArray.push('A')
        } else if(array[i] == 'C') {
            newArray.push('G') 
        } else if (array[i] == 'G') {
            newArray.push('C')
        }
    }
    return newArray.join('');
    }

DNAStrand ('ATTGC') // return 'TAACG'

DNAStrand('GTAT') // return 'CATA'
    

// Tests
// Test Results:
// Test Passed: Value == 'TTTT'
// Test Passed: Value == 'TAACG'
// Test Passed: Value == 'CATA'
// You have passed all of the tests! :)

// Different Solutions
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}
// ===
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
// ===
function DNAStrand(dna){
    //your code here
    var result= "";
        for(var i =0; i<dna.length; i++) 
        {
          if (dna[i]==="A") 
         {
          result +="T";
         }
          else if (dna[i]==="T") 
         {
          result += "A";
          }
          else if (dna[i]==="C")
          {
          result +="G";
          }
          else if (dna[i]==="G")
          {
          result += "C";
          }
          else {
          result +=dna[i];
          }
       }
       return result;
}
// ===
function DNAStrand(dna){
    //your code here
    var res="";
    for(var i=0; i<dna.length; i++) {
      switch(dna[i]) {
        case 'A':
          res += "T";
          break;
        case 'T':
          res += "A";
          break;
        case 'G':
          res += "C";
          break;
        case 'C':
          res += "G";
          break;
      }
    }
    return res;
  }    
