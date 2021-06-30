var CRC32 = require('crc-32');      

const make = () => {
  return [];
};

const set = (map, key, value) => {
  const hash = CRC32.str(key);
  const index = Math.abs(hash) % 1000;
  
  if (map[index] === [key, value]) {
    return false;
  }
  
  let i = 0;
  
  if (map.length === 0) {
    i = 0;
  } 
  if (map.length > 0) {
     i = map.length - 1;
  }
  while (i <= index) {
    map.push([]);
    i += 1;
    }
  map[index] = [key, value];
  return true;
};
const map = make();

const get = (map, key, defaultValue = null) => {
  const hash = CRC32.str(key);
  const index = Math.abs(hash) % 1000;
  if (map[index] !== [] && map.length > 0 && map[index][0] === key) {
    return map[index][1];
  } else {
    return defaultValue; 
  }
};
console.log(Math.abs((CRC32.str('aaaaa0.0585754039730588') % 1000)));
