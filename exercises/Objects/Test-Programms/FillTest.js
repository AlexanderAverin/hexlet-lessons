const { concat } = require('lodash');
var _ = require('lodash');

const company = {
  name: null,
  state: 'moderating',
};
 
const data = {
  name: 'Hexlet',
  state: 'published',
};

const func = (str) => {

  const obj = {G: "C", C: "G", T: "A", A: "U"};
  let result = "";
  for (const nucleotide of str) {
    if (obj[nucleotide] === undefined) {
      return null;
    }
    result += obj[nucleotide];
  }
  return result;
};  
console.log(func(""));


const map = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const func2 = (dna) => {
  const rna = [];

  for (const nucleotide of dna) {
    if (!_.has(map, nucleotide)) {
      return null;
    }

    rna.push(map[nucleotide]);
  }

  return rna.join('');
};
console.log(func2(""));
//  Object.assign()