const RomanNumbersMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const parse = (romanNum) => romanNum.split(1);

const make = (romanNum) => ({
  allNum: romanNum,

});

// console.log(toArabic('XVV'));
console.log(parse('1234'));
