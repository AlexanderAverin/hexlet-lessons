import _ from 'lodash';

const hexToRgb = (hexNumber) => _.chunk(hexNumber.slice(1).split(''), 2)
  .reduce((acc, num, index) => {
    const colors = ['r', 'g', 'b'];
    return { ...acc, [colors[index]]: parseInt(num.join(''), 16) };
  }, {});

const rgbToHex = (r, g, b) => [r, g, b]
  .reduce((acc, num) => {
    const decimalNum = num.toString(16).length === 1 ? `0${num.toString(16)}` : num.toString(16);
    return [...acc, ...decimalNum];
  }, ['#'])
  .join('');

console.log(hexToRgb('#24ab00'));
console.log(rgbToHex(36, 171, 0));
