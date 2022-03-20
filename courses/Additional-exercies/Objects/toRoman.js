const getArabicNum = (romanNum) => {
  const select = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return select[romanNum];
};

const parse = (romanNum) => romanNum.split(1);

function Make(romanNum) {
  this.allNum = romanNum;
}

Make.prototype.getAllNum = function getAllNum() {
  return this.allNum;
};

// console.log(toArabic('XVV'));
console.log(parse('1234'));
