var CRC32 = require('crc-32');      

const func = (str) => {
  return CRC32.str(str);
};
console.log(func("Hello"));