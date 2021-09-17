import _ from 'lodash';

const getEvenNumLength = (hexNum) => (hexNum.length % 2 !== 0 ? `0${hexNum}` : hexNum);

const ipToInt = (ip) => parseInt(ip.split('.')
  .reduce((acc, decimalNum) => {
    const hexNumber = Number(decimalNum).toString(16);
    const correctNum = getEvenNumLength(hexNumber);
    return [...acc, ...[correctNum]];
  }, []).join(''), 16);

const intToIp = (decimalNum) => {
  const n = String(decimalNum).length < 10 ? decimalNum : getEvenNumLength(decimalNum.toString(16));
 
}
console.log(intToIp(3221226219));

// const intToIp = (num) => _.chunk(getNormalasedNum(num.toString(16)), 2)
//   .map((item) => item.join(''))
//   .reduce((acc, n) => [...acc, ...[parseInt(n, 16)]], []).join('.');
